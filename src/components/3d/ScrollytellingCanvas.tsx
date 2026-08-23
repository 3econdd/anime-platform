'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, RoundedBox, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import type { Group } from 'three';

gsap.registerPlugin(ScrollTrigger);

const posterUrls = [
  'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
  'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
  'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
  'https://cdn.myanimelist.net/images/anime/10/47330l.jpg'
];

function HolographicStack({ progress }: { progress: number }) {
  const group = useRef<Group>(null);
  const textures = useTexture(posterUrls);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.8 + progress * Math.PI * 2;
    group.current.rotation.x = Math.sin(t * 0.7) * 0.45;
    group.current.rotation.z = Math.cos(t * 0.9) * 0.25;
    group.current.position.y = Math.sin(t * 1.3) * 0.35;
    group.current.position.x = (progress - 0.5) * 1.2;
  });

  return (
    <group ref={group}>
      {textures.map((texture, index) => (
        <Float
          key={index}
          speed={1.7 + index * 0.3}
          rotationIntensity={1.1}
          floatIntensity={2.2}
        >
          <RoundedBox
            args={[1.7, 2.45, 0.16]}
            radius={0.08}
            position={[
              (index - 1.5) * 1.4 + progress * 0.6,
              (index - 1.5) * 0.22,
              (index - 1.5) * 0.22
            ]}
            rotation={[0.2 + index * 0.2, index * 0.7, 0.75]}
          >
            <meshPhysicalMaterial
              map={texture}
              emissive="#67e8f9"
              emissiveIntensity={0.32 + progress}
              metalness={0.7}
              roughness={0.18}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </RoundedBox>

          <mesh position={[
            (index - 1.5) * 1.4 + progress * 0.6,
            (index - 1.5) * 0.22,
            (index - 1.5) * 0.22 + 0.1
          ]} rotation={[0.2 + index * 0.2, index * 0.7, 0.75]}>
            <boxGeometry args={[1.8, 2.55, 0.02]} />
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.9 + progress * 1.2} wireframe />
          </mesh>
        </Float>
      ))}

      <mesh position={[0, 0, -1.4]}>
        <torusGeometry args={[3.2, 0.08, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={1.2} />
      </mesh>

      <mesh position={[0, 0, -1.9]}>
        <torusGeometry args={[3.8, 0.035, 16, 160]} />
        <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

function Scene({ progress }: { progress: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 34 }} dpr={[1, 2]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 3]} intensity={2.8} color="#7dd3fc" />
      <pointLight position={[-2, -1, 3]} intensity={18} color="#ec4899" />
      <pointLight position={[2, 2, 4]} intensity={16} color="#22d3ee" />
      <fog attach="fog" args={['#050508', 10, 24]} />
      <HolographicStack progress={progress} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}

export function ScrollytellingCanvas() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setHasWebGL(Boolean(gl));
  }, []);

  useEffect(() => {
    if (!triggerRef.current || !hasWebGL) return;

    const ctx = gsap.context(() => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.25,
          onUpdate: () => setProgress(obj.value)
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [hasWebGL]);

  if (!hasWebGL) {
    return (
      <div className="relative h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0f]">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.2),transparent_45%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_35%)]"
          animate={{ scale: [1, 1.04, 1], rotate: [0, 12, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/10 shadow-[0_0_90px_rgba(34,211,238,0.35)]"
          animate={{ rotateY: [0, 180, 360], rotateX: [10, -20, 10], scale: [1, 1.09, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
    );
  }

  return (
    <div ref={triggerRef} className="relative h-[760px] overflow-hidden rounded-[32px] border border-white/10 bg-[#050508]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.12),transparent_40%)]" />

      <div className="pointer-events-none absolute left-6 top-1/2 z-20 max-w-[220px] -translate-y-1/2 text-left text-slate-200 md:left-10">
        <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-cyan-300">UNMATCHED AUDIO</p>
        <h3 className="text-2xl font-black leading-tight text-white md:text-4xl">GEO & ENG DUBBED</h3>
        <p className="mt-3 text-sm text-slate-300" style={{ opacity: 0.35 + progress * 0.6 }}>
          Switch Georgian and English dubs instantly without breaking immersive playback.
        </p>
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 z-20 max-w-[240px] -translate-y-1/2 text-right text-slate-200 md:right-10">
        <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-fuchsia-300">ULTRA HD STREAMING</p>
        <h3 className="text-2xl font-black leading-tight text-white md:text-4xl">4K HLS / WATCH SYNC</h3>
        <p className="mt-3 text-sm text-slate-300" style={{ opacity: 0.35 + progress * 0.6 }}>
          Supabase-backed history, seamless quality switching, and high-density metadata.
        </p>
      </div>

      <div className="absolute inset-0 z-10">
        <Scene progress={progress} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-30 flex justify-center">
        <div className="rounded-full border border-white/10 bg-black/20 px-6 py-3 text-[10px] uppercase tracking-[0.38em] text-slate-200 backdrop-blur-md">
          THE NEXT ERA OF ANIME STREAMING
        </div>
      </div>
    </div>
  );
}
