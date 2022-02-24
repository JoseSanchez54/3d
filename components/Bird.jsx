import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, Html } from "@react-three/drei";

export default function Bird({ speed, factor, url, ...props }) {
  const { nodes, materials } = useGLTF(url);
  const test = useGLTF(url);
  console.log(nodes);

  const group = useRef();

  /*   useEffect(
    () => void mixer.clipAction(animations[0], ref.current).play(),
    [mixer, animations, ref]
  ); */

  /*   useFrame((state, delta) => {
    ref.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  }); */

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id4.geometry}
          material={materials["59"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id5.geometry}
          material={materials["61"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id6.geometry}
          material={materials["63"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id7.geometry}
          material={materials["65"]}
          position={[0.03, -256, 256]}
          scale={1644.5}
        />
      </group>
    </group>
  );
}
