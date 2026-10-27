import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { createScreenTexture } from './ScreenTexture';

// Detailed procedural 3D Laptop Model
function Laptop({ mousePos }) {
  const groupRef = useRef();
  const screenTexture = useMemo(() => createScreenTexture(), []);

  // Soft keyboard keys data
  const keys = useMemo(() => {
    const list = [];
    const rows = 5;
    const cols = 12;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        list.push({
          x: (c - cols / 2 + 0.5) * 0.23,
          z: (r - rows / 2 + 0.5) * 0.22 - 0.1,
          w: 0.19,
          d: 0.18,
        });
      }
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Gentle floating idle animation
    groupRef.current.position.y = Math.sin(time * 1.4) * 0.08 - 0.2;

    // Mouse parallax tracking with smooth lerp
    const targetRotX = 0.25 - (mousePos.current.y * 0.35);
    const targetRotY = -0.55 + (mousePos.current.x * 0.5);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2.5);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 2.5);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, (mousePos.current.x * 0.1), delta * 2.5);
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} rotation={[0.25, -0.55, 0]}>
      {/* LAPTOP BASE DECK */}
      <group position={[0, 0, 0]}>
        {/* Main Base Aluminum Chassis */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3.4, 0.1, 2.3]} />
          <meshStandardMaterial
            color="#131929"
            metalness={0.88}
            roughness={0.25}
          />
        </mesh>

        {/* Base Bottom Bevel/Feet */}
        <mesh position={[0, -0.11, 0]}>
          <boxGeometry args={[3.2, 0.03, 2.1]} />
          <meshStandardMaterial color="#0b0f19" roughness={0.6} />
        </mesh>

        {/* Inset Keyboard Well */}
        <mesh position={[0, 0.002, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.95, 1.25]} />
          <meshStandardMaterial color="#080c16" roughness={0.5} />
        </mesh>

        {/* Keyboard Keys */}
        {keys.map((k, i) => (
          <mesh key={i} position={[k.x, 0.015, k.z]}>
            <boxGeometry args={[k.w, 0.018, k.d]} />
            <meshStandardMaterial
              color="#1a2333"
              roughness={0.4}
              emissive="#1e293b"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}

        {/* Trackpad */}
        <mesh position={[0, 0.004, 0.65]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.2, 0.75]} />
          <meshStandardMaterial
            color="#141c2c"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        {/* Trackpad border glow */}
        <mesh position={[0, 0.005, 0.65]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.59, 0.605, 4]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.35} />
        </mesh>

        {/* Front Opening Notch */}
        <mesh position={[0, -0.01, 1.155]}>
          <boxGeometry args={[0.5, 0.03, 0.02]} />
          <meshStandardMaterial color="#2d3748" metalness={0.9} />
        </mesh>

        {/* Side Ports (USB-C / Thunderbolt) */}
        <mesh position={[-1.705, -0.05, -0.3]}>
          <boxGeometry args={[0.015, 0.025, 0.08]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-1.705, -0.05, -0.1]}>
          <boxGeometry args={[0.015, 0.025, 0.08]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[1.705, -0.05, -0.2]}>
          <boxGeometry args={[0.015, 0.025, 0.08]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>

      {/* HINGE */}
      <mesh position={[0, 0.02, -1.14]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 3.2, 16]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* LAPTOP SCREEN LID (Angled Open ~108 degrees) */}
      <group position={[0, 0.02, -1.14]} rotation={[1.88, 0, 0]}>
        {/* Screen Outer Aluminum Lid */}
        <mesh position={[0, 1.12, -0.03]}>
          <boxGeometry args={[3.4, 2.25, 0.05]} />
          <meshStandardMaterial
            color="#101524"
            metalness={0.9}
            roughness={0.22}
          />
        </mesh>

        {/* Glowing Monogram Logo on Back of Lid */}
        <mesh position={[0, 1.12, -0.057]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.22, 32]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 1.12, -0.058]} rotation={[0, Math.PI, 0]}>
          <ringGeometry args={[0.24, 0.26, 32]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>

        {/* Screen Glass / Display Bezel */}
        <mesh position={[0, 1.12, 0.001]}>
          <boxGeometry args={[3.3, 2.15, 0.01]} />
          <meshStandardMaterial color="#040711" roughness={0.2} />
        </mesh>

        {/* Web Camera Dot */}
        <mesh position={[0, 2.14, 0.007]}>
          <circleGeometry args={[0.016, 16]} />
          <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.8} />
        </mesh>

        {/* ACTIVE SCREEN DISPLAY WITH CODE TEXTURE */}
        <mesh position={[0, 1.1, 0.008]}>
          <planeGeometry args={[3.12, 1.95]} />
          <meshBasicMaterial
            map={screenTexture}
            toneMapped={false}
          />
        </mesh>

        {/* Subtle Screen Ambient Neon Light */}
        <pointLight position={[0, 1.1, 0.4]} color="#38bdf8" intensity={0.9} distance={2.5} />
      </group>
    </group>
  );
}

