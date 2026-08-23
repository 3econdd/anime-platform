'use client';

import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function FloatingCards3D() {
  return (
    <div className="absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <Float speed={1.7} rotationIntensity={1.4} floatIntensity={2.4}>
          <mesh position={[-2.2, 0.5, 0]}>
            <boxGeometry args={[1.5, 2.2, 0.2]} />
            <MeshDistortMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.8} speed={2} distort={0.4} radius={0.8} />
          </mesh>
        </Float>
        <Float speed={1.5} rotationIntensity={1.8} floatIntensity={2.2}>
          <mesh position={[2.2, -0.5, 0.3]}>
            <dodecahedronGeometry args={[1.2, 0]} />
            <MeshDistortMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.1} speed={2.2} distort={0.3} radius={0.9} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
