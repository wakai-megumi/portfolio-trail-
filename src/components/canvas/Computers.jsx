import React from "react";
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import CanvasLoader from "../Loader";
// import { hemisphereLight } from "three";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <Canvas>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          // scale={0.75}
          position={[0, -3.25, -1.5]}
          // rotation={[-0.01, -0.02, -0.01]}
        />
      </mesh>
    </Canvas>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Computers;
export { ComputersCanvas };
