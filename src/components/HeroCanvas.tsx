"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sparkles, Line, Text } from "@react-three/drei";
import * as THREE from "three";

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

type OrbitNode = {
  radius: number;
  speed: number;
  y: number;
  phase: number;
  size: number;
  tilt: number;
  label?: string;
};

function OrbitingModules() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const nodes = useMemo<OrbitNode[]>(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      radius: 2.6 + pseudoRandom(i * 1.7) * 1.6,
      speed: 0.5 + pseudoRandom(i * 2.1) * 0.8,
      y: -0.6 + pseudoRandom(i * 2.9) * 1.2,
      phase: pseudoRandom(i * 3.7) * Math.PI * 2,
      size: 0.1 + pseudoRandom(i * 5.1) * 0.22,
      tilt: pseudoRandom(i * 7.3) * Math.PI * 0.5,
      label: ["API", "UI", "CI/CD", "Docs", "Edge", "DB", "QA", "A11y"][i % 8],
    }));
  }, []);

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.getElapsedTime();
    nodes.forEach((node, idx) => {
      const angle = t * node.speed + node.phase;
      const x = Math.cos(angle) * node.radius;
      const z = Math.sin(angle) * node.radius;
      const wobble = Math.sin(t * 1.2 + idx) * 0.15;
      dummy.position.set(x, node.y + wobble, z);
      dummy.rotation.set(node.tilt, angle, node.tilt * 0.7);
      const scale = node.size + Math.sin(t * 1.4 + idx) * 0.03;
      dummy.scale.setScalar(scale * 1.5);
      dummy.updateMatrix();
      m.setMatrixAt(idx, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, nodes.length]}>
      <boxGeometry args={[0.3, 0.18, 0.04]} />
      <meshStandardMaterial
        color="#9be5ff"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        metalness={0.4}
        roughness={0.25}
      />
    </instancedMesh>
  );
}

function OrbitingLabels() {
  const group = useRef<THREE.Group>(null);
  const labels = useMemo<OrbitNode[]>(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      radius: 2.8 + pseudoRandom(i * 3.1) * 0.6,
      speed: 0.35 + pseudoRandom(i * 4.2) * 0.55,
      y: -0.4 + pseudoRandom(i * 5.4) * 1.0,
      phase: pseudoRandom(i * 6.2) * Math.PI * 2,
      size: 0.32 + pseudoRandom(i * 7.8) * 0.12,
      tilt: pseudoRandom(i * 9.3) * Math.PI * 0.4,
      label: ["API", "UI", "Auth", "AI", "Ops", "Perf", "Data", "DX"][i],
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.children.forEach((child, idx) => {
      const node = labels[idx];
      const angle = t * node.speed + node.phase;
      const x = Math.cos(angle) * node.radius;
      const z = Math.sin(angle) * node.radius;
      child.position.set(x, node.y, z);
      child.rotation.y = angle + node.tilt;
    });
  });

  return (
    <group ref={group}>
      {labels.map((node) => (
        <Text
          key={node.phase}
          fontSize={node.size}
          color="#bdeafe"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.9}
          outlineWidth={0.015}
          outlineColor="#0ea5e9"
          billboard
        >
          {node.label}
        </Text>
      ))}
    </group>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.2, 0.08);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.3, 0.08);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.6, 0.08);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, pointer.y * 0.4, 0.08);
  });

  return <group ref={group}>{children}</group>;
}

function Orbits() {
  const rings = [
    { radius: 2.4, color: "#22d3ee", opacity: 0.35 },
    { radius: 3.2, color: "#38bdf8", opacity: 0.25 },
    { radius: 4, color: "#0ea5e9", opacity: 0.18 },
  ];

  return (
    <>
      {rings.map((ring, idx) => (
        <Line
          key={ring.radius}
          points={new THREE.Path().absarc(0, 0, ring.radius, 0, Math.PI * 2).getSpacedPoints(120)}
          color={ring.color}
          opacity={ring.opacity}
          transparent
          lineWidth={1}
          position={[0, -0.7 + idx * 0.08, 0]}
        />
      ))}
    </>
  );
}

function DataBeams() {
  const beams = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const points = [];
      const r = 1.4 + i * 0.3;
      for (let a = 0; a <= Math.PI * 2; a += Math.PI / 24) {
        const y = Math.sin(a * 2 + i) * 0.4;
        points.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      }
      return points;
    });
  }, []);

  return (
    <>
      {beams.map((points, idx) => (
        <Line
          key={idx}
          points={points}
          color={idx % 2 === 0 ? "#22d3ee" : "#f97316"}
          opacity={0.35}
          transparent
          lineWidth={1}
        />
      ))}
    </>
  );
}

function CodePulse() {
  const ring = useRef<THREE.Mesh>(null);
  const plate = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.35;
    if (plate.current) plate.current.rotation.y += delta * 0.6;
  });

  return (
    <group>
      <mesh ref={plate} rotation={[-0.1, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.08, 32, 1, true]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#22d3ee"
          emissiveIntensity={0.45}
          metalness={0.35}
          roughness={0.2}
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={ring} rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.05, 0.06, 24, 120]} />
        <meshStandardMaterial color="#22d3ee" emissive="#38bdf8" emissiveIntensity={0.6} wireframe />
      </mesh>
      <Line
        points={[
          new THREE.Vector3(-1.3, 0, 0),
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(1.3, 0, 0),
        ]}
        color="#f97316"
        lineWidth={1.5}
        opacity={0.5}
        transparent
      />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="glass relative h-[480px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#05070f] via-[#030812] to-[#02040a]">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        className="bg-transparent"
      >
        <color attach="background" args={["transparent"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2.5, 4, 4]} intensity={1.5} />
        <Suspense fallback={null}>
          <ParallaxGroup>
            <mesh rotation-x={-Math.PI / 2} position={[0, -1.9, 0]}>
              <planeGeometry args={[24, 24]} />
              <meshBasicMaterial color="#010308" opacity={1} transparent />
            </mesh>
            <mesh rotation-x={-Math.PI / 2.05} position={[0, -1.55, 0]}>
              <planeGeometry args={[26, 18]} />
              <meshStandardMaterial
                color="#041124"
                transparent
                opacity={0.82}
                emissive="#0ea5e9"
                emissiveIntensity={0.18}
              />
            </mesh>
            <Sparkles
              count={2600}
              scale={[12, 8, 12]}
              size={1.2}
              speed={0.45}
              opacity={0.18}
              color="#8ee7ff"
            />
            <Orbits />
            <DataBeams />
            <OrbitingModules />
            <OrbitingLabels />
            <CodePulse />
            <Float speed={1.4} floatIntensity={0.4} rotationIntensity={0.2}>
              <mesh position={[-1.2, 1.4, -1]}>
                <boxGeometry args={[1.6, 0.9, 0.05]} />
                <meshStandardMaterial
                  color="#0ea5e9"
                  emissive="#22d3ee"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.9}
                />
              </mesh>
            </Float>
          </ParallaxGroup>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/8 via-transparent to-[var(--accent-warm)]/10" />
      <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl" />
    </div>
  );
}
