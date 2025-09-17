# 🐱 Three.js 3D Model Loading Tutorial

## Overview
This tutorial teaches you how to load and display 3D models (GLB/GLTF files) in Three.js using your cat.glb model as an example.

## 📁 File Formats

### GLTF vs GLB
- **GLTF** (.gltf): JSON-based, human-readable, separate texture files
- **GLB** (.glb): Binary format, all data in one file (recommended for web)

### Why GLB?
- ✅ Smaller file size
- ✅ Faster loading (single file)
- ✅ No missing texture issues
- ✅ Better for web deployment

## 🛠️ Setup Requirements

### 1. Install Dependencies
```bash
yarn add three-stdlib
# or
npm install three-stdlib
```

### 2. Import Required Modules
```typescript
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
```

## 🎯 Key Concepts

### 1. GLTFLoader
The `GLTFLoader` is specifically designed to load GLTF/GLB files:

```typescript
const loader = new GLTFLoader()
```

### 2. Loading Process
Loading happens asynchronously with three callbacks:

```typescript
loader.load(
  '/model.glb',           // Path to model
  (gltf) => { /* Success */ },
  (progress) => { /* Loading progress */ },
  (error) => { /* Error handling */ }
)
```

### 3. GLTF Structure
When a model loads successfully, you get a `GLTF` object containing:
- `scene`: The main 3D object to add to your scene
- `animations`: Any animations in the model
- `cameras`: Cameras defined in the model
- `asset`: Metadata about the model

## 🎨 Model Manipulation

### Positioning
```typescript
model.position.set(x, y, z)           // Absolute position
model.position.x = 5                  // Individual axis
```

### Scaling
```typescript
model.scale.setScalar(2)              // Uniform scale (2x bigger)
model.scale.set(1, 2, 1)              // Non-uniform scale
```

### Rotation
```typescript
model.rotation.y = Math.PI / 4        // 45 degrees around Y-axis
model.rotation.set(x, y, z)           // Set all rotations
```

### Centering Models
```typescript
// Calculate bounding box
const box = new THREE.Box3().setFromObject(model)
const center = box.getCenter(new THREE.Vector3())
const size = box.getSize(new THREE.Vector3())

// Center the model
model.position.x = -center.x
model.position.y = -box.min.y  // Place on ground
model.position.z = -center.z
```

## 💡 Lighting for 3D Models

3D models need proper lighting to look good:

### Essential Lights
```typescript
// Ambient light - soft overall illumination
const ambientLight = new THREE.AmbientLight(0x404040, 0.6)

// Directional light - simulates sunlight
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 10, 5)

// Point light - localized light source
const pointLight = new THREE.PointLight(0xffffff, 0.5, 100)
```

### Shadow Setup
```typescript
// Enable shadows on renderer
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// Enable shadows on lights
directionalLight.castShadow = true

// Enable shadows on model meshes
model.traverse((child) => {
  if (child instanceof THREE.Mesh) {
    child.castShadow = true
    child.receiveShadow = true
  }
})
```

## 🎮 Interactivity

### Mouse Controls
```typescript
// Camera orbit controls
let mouseDown = false
let cameraAngleX = 0
let cameraAngleY = 0

const handleMouseMove = (event: MouseEvent) => {
  if (!mouseDown) return
  
  const deltaX = event.clientX - mouseX
  const deltaY = event.clientY - mouseY
  
  cameraAngleY -= deltaX * 0.01
  cameraAngleX -= deltaY * 0.01
  
  // Update camera position
  const radius = 5
  camera.position.x = Math.sin(cameraAngleY) * radius
  camera.position.y = Math.sin(cameraAngleX) * radius + 2
  camera.position.z = Math.cos(cameraAngleY) * radius
  camera.lookAt(0, 1, 0)
}
```

### Model Animation
```typescript
// In your animation loop
const animate = () => {
  requestAnimationFrame(animate)
  
  if (model) {
    model.rotation.y += 0.005  // Slow rotation
  }
  
  renderer.render(scene, camera)
}
```

## 🐛 Common Issues & Solutions

### Model Not Visible
1. **Check file path**: Ensure `/cat.glb` is in the `public` folder
2. **Check scale**: Model might be too small/large
3. **Check position**: Model might be outside camera view
4. **Check lighting**: Dark models need proper lighting

### Performance Issues
1. **Optimize model**: Reduce polygon count
2. **Texture compression**: Use smaller textures
3. **LOD**: Use Level of Detail for distant objects
4. **Culling**: Remove objects outside camera view

### Loading Errors
```typescript
// Add error handling
loader.load(
  '/cat.glb',
  (gltf) => { /* Success */ },
  (progress) => { /* Progress */ },
  (error) => {
    console.error('Model loading failed:', error)
    // Fallback: create simple geometry
    const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1)
    const fallbackMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
    scene.add(fallbackMesh)
  }
)
```

## 🎬 Advanced Features

### Animations
If your model has animations:
```typescript
let mixer: THREE.AnimationMixer
let animations: THREE.AnimationAction[]

loader.load('/model.glb', (gltf) => {
  if (gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(gltf.scene)
    
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip)
      action.play()
    })
  }
})

// In animation loop
if (mixer) {
  mixer.update(clock.getDelta())
}
```

### Material Modifications
```typescript
model.traverse((child) => {
  if (child instanceof THREE.Mesh) {
    // Modify material properties
    if (child.material) {
      child.material.metalness = 0.5
      child.material.roughness = 0.5
      child.material.envMapIntensity = 1.0
    }
  }
})
```

### Environment Maps
```typescript
// Add environment lighting
const pmremGenerator = new THREE.PMREMGenerator(renderer)
scene.environment = pmremGenerator.fromScene(scene).texture
```

## 📝 Best Practices

### 1. Model Optimization
- Keep polygon count reasonable (< 50k for web)
- Use power-of-2 texture sizes (512x512, 1024x1024)
- Combine meshes when possible
- Remove unnecessary materials

### 2. Loading Strategy
- Show loading progress to users
- Implement fallbacks for failed loads
- Preload critical models
- Use compression (Draco, KTX2)

### 3. Performance
- Use `renderer.info` to monitor performance
- Implement frustum culling
- Use instancing for repeated objects
- Consider using `useLOD` for distance-based quality

### 4. User Experience
- Provide loading indicators
- Allow user interaction (zoom, rotate)
- Responsive design for mobile
- Error handling with user feedback

## 🚀 Testing Your Implementation

1. **Open browser console** to see loading messages
2. **Check for errors** in the console
3. **Test mouse interactions** by dragging
4. **Verify shadows** are working
5. **Test on mobile** devices

Your cat model should now be visible, rotating slowly, with proper lighting and shadows. You can drag to orbit around the model!

## 📚 Next Steps

1. **Add animations** if your model has them
2. **Implement better controls** (zoom, pan)
3. **Add environment maps** for realistic reflections
4. **Optimize for mobile** performance
5. **Add UI controls** for model properties

Happy 3D modeling! 🎉 