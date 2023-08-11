import { dynamicAssets } from "@/data/assets";
import { Button, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

const AppliancesList = ({ show }) => {
  const existElement = [];
  return (
    <Stack>
      <Text fontSize={12} opacity={0.6} alignSelf={"center"}>
        Appliances
      </Text>
      <Wrap spacing={5} alignSelf={"center"}>
        {dynamicAssets.map(({ id, type, icon, name, path }) => {
          if (existElement.includes(type)) {
            return null;
          } else {
            existElement.push(type);
            return (
              <WrapItem key={id}>
                <Button
                  onClick={() => show({ status: true, element: type })}
                  colorScheme="gray"
                  variant="outline"
                >
                  {icon}
                </Button>
              </WrapItem>
            );
          }
        })}
      </Wrap>
    </Stack>
  );
};

export default AppliancesList;