// 3D Floating React Atom
function ReactAtom({ position = [2.2, 1.2, -0.2] }) {
  const atomRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state, delta) => {
    if (!atomRef.current) return;
    const t = state.clock.getElapsedTime();
    atomRef.current.position.y = position[1] + Math.sin(t * 1.6) * 0.12;
    ring1.current.rotation.z += delta * 1.2;
    ring2.current.rotation.x += delta * 1.1;
    ring3.current.rotation.y += delta * 1.3;
  });

  return (
    <group ref={atomRef} position={position} scale={0.55}>
      {/* Core Nucleus */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.2}
          roughness={0.1}
        />
      </mesh>
      {/* Atom Orbital Ring 1 */}
      <mesh ref={ring1} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.65, 0.025, 16, 64]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      {/* Atom Orbital Ring 2 */}
      <mesh ref={ring2} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[0.65, 0.025, 16, 64]} />
        <meshBasicMaterial color="#06b6d4" />
      </mesh>
      {/* Atom Orbital Ring 3 */}
      <mesh ref={ring3} rotation={[-Math.PI / 3, -Math.PI / 6, 0]}>
        <torusGeometry args={[0.65, 0.025, 16, 64]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
    </group>
  );
}

// 3D Floating Node.js Hexagon
function NodeHexagon({ position = [-2.3, 0.9, 0.2] }) {
  const hexRef = useRef();

  useFrame((state, delta) => {
    if (!hexRef.current) return;
    const t = state.clock.getElapsedTime();
    hexRef.current.position.y = position[1] + Math.cos(t * 1.5 + 1) * 0.14;
    hexRef.current.rotation.y += delta * 0.9;
    hexRef.current.rotation.z += delta * 0.4;
  });

  return (
    <group ref={hexRef} position={position} scale={0.5}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.2, 6]} />
        <meshStandardMaterial
          color="#15803d"
          emissive="#22c55e"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      {/* Wireframe neon edge */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.57, 0.57, 0.21, 6]} />
        <meshBasicMaterial color="#4ade80" wireframe />
      </mesh>
    </group>
  );
}

// 3D Floating MongoDB Leaf Capsule
function MongoEmblem({ position = [-1.9, -1.1, 0.6] }) {
  const mongoRef = useRef();

  useFrame((state, delta) => {
    if (!mongoRef.current) return;
    const t = state.clock.getElapsedTime();
    mongoRef.current.position.y = position[1] + Math.sin(t * 1.8 + 2) * 0.1;
    mongoRef.current.rotation.y += delta * 1.1;
    mongoRef.current.rotation.x += delta * 0.5;
  });

  return (
    <group ref={mongoRef} position={position} scale={0.45}>
      <mesh>
        <capsuleGeometry args={[0.3, 0.7, 16, 32]} />
        <meshStandardMaterial
          color="#047857"
          emissive="#10b981"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      {/* Glowing ring accent */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.45, 0.02, 16, 32]} />
        <meshBasicMaterial color="#34d399" />
      </mesh>
    </group>
  );
}

