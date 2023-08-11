"use client";
import { useControlOrbit, useDynamicElement } from "@/context";
import {
  Center,
  Environment,
  Gltf,
  Loader,
  OrbitControls,
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
          <Center>
            <Gltf src="/assets/shells/Shell.gltf" />
          </Center>
          <OrbitControls enabled={view} />
          <Environment files={"/assets/room/yoga_room_4k.hdr"} background />
          {elementDetails?.paths?.map(
            (elementPath, index) =>
              elementPath && (
                <DynamicElement key={index} path={elementPath} model="app" />
              )
          )}
        </Canvas>
      </Suspense>
    </>
  );
};

export default Room;
