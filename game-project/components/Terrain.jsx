import { useBox } from "@react-three/cannon";
import { Plane, Html } from "@react-three/drei";

export default function Terrain() {
  const [groundRef] = useBox(() => ({
    type: "Static",
    position: [0, -1, 0],
    args: [100, 2, 100],
  }));

  return (
    <group>
      <Plane
        ref={groundRef}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="green" />
      </Plane>
      {/* Mountains */}
      <mesh position={[20, 0, 0]} receiveShadow>
        <coneGeometry args={[5, 10, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}