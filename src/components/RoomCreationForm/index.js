"use client";
import { Suspense, useState } from "react";
import RoomDetails from "./RoomDetails";
import WallDetails from "./WallDetails";
import TableDetails from "./TableDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, SlideFade } from "@chakra-ui/react";
import { Loader } from "@react-three/drei";
import Room from "../Room";

const RoomCreationForm = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <ToastContainer />
      <SlideFade in unmountOnExit offsetY="30px">
        {page === 1 && <RoomDetails setPage={setPage} />}
        {page === 2 && <WallDetails setPage={setPage} />}
        {page === 3 && <TableDetails setPage={setPage} />}
      </SlideFade>
      <Box
        width={"50% !important"}
        height={"100vh"}
        position={"absolute"}
        top={0}
        right={0}
        alignItems={"center"}
      >
        <Suspense fallback={<Loader />}>
          <Room />
        </Suspense>
      </Box>
    </>
  );
};

export default RoomCreationForm;
