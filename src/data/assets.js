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
    type: "table",
    icon: <GiTable />,
    name: "None",
    path: "",
  },
  {
    id: 3,
    type: "tv",
    icon: <PiTelevisionFill />,
    name: "LG web OS",
    path: "/assets/tv/Tv02.gltf",
  },
  {
    id: 4,
    type: "tv",
    icon: <PiTelevisionFill />,
    name: "None",
    path: "",
  },
  {
    id: 5,
    type: "camera",
    icon: <BsWebcamFill />,
    name: "Xiaomi cam",
    path: "/assets/cameras/Camera.gltf",
  },
  {
    id: 6,
    type: "camera",
    icon: <BsWebcamFill />,
    name: "None",
    path: "",
  },
  {
    id: 7,
    type: "speaker",
    icon: <BsSpeakerFill />,
    name: "Sony XMS",
    path: "/assets/speakers/Speaker.gltf",
  },
  {
    id: 8,
    type: "speaker",
    icon: <BsSpeakerFill />,
    name: "None",
    path: "",
  },
  {
    id: 9,
    type: "chair",
    icon: <GiOfficeChair />,
    name: "Steel Chair",
    path: "/assets/chairs/Chair.gltf",
  },
  {
    id: 10,
    type: "chair",
    icon: <GiOfficeChair />,
    name: "None",
    path: "",
  },
];
