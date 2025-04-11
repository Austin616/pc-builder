import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const ComputerDesk = () => {
  const { scene } = useGLTF("/gaming_desktop_pc/scene.gltf");
  scene.position.set(0, -3, 0);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={4} />
      <primitive object={scene} />
    </mesh>
  );
};

const ComputerDeskCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 6, 20], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "70vh", width: "70vw",}} 
    >
      <Suspense fallback={<Preload all />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Preload all />
        <ComputerDesk />
      </Suspense>
    </Canvas>
  );
};

export default ComputerDeskCanvas;
