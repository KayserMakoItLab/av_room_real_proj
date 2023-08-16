import { useDynamicElement } from "@/context";
import { dynamicAssets } from "@/data/assets";
import { Button, Stack, Text } from "@chakra-ui/react";

const ApplianceSelectOptions = ({ selectedElement }) => {
  const [elementDetails, setElemenetDetails] = useDynamicElement();

  const handleElementSelect = (element) => {
    let position = [];
    let rotation = [];
    if (element.type === "tv") {
      position = [2, 0, 1.7];
      rotation = [0, Math.PI / 2, 0];
    } else if (element.type === "camera") {
      position = [2, 0, 1.88];
      rotation = [0, Math.PI / 2, 0];
    } else if (element.type === "table") {
      position = [1.5, 0, 0];
      rotation = [0, 0, 0];
    } else if (element.type === "speaker") {
      position = [0.8, 0.4, 1.7];
      rotation = [0, Math.PI / 2, 0];
    } else if (element.type === "chair") {
      position = [0, -0.2, 1];
      rotation = [0, -Math.PI / 2, 0];
    }

    console.log("elementDetails", elementDetails);
    if (elementDetails.elements.includes(element.type)) {
      console.log("elementDetails11", elementDetails);
      const indexValue = elementDetails.elements.indexOf(element.type);
      elementDetails.elements.splice(indexValue, 1, element.type);
      elementDetails.types.splice(indexValue, 1, element.id);
      elementDetails.paths.splice(indexValue, 1, {
        path: element.path,
        coordinates: { position: position, rotation: rotation },
      });
      console.log("elementDetails1111", elementDetails);

      setElemenetDetails({
        elements: elementDetails.elements,
        types: elementDetails.types,
        paths: elementDetails.paths,
      });
    } else {
      position &&
        rotation &&
        setElemenetDetails({
          elements: [...elementDetails.elements, element.type],
          types: [...elementDetails.types, element.id],
          paths: [
            ...elementDetails.paths,
            {
              path: element.path,
              coordinates: { position: position, rotation: rotation },
            },
          ],
        });
    }
  };

  return (
    <Stack alignItems={"center"} spacing={5}>
      <Text fontSize={12} opacity={0.6}>
        {selectedElement.toUpperCase()} Types
      </Text>
      {dynamicAssets.map((element, index) => {
        if (selectedElement === element.type) {
          return (
            <Button
              key={index}
              w={"100%"}
              variant={"outline"}
              fontSize={14}
              fontWeight={400}
              onClick={() => handleElementSelect(element)}
            >
              {element?.name ? element?.name : "None"}
            </Button>
          );
        }
      })}
    </Stack>
  );
};

export default ApplianceSelectOptions;
