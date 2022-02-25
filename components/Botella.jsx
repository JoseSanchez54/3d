import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Botella({ url }, props) {
  const { nodes, animations } = useGLTF(url);
  const ref = useRef();

  return (
    <group position={[0, -0.1, 0]} ref={ref}>
      <scene {...props} name="Scene">
        <mesh name="objeto">
          <meshStandardMaterial
            attach="material"
            {...nodes.mesh_id7.material}
            name="Material_0_COLOR_0"
          />
          <bufferGeometry attach="geometry" {...nodes.mesh_id7.geometry} />
        </mesh>
        <mesh name="Object_0">
          <bufferGeometry attach="geometry" {...nodes.mesh_id4.geometry} />

          <meshStandardMaterial
            attach="material"
            {...nodes.mesh_id4.material}
            name="Material_0_COLOR_0"
          />
        </mesh>
      </scene>
    </group>
  );
}
