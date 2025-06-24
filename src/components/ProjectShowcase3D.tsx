import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Plane, OrbitControls, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface LabEquipment3DProps {
  position: [number, number, number];
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const LabEquipment3D: React.FC<LabEquipment3DProps> = ({ position, title, isActive, onClick }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isActive ? 1.3 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      if (isActive) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Lab Equipment Base */}
      <Box args={[1.5, 0.2, 1]} position={[0, -0.6, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#00FF41" : "#2A2A2A"} 
          emissive={isActive ? "#00AA2B" : "#111111"}
          emissiveIntensity={0.3}
        />
      </Box>
      
      {/* Beaker/Flask */}
      <Cylinder args={[0.3, 0.4, 0.8, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#FFFF00" : "#444444"} 
          emissive={isActive ? "#CCCC00" : "#222222"}
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Cylinder>
      
      {/* Liquid inside */}
      <Cylinder args={[0.25, 0.35, 0.6, 8]} position={[0, -0.1, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#FF8C00" : "#333333"} 
          emissive={isActive ? "#CC6600" : "#111111"}
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
        />
      </Cylinder>
      
      {/* Steam/Smoke effect */}
      {isActive && (
        <Cylinder args={[0.1, 0.05, 0.5, 8]} position={[0, 0.8, 0]}>
          <meshStandardMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={0.3}
          />
        </Cylinder>
      )}
      
      {/* Project Title */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.12}
        color={isActive ? "#00FF41" : "#FFFFFF"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/roboto-mono-bold.woff"
      >
        {title}
      </Text>
      
      {/* Glow effect when active */}
      {isActive && (
        <Plane args={[2.5, 2]} position={[0, 0, -0.1]}>
          <meshStandardMaterial 
            color="#00FF41" 
            transparent 
            opacity={0.1}
            emissive="#00FF41"
            emissiveIntensity={0.2}
          />
        </Plane>
      )}
    </group>
  );
};

const ProjectShowcase3D: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    { title: 'Meth Lab Dashboard', description: 'Production Analytics' },
    { title: 'Los Pollos System', description: 'Distribution Network' },
    { title: 'Saul\'s Client Portal', description: 'Legal Management' },
    { title: 'Car Wash Manager', description: 'Money Laundering' },
  ];

  return (
    <div className="h-96 w-full bg-gradient-to-b from-bb-dark to-bb-gray rounded-xl border border-bb-yellow/30">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FF41" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFFF00" />
        <pointLight position={[0, 10, -10]} intensity={0.8} color="#FF8C00" />
        
        {projects.map((project, index) => {
          const angle = (index / projects.length) * Math.PI * 2;
          const radius = 4;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <LabEquipment3D
              key={index}
              position={[x, 0, z]}
              title={project.title}
              isActive={activeProject === index}
              onClick={() => setActiveProject(index)}
            />
          );
        })}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default ProjectShowcase3D;