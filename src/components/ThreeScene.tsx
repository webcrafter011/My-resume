import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Chemical Elements representing MERN Stack
const ChemicalElements: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* MongoDB - Molecular Structure */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[-2, 0, 0]}>
          <Sphere args={[0.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#00FF41" emissive="#00AA2B" emissiveIntensity={0.3} />
          </Sphere>
          <Sphere args={[0.15]} position={[0.6, 0.3, 0]}>
            <meshStandardMaterial color="#00FF41" emissive="#00AA2B" emissiveIntensity={0.2} />
          </Sphere>
          <Sphere args={[0.15]} position={[-0.6, -0.3, 0]}>
            <meshStandardMaterial color="#00FF41" emissive="#00AA2B" emissiveIntensity={0.2} />
          </Sphere>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.12}
            color="#00FF41"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono-bold.woff"
          >
            Mo - MongoDB
          </Text>
        </group>
      </Float>

      {/* Express.js - Chemical Flask */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <group position={[-0.7, 0, 0]}>
          <Cylinder args={[0.3, 0.4, 0.8, 8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#FFFF00" emissive="#CCCC00" emissiveIntensity={0.2} transparent opacity={0.8} />
          </Cylinder>
          <Cylinder args={[0.15, 0.15, 0.3, 8]} position={[0, 0.55, 0]}>
            <meshStandardMaterial color="#FFFF00" emissive="#CCCC00" emissiveIntensity={0.2} transparent opacity={0.8} />
          </Cylinder>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.12}
            color="#FFFF00"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono-bold.woff"
          >
            Ex - Express
          </Text>
        </group>
      </Float>

      {/* React - Atomic Structure */}
      <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.7}>
        <group position={[0.7, 0, 0]}>
          <Sphere args={[0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#FF8C00" emissive="#CC6600" emissiveIntensity={0.4} />
          </Sphere>
          <Torus args={[0.5, 0.05, 8, 16]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#FF8C00" emissive="#CC6600" emissiveIntensity={0.3} />
          </Torus>
          <Torus args={[0.5, 0.05, 8, 16]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial color="#FF8C00" emissive="#CC6600" emissiveIntensity={0.3} />
          </Torus>
          <Torus args={[0.5, 0.05, 8, 16]} position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]}>
            <meshStandardMaterial color="#FF8C00" emissive="#CC6600" emissiveIntensity={0.3} />
          </Torus>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.12}
            color="#FF8C00"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono-bold.woff"
          >
            Re - React
          </Text>
        </group>
      </Float>

      {/* Node.js - Crystal Structure */}
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.5}>
        <group position={[2, 0, 0]}>
          <Box args={[0.5, 0.7, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#00FF41" emissive="#00AA2B" emissiveIntensity={0.2} />
          </Box>
          <Box args={[0.3, 0.3, 0.3]} position={[0, 0.5, 0]} rotation={[Math.PI/4, Math.PI/4, 0]}>
            <meshStandardMaterial color="#00FF41" emissive="#00AA2B" emissiveIntensity={0.3} />
          </Box>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.12}
            color="#00FF41"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono-bold.woff"
          >
            No - Node.js
          </Text>
        </group>
      </Float>
    </group>
  );
};

// Floating Chemical Particles
const ChemicalParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    const colors = new Float32Array(150 * 3);
    
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      // Random colors between green, yellow, and orange
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.25; // Green
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0; // Yellow
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.55; colors[i * 3 + 2] = 0; // Orange
      }
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={150}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.8} />
    </points>
  );
};

// Chemical Formula Symbols
const ChemicalFormulas: React.FC = () => {
  const formulasRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (formulasRef.current) {
      formulasRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  const formulas = ['C₈H₁₀N₄O₂', 'CH₃CH₂OH', 'H₂SO₄', 'NaCl', 'C₆H₁₂O₆', 'NH₃', 'CO₂', 'H₂O'];
  
  return (
    <group ref={formulasRef}>
      {formulas.map((formula, index) => {
        const angle = (index / formulas.length) * Math.PI * 2;
        const radius = 5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <Text
            key={index}
            position={[x, y, -3]}
            fontSize={0.25}
            color="#00FF41"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono-bold.woff"
          >
            {formula}
          </Text>
        );
      })}
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FF41" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FFFF00" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#FF8C00" />
        
        <ChemicalParticles />
        <ChemicalFormulas />
        <ChemicalElements position={[0, 0, 0]} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;