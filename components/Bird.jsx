import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/glb/winee.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.22, 0, 0.13]}
        rotation={[-0.01, 1.05, 0]}
        scale={[0, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id7.geometry}
          material={materials["69"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id4.geometry}
          material={materials["63"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id6.geometry}
          material={materials["67"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id5.geometry}
          material={materials["65"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/winee.glb");
