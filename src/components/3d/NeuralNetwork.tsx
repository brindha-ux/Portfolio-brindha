import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const nodePositions = [];
    const layers = [5, 8, 6, 4];
    let yOffset = 0;
    
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        nodePositions.push([
          (layerIndex - 1.5) * 6,
          (i - nodeCount / 2) * 2 + yOffset,
          0
        ]);
      }
      yOffset = 0;
    });
    
    return nodePositions;
  }, []);
  
  const connections = useMemo(() => {
    const lines = [];
    const layers = [5, 8, 6, 4];
    let nodeIndex = 0;
    
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerNodes = layers[layer];
      const nextLayerNodes = layers[layer + 1];
      
      for (let i = 0; i < currentLayerNodes; i++) {
        for (let j = 0; j < nextLayerNodes; j++) {
          const startIndex = nodeIndex + i;
          const endIndex = nodeIndex + currentLayerNodes + j;
          
          if (nodes[startIndex] && nodes[endIndex]) {
            lines.push([nodes[startIndex], nodes[endIndex]]);
          }
        }
      }
      nodeIndex += currentLayerNodes;
    }
    
    return lines;
  }, [nodes]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Neural Network Connections */}
      {connections.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#9333ea"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
      
      {/* Neural Network Nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshBasicMaterial color="#00bfff" />
        </mesh>
      ))}
    </group>
  );
};

export default NeuralNetwork;