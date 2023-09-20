import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import{pointsHandsInfinity} from"./utils";


const ThreadsLanding = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        className="bg-[#101010]" style={{ height: "100vh", width:2000 }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointHandsInfinity /> 
      </Canvas>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-neutral-200 font-medium text-5xl pointer-events-none">
        Sarthi
      </h1>
    </div>
  );
};

const PointHandsInfinity = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.03;
  });
  return (
    <group ref={ref}>
      {pointsHandsInfinity.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ThreadsLanding;
