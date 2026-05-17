"use client"; // <--- OBLIGATOIRE

import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Center, Stage } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Suspense } from 'react';

function Model() {
  // 1. Charge l'objet et la texture
  const obj = useLoader(OBJLoader, '/models/logo.obj');
  const texture = useTexture('/models/texture.png');

  // 2. On remplace le matériau par un effet de verre
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshPhysicalMaterial({
  map: texture,
  transmission: 0,         // Transparence physique
  roughness: 0.05,         // Très faible pour garder de la clarté
  ior: 1.45,               // Indice de réfraction du plastique/acrylique
  thickness: 2,            // IMPORTANT : donne de la profondeur au verre
  specularIntensity: 1,    // Intensité des reflets spéculaires
  // clearcoat: 1,            // Couche de vernis brillant
  clearcoatRoughness: 0.1, 
  // attenuationColor: new THREE.Color('#ffffff'), // Couleur interne
  attenuationDistance: 0.5,
  transparent: true,
});
    }
  });

  return <primitive object={obj} />;
}

// L'export doit être DEFAULT
export default function Logo3D() {
  return (
    <div className="h-[800px] w-full">
      <Canvas shadows camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stage environment="night" intensity={0.2}>
            <Center>
              <Model />
            </Center>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}