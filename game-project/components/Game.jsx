import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import Terrain from "./Terrain";

export default function Game() {
  return (
    <Canvas shadows camera={{ position: [0, 10, 20] }}>
      <Physics>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />
        <Environment preset="forest" />
        <OrbitControls />
        <Terrain />
        <Avatar />
      </Physics>
    </Canvas>
  );
}

import { Debug } from "@react-three/cannon";

// Wrap your scene with:
<Physics>
  <Debug>
    {/* Your scene objects */}
  </Debug>
</Physics>