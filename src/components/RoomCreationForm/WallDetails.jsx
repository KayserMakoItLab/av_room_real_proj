import { useRoomData } from "@/context";
import { sendNotification } from "@/utils/notification";
import {
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Box,
  Button,
  Divider,
  Checkbox,
  SlideFade,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const WallDetails = ({ setPage }) => {
  const [data, setData] = useRoomData();
  const [doorSideCheckBox, setDoorSideCheckBox] = useState(0);
  const [doorThicknessCheckBox, setDoorThicknessCheckBox] = useState(0);

  const handleNextPageClick = () => {
    // if (
    //   data.frontWallType &&
    //   data.backWallType &&
    //   data.leftWallType &&
    //   data.rightWallType
    // ) {
    setPage(3);
    // } else {
    //   sendNotification("error", "FIll all Details!");
    // }
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
        spacing={4}
      >
        <Image src="/logo.png" />
        <Box>
          <Text fontSize={"24px"} fontWeight={600} color={"Black/5"}>
            Choose Wall & Door Spec
          </Text>
        </Box>
        <Box width={"100%"}>
          <HStack width={"100%"}>
            <Text fontSize={"18px"} fontWeight={600}>
              Front&nbsp;&&nbsp;Back
            </Text>
            <Divider />
          </HStack>
        </Box>
        <HStack width={"100%"} spacing={4}>
          <Stack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} color={"#7C7C7C"}>
              Front face wall Type
            </Text>
            <Select
              placeholder="Select"
              fontSize={"14px"}
              fontWeight={500}
              padding={0}
              variant={"filled"}
              _hover={{ opacity: "80%" }}
              paddingRight={0}
              icon={
                <Stack
                  bgColor={"#E5E9F1"}
                  height={20}
                  width={20}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"0px 4px 4px 0px"}
                >
                  <FiChevronDown />
                </Stack>
              }
              onChange={(e) => {
                setData({
                  ...data,
                  frontWallType: e.target.value,
                });
              }}
            >
              <option value="Concrete 30mm">Concrete 30mm</option>
            </Select>
          </Stack>
          <Stack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} color={"#7C7C7C"}>
              Back face wall Type
            </Text>
            <Select
              placeholder="Select"
              fontSize={"14px"}
              fontWeight={500}
              padding={0}
              variant={"filled"}
              _hover={{ opacity: "80%" }}
              paddingRight={0}
              icon={
                <Stack
                  bgColor={"#E5E9F1"}
                  height={20}
                  width={20}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"0px 4px 4px 0px"}
                >
                  <FiChevronDown />
                </Stack>
              }
              onChange={(e) => {
                setData({
                  ...data,
                  backWallType: e.target.value,
                });
              }}
            >
              <option value="Glass 10 mm">Glass 10 mm</option>
              <option value="Concrete 30mm">Concrete 30mm</option>
            </Select>
          </Stack>
        </HStack>
        <Box width={"100%"}>
          <HStack width={"100%"}>
            <Text fontSize={"18px"} fontWeight={600}>
              Sides
            </Text>
            <Divider />
          </HStack>
        </Box>
        <HStack width={"100%"} spacing={4}>
          <Stack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} color={"#7C7C7C"}>
              Right wall Type
            </Text>
            <Select
              placeholder="Select"
              fontSize={"14px"}
              fontWeight={500}
              padding={0}
              variant={"filled"}
              _hover={{ opacity: "80%" }}
              paddingRight={0}
              icon={
                <Stack
                  bgColor={"#E5E9F1"}
                  height={20}
                  width={20}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"0px 4px 4px 0px"}
                >
                  <FiChevronDown />
                </Stack>
              }
              onChange={(e) => {
                setData({
                  ...data,
                  rightWallType: e.target.value,
                });
              }}
            >
              <option value="Concrete 30mm">Concrete 30mm</option>
            </Select>
          </Stack>
          <Stack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400} color={"#7C7C7C"}>
              Left wall Type
            </Text>
            <Select
              placeholder="Select"
              fontSize={"14px"}
              fontWeight={500}
              padding={0}
              variant={"filled"}
              _hover={{ opacity: "80%" }}
              paddingRight={0}
              icon={
                <Stack
                  bgColor={"#E5E9F1"}
                  height={20}
                  width={20}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"0px 4px 4px 0px"}
                >
                  <FiChevronDown />
                </Stack>
              }
              onChange={(e) => {
                setData({
                  ...data,
                  leftWallType: e.target.value,
                });
              }}
            >
              <option value="Glass 10 mm">Glass 10 mm</option>
              <option value="Concrete 30mm">Concrete 30mm</option>
            </Select>
          </Stack>
        </HStack>
        <Box width={"100%"}>
          <HStack width={"100%"}>
            <Text fontSize={"18px"} fontWeight={600}>
              Doors
            </Text>
            <Divider />
          </HStack>
        </Box>
        <Box as={Stack} width={"100%"}>
          <Stack width={"100%"}>
            <Text fontSize={"16px"} fontWeight={400}>
              What type of door you prefer?
            </Text>
            <Stack width={"100%"}>
              <Select
                placeholder="Select the door type"
                fontSize={"14px"}
                fontWeight={500}
                padding={0}
                variant={"filled"}
                _hover={{ opacity: "80%" }}
                paddingRight={0}
                icon={
                  <Stack
                    bgColor={"#E5E9F1"}
                    height={20}
                    width={20}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"0px 4px 4px 0px"}
                  >
                    <FiChevronDown />
                  </Stack>
                }
                onChange={(e) => {
                  setData({
                    ...data,
                    doorType: e.target.value,
                  });
                }}
              >
                <option value="wood">Wood</option>
                <option value="glass">glass</option>
              </Select>
            </Stack>
          </Stack>
        </Box>
        <HStack spacing={8}>
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"14px"} fontWeight={400} color={"#ABAFB1"}>
              Choose side of the wall
            </Text>
            <Checkbox
              colorScheme="green"
              isChecked={doorSideCheckBox === 1 ? true : false}
              onChange={() => {
                setDoorSideCheckBox(1);
                setData({
                  ...data,
                  doorSide: "right",
                });
              }}
            >
              Right Side
            </Checkbox>
            <Checkbox
              colorScheme="green"
              disabled
              isChecked={doorSideCheckBox === 2 ? true : false}
              onChange={() => {
                setDoorSideCheckBox(2);
                setData({
                  ...data,
                  doorSide: "left",
                });
              }}
            >
              Left Side
            </Checkbox>
            <Checkbox
              disabled
              colorScheme="green"
              isChecked={doorSideCheckBox === 3 ? true : false}
              onChange={() => {
                setDoorSideCheckBox(3);
                setData({
                  ...data,
                  doorSide: "back",
                });
              }}
            >
              Back Side
            </Checkbox>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"14px"} fontWeight={400} color={"#ABAFB1"}>
              Thickness of the door
            </Text>
            <Checkbox
              colorScheme="green"
              isChecked={doorThicknessCheckBox === 1}
              onChange={() => {
                setDoorThicknessCheckBox(1);
                setData({
                  ...data,
                  doorThickness: "10",
                });
              }}
            >
              10 mm
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={doorThicknessCheckBox === 2}
              onChange={() => {
                setDoorThicknessCheckBox(2);
                setData({
                  ...data,
                  doorThickness: "30",
                });
              }}
            >
              30 mm
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={doorThicknessCheckBox === 3}
              onChange={() => {
                setDoorThicknessCheckBox(3);
                setData({
                  ...data,
                  doorThickness: "50",
                });
              }}
            >
              50 mm
            </Checkbox>
          </VStack>
        </HStack>
        <HStack width={"100%"} justifyContent={"flex-end"}>
          <Button
            bgColor={"#E5E9F1"}
            color={"#616161"}
            fontSize={"14px"}
            width={"150px"}
            _hover={{ bgColor: "none", opacity: 0.9 }}
            onClick={() => setPage(1)}
          >
            Back
          </Button>
          <Button
            bgColor={"#32936F"}
            color={"#fff"}
            fontSize={"14px"}
            width={"150px"}
            _hover={{ bgColor: "none", opacity: 0.9 }}
            onClick={handleNextPageClick}
          >
            Next
          </Button>
        </HStack>
      </VStack>
      <VStack>
        {/* <Image
            width={"50%"}
            position={"fixed"}
            top={0}
            right={0}
            height="100vh"
            src="/create-room-assets/room2.png"
          /> */}
      </VStack>
    </HStack>
  );
};

export default WallDetails;
