'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

export function CanvasContainer() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 4, 2]} intensity={2} color="#7dd3fc" />
        <Float speed={2} rotationIntensity={1.8} floatIntensity={2}>
          <group>
            <mesh position={[0, 0, 0]}>
              <icosahedronGeometry args={[1.5, 1]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#22d3ee" emissiveIntensity={0.8} wireframe />
            </mesh>
          </group>
        </Float>
        <Stars radius={30} depth={20} count={1800} factor={4} saturation={0} fade speed={0.8} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
