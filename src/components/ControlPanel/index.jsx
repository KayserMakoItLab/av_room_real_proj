"use client";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import PanelView from "./PanelView";

const ControlPanelView = () => {
  //   const router = useRouter();
  const [showControlPanel, setShowControlPanel] = useState(false);
  return (
    <>
      {showControlPanel ? (
        <PanelView showPanel={setShowControlPanel} />
      ) : (
        <>
          <Button
            position={"absolute"}
            zIndex={1}
            top={4}
            right={4}
            variant={"outline"}
            colorScheme="gray"
            color={"#fff"}
            fontSize={14}
            _hover={{ color: "#000", bgColor: "#fff" }}
            onClick={() => setShowControlPanel(true)}
          >
            Control Panel
          </Button>
          {/* <Button
            position={"absolute"}
            zIndex={1}
            bottom={4}
            right={4}
            variant={"outline"}
            colorScheme="gray"
            color={"#fff"}
            fontSize={14}
            _hover={{ color: "#000", bgColor: "#fff" }}
            onClick={() => {
              router.push("/create");
            }}
          >
            Create Room
          </Button> */}
        </>
      )}
    </>
  );
};

export default ControlPanelView;
