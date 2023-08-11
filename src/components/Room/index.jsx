"use client";
import { useControlOrbit, useDynamicElement } from "@/context";
import {
  Center,
  Environment,
  Gltf,
  Loader,
  OrbitControls,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import DynamicElement from "./DynamicElement";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

const Room = () => {
  const [elementDetails] = useDynamicElement();
  const [view] = useControlOrbit();
  const roomRef = useRef();

  useEffect(() => {
    if (roomRef.current) {
      roomRef.current.castShadow = true;
      roomRef.current.receiveShadow = true;
      roomRef.current?.children.map((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        } else {
          node?.children.map((node) => {
            if (node?.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            } else {
              node?.children.map((node) => {
                if (node?.isMesh) {
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });
            }
          });
        }
      });
    }
  }, [roomRef.current]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas shadows>
          <EffectComposer>
            <N8AO aoRadius={20} intensity={3} screenSpaceRadius />
          </EffectComposer>
          <ambientLight intensity={1} />
          <directionalLight
            intensity={5}
            castShadow={true}
            position={[10, 6, -2]}
          />
          <Center rotation={[0, -Math.PI / 2, 0]}>
            <Gltf
              ref={roomRef}
              castShadow
              receiveShadow
              src="/assets/shells/Shell.gltf"
              position={[0, -0.8, 0]}
            />
            {elementDetails?.paths?.map(
              (elementPath, index) =>
                elementPath && (
                  <DynamicElement key={index} path={elementPath} model="app" />
                )
            )}
          </Center>
          <OrbitControls enabled={view} />
          <Environment files={"/assets/room/yoga_room_4k.hdr"} background />
          <SoftShadows samples={10} focus={0} size={20} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default Room;
