import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Botella from "../components/Botella";

export default function BirdsPage() {
  return (
    <>
      <Canvas camera={{ position: [0.5, 0, 0], zoom: 1 }}>
        <OrbitControls autoRotate autoRotateSpeed={10} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[50, 40, 40]} />

        <Suspense fallback={null}>
          <Botella
            key={1}
            position={[0, 0, 0]}
            rotation={[0, 1 > 0 ? Math.PI : 0, 0]}
            speed={2}
            factor={1}
            url={`/glb/winee.glb`}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
