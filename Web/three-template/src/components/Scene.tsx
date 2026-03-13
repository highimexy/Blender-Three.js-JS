import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid, Center } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Model";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 60 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls enableDamping />
      <Grid infiniteGrid />
      <axesHelper args={[5]} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Center>
          <Model />
        </Center>
      </Suspense>
    </Canvas>
  );
}
