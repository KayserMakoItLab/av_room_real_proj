import { useDynamicElement } from "@/context";
import { dynamicAssets } from "@/data/assets";
import { Button, Stack, Text } from "@chakra-ui/react";

const ApplianceSelectOptions = ({ selectedElement }) => {
  const [elementDetails, setElemenetDetails] = useDynamicElement();

  const handleElementSelect = (element) => {
    if (elementDetails.elements.includes(element.type)) {
      const indexValue = elementDetails.elements.indexOf(element.type);
      elementDetails.elements.splice(indexValue, 1, element.type);
      elementDetails.types.splice(indexValue, 1, element.id);
      elementDetails.paths.splice(indexValue, 1, element.path);
      setElemenetDetails({
        elements: elementDetails.elements,
        types: elementDetails.types,
        paths: elementDetails.paths,
      });
    } else {
      setElemenetDetails({
        elements: [...elementDetails.elements, element.type],
        types: [...elementDetails.types, element.id],
        paths: [...elementDetails.paths, element.path],
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
