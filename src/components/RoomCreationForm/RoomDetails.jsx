import { useRoomData } from "@/context";
import { sendNotification } from "@/utils/notification";
import {
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Divider,
  Select,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const RoomDetails = ({ setPage }) => {
  const [data, setData] = useRoomData();
  const handleNextPageClick = () => {
    // if (
    //   data.width &&
    //   data.height &&
    //   data.length &&
    //   data.roomType &&
    //   data.seater
    // ) {
    setPage(2);
    // } else {
    //   sendNotification("error", "Filled all details!");
    // }
  };
  return (
    <>
      <HStack height={"100%"} width={"100%"}>
        <VStack
          bgColor={"#fff"}
          height={"100vh"}
          zIndex={1}
          width={"50%"}
          alignItems={"flex-start"}
          padding={"64px"}
          spacing={9}
        >
          <Image src="/logo.png" />
          <Box>
            <Text fontSize={"28px"} fontWeight={600} color={"Black/5"}>
              Lets Create Your Space
            </Text>
            <Text fontSize={"14px"} fontWeight={400} color={"#999999"}>
              Please fill your needs to design your room
            </Text>
          </Box>
          <Box width={"100%"}>
            <HStack width={"100%"}>
              <Text fontSize={"18px"} fontWeight={600}>
                Room
              </Text>
              <Divider />
            </HStack>
          </Box>
          <Box width={"100%"} as={Stack} spacing={2}>
            <Text fontSize={"16px"} fontWeight={400}>
              What type of room you prefer?
            </Text>
            <Stack width={"100%"}>
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
                    roomType: e.target.value,
                  });
                }}
              >
                <option value="Conference">Conference</option>
                <option value="Cafeteria">Cafeteria</option>
                <option value="Others">Others</option>
              </Select>
            </Stack>
          </Box>
          <HStack
            width={"100%"}
            justifyContent={"space-between"}
            padding={0}
            spacing={4}
          >
            <Box width={"100%"} as={Stack} spacing={2}>
              <Text fontSize={"16px"} fontWeight={400}>
                Width of the Room
              </Text>
              <Stack width={"100%"}>
                <NumberInput
                  step={2}
                  bgColor={"#F6F7FB"}
                  outline={"none"}
                  border={"0px"}
                  borderColor={"#F6F7FB"}
                  borderRadius={2}
                  _hover={{
                    outline: "none",
                    borderColor: "#F6F7FB",
                    border: "0px",
                  }}
                  colorScheme="gray"
                  defaultValue={6}
                  min={6}
                  onChange={(e) => setData({ ...data, width: e })}
                >
                  <NumberInputField />
                  <NumberInputStepper marginRight={"-3px"}>
                    <NumberIncrementStepper
                      border={"none"}
                      bgColor={"#E5E9F1"}
                      width={5}
                    />
                    <NumberDecrementStepper
                      border={"none"}
                      bgColor={"#E5E9F1"}
                      width={5}
                    />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Box>
            <Box width={"100%"} as={Stack} spacing={2}>
              <Text fontSize={"16px"} fontWeight={400}>
                Height of the Room
              </Text>
              <Stack width={"100%"}>
                <NumberInput
                  step={2}
                  bgColor={"#F6F7FB"}
                  outline={"none"}
                  border={"0px"}
                  borderColor={"#F6F7FB"}
                  borderRadius={2}
                  _hover={{
                    outline: "none",
                    borderColor: "#F6F7FB",
                    border: "0px",
                  }}
                  colorScheme="gray"
                  defaultValue={6}
                  min={6}
                  onChange={(e) => setData({ ...data, height: e })}
                >
                  <NumberInputField />
                  <NumberInputStepper marginRight={"-3px"}>
                    <NumberIncrementStepper
                      border={"none"}
                      bgColor={"#E5E9F1"}
                      width={5}
                    />
                    <NumberDecrementStepper
                      border={"none"}
                      bgColor={"#E5E9F1"}
                      width={5}
                    />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Box>
            <Box width={"100%"} as={Stack} spacing={2}>
              <Text fontSize={"16px"} fontWeight={400}>
                Length of the Room
              </Text>
              <NumberInput
                step={2}
                bgColor={"#F6F7FB"}
                outline={"none"}
                border={"0px"}
                borderColor={"#F6F7FB"}
                borderRadius={2}
                _hover={{
                  outline: "none",
                  borderColor: "#F6F7FB",
                  border: "0px",
                }}
                colorScheme="gray"
                defaultValue={6}
                min={6}
                onChange={(e) => setData({ ...data, length: e })}
              >
                <NumberInputField />
                <NumberInputStepper marginRight={"-3px"}>
                  <NumberIncrementStepper
                    border={"none"}
                    bgColor={"#E5E9F1"}
                    width={5}
                  />
                  <NumberDecrementStepper
                    border={"none"}
                    bgColor={"#E5E9F1"}
                    width={5}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </HStack>
          <Box width={"100%"}>
            <HStack width={"100%"}>
              <Text fontSize={"18px"} fontWeight={600}>
                Seating
              </Text>
              <Divider />
            </HStack>
          </Box>
          <Box as={Stack}>
            <Text fontSize={"16px"} fontWeight={400}>
              No of seaters you prefer?
            </Text>
            <Stack width={"80%"}>
              <NumberInput
                bgColor={"#F6F7FB"}
                outline={"none"}
                border={"0px"}
                borderColor={"#F6F7FB"}
                borderRadius={2}
                _hover={{
                  outline: "none",
                  borderColor: "#F6F7FB",
                  border: "0px",
                }}
                colorScheme="gray"
                defaultValue={6}
                min={4}
                max={10}
                onChange={(e) => setData({ ...data, seater: e })}
              >
                <NumberInputField />
                <NumberInputStepper marginRight={"-3px"}>
                  <NumberIncrementStepper
                    border={"none"}
                    bgColor={"#E5E9F1"}
                    width={5}
                  />
                  <NumberDecrementStepper
                    border={"none"}
                    bgColor={"#E5E9F1"}
                    width={5}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
          </Box>
          <Stack display={"flex"} alignSelf={"flex-end"}>
            <Button
              bgColor={"#32936F"}
              color={"#fff"}
              fontSize={"14px"}
              width={"160px"}
              _hover={{ bgColor: "none", opacity: 0.9 }}
              onClick={handleNextPageClick}
            >
              Next
            </Button>
          </Stack>
        </VStack>
      </HStack>
    </>
  );
};

export default RoomDetails;
