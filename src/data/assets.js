import { PiTelevisionFill } from "react-icons/pi";
import { GiTable } from "react-icons/gi";
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
    name: "None",
    path: "",
  },
  {
    id: 4,
    type: "camera",
    icon: <BsWebcamFill />,
    name: "None",
    path: "",
  },
  {
    id: 5,
    type: "speaker",
    icon: <BsSpeakerFill />,
    name: "None",
    path: "",
  },
];
