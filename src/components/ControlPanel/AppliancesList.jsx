import { dynamicAssets } from "@/data/assets";
import { Box, Button, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

const AppliancesList = ({ show }) => {
  const existElement = [];
  return (
    <Stack>
      <Text fontSize={12} opacity={0.6} alignSelf={"center"}>
        Appliances
      </Text>
      <Box display={"flex"} flexWrap={"wrap"} gap={5} justifyContent={"center"}>
        {dynamicAssets.map(({ id, type, icon }) => {
          if (existElement.includes(type)) {
            return null;
          } else {
            existElement.push(type);
            return (
              <Button
                key={id}
                onClick={() => show({ status: true, element: type })}
                colorScheme="gray"
                variant="outline"
              >
                {icon}
              </Button>
            );
          }
        })}
      </Box>
    </Stack>
  );
};

export default AppliancesList;