// 3D Floating Express.js Cylinder
function ExpressEmblem({ position = [2.1, -1.0, 0.5] }) {
  const expRef = useRef();

  useFrame((state, delta) => {
    if (!expRef.current) return;
    const t = state.clock.getElapsedTime();
    expRef.current.position.y = position[1] + Math.cos(t * 1.4 + 2) * 0.12;
    expRef.current.rotation.y += delta * 0.8;
  });

  return (
    <group ref={expRef} position={position} scale={0.48}>
      <mesh>
        <cylinderGeometry args={[0.45, 0.45, 0.18, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#64748b"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[0.5, 0.025, 16, 32]} />
        <meshBasicMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

// Glowing Orbital Hologram Rings
function OrbitalRings() {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.18;
    if (ring2.current) ring2.current.rotation.x += delta * 0.14;
  });

  return (
    <group position={[0, -0.1, 0]}>
      {/* Large Blue Orbit */}
      <mesh ref={ring1} rotation={[Math.PI / 3, 0.3, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
      </mesh>
      {/* Violet Orbit */}
      <mesh ref={ring2} rotation={[-Math.PI / 4, -0.4, 0]}>
        <torusGeometry args={[2.8, 0.018, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// Floating Geometric Crystal Accents
function GeometricAccents() {
  const icoRef = useRef();
  const octRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.6;
      icoRef.current.rotation.y += delta * 0.8;
      icoRef.current.position.y = 1.8 + Math.sin(t * 1.5) * 0.1;
    }
    if (octRef.current) {
      octRef.current.rotation.x -= delta * 0.7;
      octRef.current.rotation.z += delta * 0.5;
      octRef.current.position.y = -1.6 + Math.cos(t * 1.3) * 0.1;
    }
  });

  return (
    <>
      <mesh ref={icoRef} position={[-2.4, 1.8, -1.2]} scale={0.35}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          metalness={0.9}
          roughness={0.15}
          wireframe
        />
      </mesh>
      <mesh ref={octRef} position={[2.5, -1.6, -0.8]} scale={0.32}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#c084fc"
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </>
  );
}

// Floating Particle Dust
function ParticleDust() {
  const count = 250;
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#3b82f6'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#38bdf8'),
    ];

    // Deterministic pseudo-random generation to satisfy React compiler purity
    for (let i = 0; i < count; i++) {
      const seed1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const seed2 = Math.cos(i * 4.898 + 34.123) * 23421.631;
      const seed3 = Math.sin(i * 9.231 + 19.876) * 31245.987;
      const rand1 = seed1 - Math.floor(seed1);
      const rand2 = seed2 - Math.floor(seed2);
      const rand3 = seed3 - Math.floor(seed3);

      pos[i * 3] = (rand1 - 0.5) * 12;
      pos[i * 3 + 1] = (rand2 - 0.5) * 10;
      pos[i * 3 + 2] = (rand3 - 0.5) * 8 - 1;

      const chosenColor = palette[Math.floor(rand1 * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Elegant CSS Fallback if WebGL isn't supported
export function LaptopFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center p-6">
      <div className="relative w-full max-w-lg aspect-[16/10] bg-[#070b19] rounded-2xl border border-blue-500/30 p-4 shadow-glow-md flex flex-col justify-between overflow-hidden">
        {/* Neon Glow backdrop */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header dots */}
        <div className="flex items-center gap-2 pb-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-slate-400 ml-2">DarshanJoshi.js — MERN Architecture</span>
        </div>

        {/* Code display */}
        <div className="py-4 font-mono text-xs text-slate-300 space-y-1.5 overflow-hidden">
          <p><span className="text-violet-400">const</span> developer = &#123;</p>
          <p className="pl-4">name: <span className="text-cyan-300">'Darshan Joshi'</span>,</p>
          <p className="pl-4">role: <span className="text-cyan-300">'MERN Stack Developer'</span>,</p>
          <p className="pl-4">location: <span className="text-cyan-300">'Kalol, Gujarat, India'</span>,</p>
          <p className="pl-4">stack: [<span className="text-emerald-400">'MongoDB'</span>, <span className="text-slate-400">'Express'</span>, <span className="text-cyan-400">'React'</span>, <span className="text-green-400">'Node'</span>]</p>
          <p>&#125;;</p>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Vite Dev Server Active
          </span>
          <span className="text-slate-400 font-mono">localhost:5173</span>
        </div>
      </div>
    </div>
  );
}

// Error Boundary for WebGL safety
class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("WebGL Canvas failed gracefully:", error);
  }
  render() {
    if (this.state.hasError) {
      return <LaptopFallback />;
    }
    return this.props.children;
  }
}

// Main 3D Laptop Canvas Experience
export default function LaptopScene() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [webglSupported] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse between -1 and 1
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!webglSupported) {
    return <LaptopFallback />;
  }

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[600px] flex items-center justify-center select-none">
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0.4, 4.8], fov: 46 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 1.8]}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 6, 4]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-5, -2, -2]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[0, 3, 2]} intensity={1.8} color="#38bdf8" distance={8} />
          <pointLight position={[-3, -1, 2]} intensity={1.2} color="#10b981" distance={6} />

          {/* 3D Scene Objects */}
          <Suspense fallback={null}>
            <Laptop mousePos={mousePos} />
            <ReactAtom position={[2.1, 1.1, -0.1]} />
            <NodeHexagon position={[-2.2, 0.9, 0.3]} />
            <MongoEmblem position={[-1.8, -1.0, 0.5]} />
            <ExpressEmblem position={[2.0, -0.9, 0.4]} />
            <OrbitalRings />
            <GeometricAccents />
            <ParticleDust />
          </Suspense>

          {/* Controlled Interactive Orbit for touch and drag */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.25}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            rotateSpeed={0.6}
            dampingFactor={0.08}
          />
        </Canvas>
      </WebGLErrorBoundary>

      {/* Subtle bottom badge explaining interactivity */}
      <div className="absolute bottom-2 right-4 pointer-events-none hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-white/10 text-[11px] font-mono text-cyan-400 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D • Drag to rotate
      </div>
    </div>
  );
}
