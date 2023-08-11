import { Button, Divider, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ApplianceSelectOptions from "./ApplianceSelectOptions";
import AppliancesList from "./AppliancesList";

const PanelView = ({ showPanel }) => {
  const [showOptions, setShowOptions] = useState({
    status: false,
    element: "",
  });
  return (
    <Stack
      zIndex={1}
      bgColor={"rgb(255,255,255, 0.5)"}
      position={"absolute"}
      top={0}
      height={"100vh"}
      width={60}
      right={0}
      alignItems={"center"}
      padding={2}
      spacing={5}
    >
      <Text mt={3}>Control Panel</Text>
      <Divider />
      <AppliancesList show={setShowOptions} />
      {showOptions.status && (
        <>
          <Divider />
          <ApplianceSelectOptions selectedElement={showOptions?.element} />
        </>
      )}
      <Button
        paddingX={12}
        fontSize={14}
        position={"absolute"}
        bottom={5}
        color={"gray"}
        variant={"outline"}
        onClick={() => showPanel(false)}
      >
        Exit
      </Button>
    </Stack>
  );
};

export default PanelView;
