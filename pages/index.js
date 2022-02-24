import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bird from "../components/Bird";

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Bird url={`/glb/winee.glb`} />
        </Suspense>
      </Canvas>
    </>
  );
}
