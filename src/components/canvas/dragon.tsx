import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";

import CanvasLoader from "../loader";

type DragonProps = {
  isMobile: boolean;
};

// Dragon
const Dragon = ({ isMobile }: DragonProps) => {
  // Import scene with textures
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(
    "./prowler_dragon_variant_rig_gltf/scene.gltf",
    true // Load textures automatically
  );
  const { actions } = useAnimations(animations, group);

  // Setup materials and textures
  useEffect(() => {
    if (scene) {
      // Make sure materials and textures are properly applied
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            if ('color' in child.material && child.material.color) {
              child.material.needsUpdate = true;
            }
          }
        }
      });
    }
  }, [scene]);

  // Play the first animation if available when component mounts
  useEffect(() => {
    if (animations && animations.length > 0) {
      // Get the first animation action
      const firstAction = Object.values(actions)[0];
      if (firstAction) {
        // Play the animation in loop
        firstAction.reset().play();
      }
    }
  }, [actions, animations]);

  return (
    // Mesh
    <mesh>
      {/* Light - balanced for visibility without being too bright */}
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.25} groundColor="#1c1c1c" />
      <pointLight intensity={1.2} position={[0, 5, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={group}
        object={scene}
        scale={isMobile ? 0.15 : 0.2}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Dragon Canvas
const DragonCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true, 
        alpha: true,
        antialias: true
      }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Dragon isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default DragonCanvas; 