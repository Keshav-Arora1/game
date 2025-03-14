import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useStore } from "../store/useGameStore";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";

export default function Avatar() {
  const { camera } = useThree();
  const { moveSpeed, jumpPower, position, setPosition } = useStore();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 5, 0],
    args: [1.5],
  }));

  useEffect(() => {
    api.position.subscribe((p) => setPosition(p));
  }, [api]);

  useFrame((state) => {
    const direction = new Vector3();
    const frontVector = state.keyboard.forward
      ? -1
      : state.keyboard.backward
      ? 1
      : 0;
    const sideVector = state.keyboard.left
      ? -1
      : state.keyboard.right
      ? 1
      : 0;

    direction.set(sideVector, 0, frontVector).normalize();
    api.velocity.set(
      direction.x * moveSpeed,
      api.velocity.y,
      direction.z * moveSpeed
    );

    // Camera follow
    camera.position.lerp(
      new Vector3(position[0], 10, position[2] + 10),
      0.1
    );
    camera.lookAt(position[0], 0, position[2]);
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

import { Points, PointMaterial } from "@react-three/drei";

function KiBlast() {
  return (
    <Points>
      <PointMaterial
        color="yellow"
        size={0.2}
        transparent
        opacity={0.8}
      />
      {/* Add particle positions */}
    </Points>
  );
}