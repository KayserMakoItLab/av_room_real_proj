import { useRoomData } from "@/context";
import { sendNotification } from "@/utils/notification";
import {
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Button,
  Divider,
  Checkbox,
  SlideFade,
} from "@chakra-ui/react";
import { ColorPicker } from "chakra-color-picker";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";

const TableDetails = ({ setPage }) => {
  const router = useRouter();
  const [tableColor, setTableColor] = useState("Brown");
  const [chairColor, setChairColor] = useState("Blue");
  const [tableTypeCheckBox, setTableTypeCheckBox] = useState(0);
  const [chairTypeCheckBox, setChairTypeCheckBox] = useState(0);
  const [data, setData] = useRoomData();

  const handleFinalSubmit = () => {
    router.push("room");
  };

  return (
    <HStack height={"100%"} width={"100%"}>
      <VStack
        bgColor={"#fff"}
        height={"100vh"}
        zIndex={1}
        width={"50%"}
        alignItems={"flex-start"}
        padding={"64px"}
        spacing={8}
      >
        <Image src="/logo.png" />
        <Box>
          <Text
            fontSize={"28px"}
            fontWeight={600}
            color={"Black/5"}
            marginTop={-2}
          >
            Create Furniture Design
          </Text>
        </Box>
        <Box width={"100%"}>
          <HStack width={"100%"}>
            <Text fontSize={"18px"} fontWeight={600}>
              Table
            </Text>
            <Divider />
          </HStack>
        </Box>
        <Box width={"100%"}>
          <Text
            marginTop={-4}
            fontSize={"16px"}
            fontWeight={400}
            paddingBottom={3}
          >
            Type of Table you prefer?
          </Text>
          <HStack alignItems={"flex-start"} spacing={5}>
            <Checkbox
              colorScheme="green"
              isChecked={tableTypeCheckBox === 1}
              onChange={() => {
                setTableTypeCheckBox(1);
                setData({
                  ...data,
                  tableType: "wood",
                });
              }}
            >
              Wooden Table
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={tableTypeCheckBox === 2}
              onChange={() => {
                setTableTypeCheckBox(2);
                setData({
                  ...data,
                  tableType: "glass",
                });
              }}
            >
              Glass Table
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={tableTypeCheckBox === 3}
              onChange={() => {
                setTableTypeCheckBox(3);
                setData({
                  ...data,
                  tableType: "others",
                });
              }}
            >
              Others
            </Checkbox>
          </HStack>
        </Box>
        <HStack width={"100%"}>
          <VStack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} alignSelf={"flex-start"}>
              Color
            </Text>
            <Box
              as={HStack}
              bgColor={"#F6F7FB"}
              width={"100%"}
              height={"50px"}
              borderRadius={4}
              justifyContent={"space-between"}
            >
              <Box as={HStack} padding={2} className="table-color-container">
                <ColorPicker
                  colors={["Brown", "Black", "White", "Gray", "Blue"]}
                  onChange={(value) => {
                    setTableColor(value),
                      setData({ ...data, tableColor: value });
                  }}
                />
                <Text>{tableColor}</Text>
              </Box>
              <Box
                height={"100%"}
                width={"15%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={0}
                bgColor={"#E5E9F1"}
                borderRadius={4}
              >
                <FaMagic />
              </Box>
            </Box>
          </VStack>
          <VStack width={"100%"}>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              alignSelf={"flex-start"}
              marginLeft={5}
            >
              Model
            </Text>
            <HStack>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  borderRadius={10}
                  src="/create-room-assets/Table1.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Table2.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Table3.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Table4.png"
                />
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <Box width={"100%"}>
          <HStack width={"100%"}>
            <Text fontSize={"18px"} fontWeight={600}>
              Chair
            </Text>
            <Divider />
          </HStack>
        </Box>
        <Box width={"100%"}>
          <HStack alignItems={"flex-start"} spacing={5}>
            <Checkbox
              colorScheme="green"
              isChecked={chairTypeCheckBox === 1}
              onChange={() => {
                setChairTypeCheckBox(1);
                setData({
                  ...data,
                  chairType: "wood",
                });
              }}
            >
              Wooden Chair
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={chairTypeCheckBox === 2}
              onChange={() => {
                setChairTypeCheckBox(2);
                setData({
                  ...data,
                  chairType: "steel",
                });
              }}
            >
              Steel Chair
            </Checkbox>
          </HStack>
        </Box>

        <HStack width={"100%"}>
          <VStack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} alignSelf={"flex-start"}>
              Color
            </Text>
            <Box
              as={HStack}
              bgColor={"#F6F7FB"}
              width={"100%"}
              height={"50px"}
              borderRadius={4}
              justifyContent={"space-between"}
            >
              <Box as={HStack} padding={2}>
                <ColorPicker
                  colors={["Blue", "Black", "White", "Gray", "Brown"]}
                  onChange={(value) => {
                    setChairColor(value);
                    setData({ ...data, chairColor: value });
                  }}
                />
                <Text>{chairColor}</Text>
              </Box>
              <Box
                height={"100%"}
                width={"15%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={0}
                bgColor={"#E5E9F1"}
                borderRadius={4}
              >
                <FaMagic />
              </Box>
            </Box>
          </VStack>
          <VStack width={"100%"}>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              alignSelf={"flex-start"}
              marginLeft={5}
            >
              Model
            </Text>
            <HStack>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  borderRadius={10}
                  src="/create-room-assets/Chair1.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Chair2.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Chair3.png"
                />
              </Box>
              <Box>
                <Image
                  _hover={{ opacity: 0.8 }}
                  src="/create-room-assets/Chair4.png"
                />
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <HStack width={"100%"} justifyContent={"flex-end"} marginTop={2}>
          <Button
            bgColor={"#E5E9F1"}
            color={"#616161"}
            fontSize={"14px"}
            width={"150px"}
            _hover={{ bgColor: "none", opacity: 0.9 }}
            onClick={() => setPage(2)}
          >
            Back
          </Button>
          <Button
            bgColor={"#32936F"}
            color={"#fff"}
            fontSize={"14px"}
            width={"150px"}
            _hover={{ bgColor: "none", opacity: 0.9 }}
            onClick={handleFinalSubmit}
          >
            Finish
          </Button>
        </HStack>
      </VStack>
      <VStack>
        {/* <Image
            position={"fixed"}
            top={0}
            right={0}
            height="100vh"
            src="/create-room-assets/room3.png"
          /> */}
      </VStack>
    </HStack>
  );
};

export default TableDetails;
