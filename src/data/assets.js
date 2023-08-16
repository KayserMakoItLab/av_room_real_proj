import { PiTelevisionFill } from "react-icons/pi";
import { GiTable, GiOfficeChair } from "react-icons/gi";
import { BsWebcamFill, BsSpeakerFill } from "react-icons/bs";

export const dynamicAssets = [
  {
    id: 1,
    type: "table",
    icon: <GiTable />,
    name: "Wood Table",
    path: "/assets/tables/table 1.gltf",
  },
  {
    id: 2,
    type: "tv",
    icon: <PiTelevisionFill />,
    name: "LG web OS",
    path: "/assets/tv/Tv02.gltf",
  },
  {
    id: 3,
    type: "camera",
    icon: <BsWebcamFill />,
    name: "Xiaomi cam",
    path: "/assets/cameras/Camera.gltf",
  },
  {
    id: 4,
    type: "speaker",
    icon: <BsSpeakerFill />,
    name: "Sony XMS",
    path: "/assets/speakers/Speaker.gltf",
  },
  {
    id: 5,
    type: "chair",
    icon: <GiOfficeChair />,
    name: "Steel Chair",
    path: "/assets/chairs/Chair.gltf",
  },
];
