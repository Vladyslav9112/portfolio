"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort =
        0.35 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.6, 128, 128]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#6C63FF"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.15}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>
      {/* Inner glow sphere */}
      <Sphere args={[1.75, 32, 32]}>
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>
      {/* Outer halo */}
      <Sphere args={[2.1, 32, 32]}>
        <meshStandardMaterial
          color="#6C63FF"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({
  radius,
  speed,
  tiltX,
  tiltZ,
  color,
  opacity = 0.55,
}: {
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  color: string;
  opacity?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });
  return (
    <group ref={groupRef} rotation={[tiltX, 0, tiltZ]}>
      <Torus args={[radius, 0.012, 8, 160]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </Torus>
    </group>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const points = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.04;
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#6C63FF"
        size={0.035}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingSphere() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#6C63FF"
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.6}
          color="#00d4ff"
        />
        <pointLight
          position={[0, 0, 3]}
          intensity={2}
          color="#6C63FF"
          distance={8}
        />
        <pointLight
          position={[3, 3, 0]}
          intensity={1}
          color="#00d4ff"
          distance={6}
        />
        <GlowSphere />
        <OrbitRing
          radius={2.6}
          speed={0.28}
          tiltX={Math.PI / 5}
          tiltZ={0.2}
          color="#6C63FF"
          opacity={0.6}
        />
        <OrbitRing
          radius={3.1}
          speed={-0.18}
          tiltX={Math.PI / 3}
          tiltZ={-0.3}
          color="#00d4ff"
          opacity={0.45}
        />
        <OrbitRing
          radius={3.6}
          speed={0.12}
          tiltX={Math.PI / 6}
          tiltZ={0.5}
          color="#ff6b6b"
          opacity={0.25}
        />
        <ParticleField />
        <Stars
          radius={60}
          depth={50}
          count={1000}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}
