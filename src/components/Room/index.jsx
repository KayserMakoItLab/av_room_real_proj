"use client";
import { useControlOrbit, useDynamicElement } from "@/context";
import {
  Center,
  Environment,
  Gltf,
  Loader,
  OrbitControls,
  Torus,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DynamicElement from "./DynamicElement";

const Room = () => {
  const [elementDetails] = useDynamicElement();
  const [view] = useControlOrbit();
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas>
          <ambientLight intensity={1} />
          <Center rotation={[0, -Math.PI / 2, 0]}>
            <Gltf src="/assets/shells/Shell.gltf" position={[0, -0.8, 0]} />
            {elementDetails?.paths?.map(
              (elementPath, index) =>
                elementPath && (
                  <DynamicElement key={index} path={elementPath} model="app" />
                )
            )}
          </Center>
          <OrbitControls enabled={view} />
          <Environment files={"/assets/room/yoga_room_4k.hdr"} background />
        </Canvas>
      </Suspense>
    </>
  );
};

export default Room;
