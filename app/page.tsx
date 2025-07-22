import Model from "./components/Model/Model"

export default function Home() {
  return (
    <div className="home bg-black text-white">
      {/* <OldHome /> */}
      <div className="">
        {/* <div className="name font-[family-name:var(--font-akira)] text-7xl mt-16 ">Hariz Hakim</div>
        <div className="title font-[family-name:var(--font-geist-mono)] text-lg sm:text-xl text-gray-300">
          <p>Full-stack developer</p>
        </div> */}
        <div className="three-container">
          <Model />
        </div>
      </div>
    </div>
  );
}