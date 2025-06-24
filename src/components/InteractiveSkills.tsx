import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface ChemicalSkillProps {
  position: [number, number, number];
  skill: string;
  formula: string;
  color: string;
  shape: 'beaker' | 'molecule' | 'crystal';
}

const ChemicalSkill: React.FC<ChemicalSkillProps> = ({ position, skill, formula, color, shape }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + position[1]) * 0.1;
    }
  });

  const renderShape = () => {
    const material = <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} transparent opacity={0.9} />;
    
    switch (shape) {
      case 'beaker':
        return (
          <group>
            <Cylinder args={[0.25, 0.35, 0.7, 8]}>{material}</Cylinder>
            <Cylinder args={[0.15, 0.15, 0.2, 8]} position={[0, 0.45, 0]}>{material}</Cylinder>
          </group>
        );
      case 'molecule':
        return (
          <group>
            <Sphere args={[0.2]} position={[0, 0, 0]}>{material}</Sphere>
            <Sphere args={[0.15]} position={[0.4, 0.2, 0]}>{material}</Sphere>
            <Sphere args={[0.15]} position={[-0.4, -0.2, 0]}>{material}</Sphere>
            <Cylinder args={[0.02, 0.02, 0.5, 8]} position={[0.2, 0.1, 0]} rotation={[0, 0, Math.PI/4]}>{material}</Cylinder>
            <Cylinder args={[0.02, 0.02, 0.5, 8]} position={[-0.2, -0.1, 0]} rotation={[0, 0, -Math.PI/4]}>{material}</Cylinder>
          </group>
        );
      case 'crystal':
        return (
          <group>
            <Box args={[0.4, 0.6, 0.4]} rotation={[Math.PI/6, Math.PI/4, 0]}>{material}</Box>
            <Box args={[0.2, 0.3, 0.2]} position={[0, 0.4, 0]} rotation={[Math.PI/4, Math.PI/6, 0]}>{material}</Box>
          </group>
        );
      default:
        return <Sphere args={[0.3]}>{material}</Sphere>;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {renderShape()}
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.1}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/roboto-mono-bold.woff"
        >
          {skill}
        </Text>
        <Text
          position={[0, -1, 0]}
          fontSize={0.08}
          color="#888888"
          anchorX="center"
          anchorY="middle"
          font="/fonts/roboto-mono-bold.woff"
        >
          {formula}
        </Text>
      </group>
    </Float>
  );
};

const InteractiveSkills: React.FC = () => {
  const skills = [
    { skill: 'JavaScript', formula: 'Js₁₉₉₅', color: '#FFFF00', shape: 'beaker' as const, position: [-2.5, 1, 0] as [number, number, number] },
    { skill: 'TypeScript', formula: 'Ts₂₀₁₂', color: '#00FF41', shape: 'crystal' as const, position: [0, 1.5, 0] as [number, number, number] },
    { skill: 'React', formula: 'Re₂₀₁₃', color: '#FF8C00', shape: 'molecule' as const, position: [2.5, 1, 0] as [number, number, number] },
    { skill: 'Node.js', formula: 'No₂₀₀₉', color: '#00FF41', shape: 'beaker' as const, position: [-2, -0.5, 0] as [number, number, number] },
    { skill: 'MongoDB', formula: 'Mo₂₀₀₉', color: '#00FF41', shape: 'molecule' as const, position: [0, -0.5, 0] as [number, number, number] },
    { skill: 'Express', formula: 'Ex₂₀₁₀', color: '#FFFF00', shape: 'crystal' as const, position: [2, -0.5, 0] as [number, number, number] },
  ];

  return (
    <div className="h-96 w-full bg-gradient-to-b from-bb-dark to-bb-gray rounded-xl border border-bb-green/30">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00FF41" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#FFFF00" />
        <pointLight position={[0, 5, -5]} intensity={0.6} color="#FF8C00" />
        
        {skills.map((skillData, index) => (
          <ChemicalSkill
            key={index}
            position={skillData.position}
            skill={skillData.skill}
            formula={skillData.formula}
            color={skillData.color}
            shape={skillData.shape}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default InteractiveSkills;