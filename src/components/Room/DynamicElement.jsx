import { useControlOrbit } from "@/context";
import { Gltf, PivotControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const DynamicElement = ({ path, model }) => {
  const objectRef = useRef();
  const [showControls, setShowControls] = useState(true);
  const [view, setView] = useControlOrbit();
  useEffect(() => {
    if (objectRef.current) {
      objectRef.current.castShadow = true;
      objectRef.current.receiveShadow = true;
      objectRef.current?.children.map((node) => {
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
  }, [objectRef.current]);

  return model !== "app" ? (
    <Gltf ref={objectRef} src={path} receiveShadow={true} castShadow={true} />
  ) : (
    <>
      <PivotControls
        activeAxes={[1, 1, 1]}
        anchor={[1, 0, 0]}
        scale={0.7}
        disableAxes={showControls}
        disableRotations={showControls}
        disableSliders={showControls}
      >
        <Gltf
          castShadow
          receiveShadow
          ref={objectRef}
          src={path}
          onClick={() => {
            setView(!view);
            setShowControls(!showControls);
          }}
        />
      </PivotControls>
    </>
  );
};

export default DynamicElement;
