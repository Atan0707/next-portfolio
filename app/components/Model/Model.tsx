'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export default function Model() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // === THREE.JS CORE CONCEPTS ===
    
    // 1. SCENE - Container for all 3D objects
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x222222) // Dark gray background

    // 2. CAMERA - Defines the perspective/viewpoint
    const camera = new THREE.PerspectiveCamera(
      50,                                    // Field of view (degrees)
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1,                                   // Near clipping plane
      1000                                   // Far clipping plane
    )
    camera.position.set(0, 2, 5) // Position camera to better view the model

    // 3. RENDERER - Draws the scene using WebGL
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace // Better color rendering
    
    // Append to our div instead of document.body
    mountRef.current.appendChild(renderer.domElement)

    // === LIGHTING SETUP FOR 3D MODELS ===
    
    // Ambient light (soft overall lighting) - essential for 3D models
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)
    
    // Directional light (like sunlight) - creates depth and shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    scene.add(directionalLight)

    // Point light for additional illumination
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100)
    pointLight.position.set(-5, 5, 5)
    scene.add(pointLight)

    // === GROUND PLANE ===
    const planeGeometry = new THREE.PlaneGeometry(20, 20)
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -Math.PI / 2 // Rotate to be horizontal
    plane.position.y = -1
    plane.receiveShadow = true
    scene.add(plane)

    // === LOADING 3D MODELS ===
    
    // GLTFLoader is used to load .gltf and .glb files
    // GLB is the binary version of GLTF (more compact)
    const loader = new GLTFLoader()
    
    // Variables to store our loaded model
    let catModel: THREE.Group | null = null
    
    // Load the cat model
    loader.load(
      '/cat.glb', // Path to your model file
      
      // Success callback - called when model loads successfully
      (gltf) => {
        console.log('✅ Cat model loaded successfully!', gltf)
        
        // The main model is in gltf.scene
        catModel = gltf.scene
        
        // === MODEL POSITIONING AND SCALING ===
        
        // Scale the model (adjust if too big/small)
        catModel.scale.setScalar(1) // 1 = original size, 0.5 = half size, 2 = double size
        
        // Position the model
        catModel.position.set(0, 0, 0) // x, y, z coordinates
        
        // Rotate the model if needed
        catModel.rotation.y = 0 // Rotate around Y-axis (in radians)
        
        // === ENABLE SHADOWS FOR THE MODEL ===
        
        // Traverse through all meshes in the model and enable shadows
        catModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true // Model casts shadows
            child.receiveShadow = true // Model receives shadows
            
            // Ensure materials render properly
            if (child.material) {
              child.material.needsUpdate = true
            }
          }
        })
        
        // Add the model to the scene
        scene.add(catModel)
        
        // === OPTIONAL: CENTER THE MODEL ===
        
        // Calculate bounding box to center the model
        const box = new THREE.Box3().setFromObject(catModel)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Move model so its center is at origin
        catModel.position.x = -center.x
        catModel.position.y = -box.min.y // Place on ground
        catModel.position.z = -center.z
        
        console.log('📏 Model size:', size)
        console.log('📍 Model center:', center)
      },
      
      // Progress callback - called during loading
      (progress) => {
        const percentComplete = (progress.loaded / progress.total) * 100
        console.log('⏳ Loading progress:', percentComplete.toFixed(2) + '%')
      },
      
      // Error callback - called if loading fails
      (error) => {
        console.error('❌ Error loading cat model:', error)
      }
    )

    // === CAMERA CONTROLS (Optional Enhancement) ===
    
    // Simple mouse controls for rotating the camera around the model
    let mouseDown = false
    let mouseX = 0
    let mouseY = 0
    let cameraAngleX = 0
    let cameraAngleY = 0
    
    const handleMouseDown = (event: MouseEvent) => {
      mouseDown = true
      mouseX = event.clientX
      mouseY = event.clientY
    }
    
    const handleMouseUp = () => {
      mouseDown = false
    }
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!mouseDown) return
      
      const deltaX = event.clientX - mouseX
      const deltaY = event.clientY - mouseY
      
      cameraAngleY -= deltaX * 0.01
      cameraAngleX -= deltaY * 0.01
      
      // Limit vertical rotation
      cameraAngleX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraAngleX))
      
      // Update camera position
      const radius = 5
      camera.position.x = Math.sin(cameraAngleY) * Math.cos(cameraAngleX) * radius
      camera.position.y = Math.sin(cameraAngleX) * radius + 2
      camera.position.z = Math.cos(cameraAngleY) * Math.cos(cameraAngleX) * radius
      camera.lookAt(0, 1, 0) // Look at the model center
      
      mouseX = event.clientX
      mouseY = event.clientY
    }
    
    // Add mouse event listeners
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    // === ANIMATION LOOP ===
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate the cat model slowly if it's loaded
      if (catModel) {
        catModel.rotation.y += 0.005 // Slow rotation around Y-axis
      }
      
      // Render the scene
      renderer.render(scene, camera)
    }
    
    animate()

    // === RESPONSIVE HANDLING ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    // === CLEANUP ===
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <div 
        ref={mountRef} 
        style={{ width: '100%', height: '100vh' }}
        className="three-container"
      >
        {/* Three.js canvas will be mounted here */}
      </div>
      
      {/* Loading instructions overlay */}
      <div className="absolute top-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md">
        <h3 className="font-bold text-lg mb-2">🐱 3D Model Loading Tutorial</h3>
        <ul className="text-sm space-y-1">
          <li>• Check console for loading progress</li>
          <li>• Mouse drag to rotate camera</li>
          <li>• Model auto-rotates when loaded</li>
          <li>• Shadows and lighting applied</li>
        </ul>
      </div>
    </div>
  )
}
