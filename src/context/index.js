'use client'
import { createContext, useContext, useState } from "react";

const DynamicElementContext = createContext();

export const DynamicElementProvider = ({ children }) => {
  const state = useState({
    elements: [],
    types: [],
    paths: [],
  });
  return (
    <DynamicElementContext.Provider value={state}>
      {children}
    </DynamicElementContext.Provider>
  );
};


export const useDynamicElement = () => {
  const value = useContext(DynamicElementContext);
  if (!value) throw error("useDynamicElement must be inside it's provider");
  return value;
};

// Room Details Provider

const RoomDataContext = createContext();

export const RoomDataProvider = ({children}) => {
  const state = useState({
    roomType:'',
    width:'',
    height:'',
    length:'',
    seater:'',
    frontWallType:'',
    backWallType:'',
    rightWallType:'',
    leftWallType:'',
    doorType:'',
    doorSide:'',
    doorThickness:'',
    tableType:'',
    tableColor:'',
    chairType:'',
    chairColor:''
  })
  return <RoomDataContext.Provider value={state}>
    {children}
  </RoomDataContext.Provider>
}

export const useRoomData = () => {
  const value = useContext(RoomDataContext);
  if (!value) throw console.error("useRoomData must be inside it's provider");
  return value;
}


// Color selcetion for meshes

// const ColorSelectContext = createContext();

// export const ColorSelectProvider = ({children}) => {
//   const state = useState({
//     current: null,
//     items:{
//       frontWall: "#ffffff",
//       backWall: "#ffffff",
//       rightWall: "#ffffff",
//       leftWall: "#ffffff",
//     }
//   });
//   return <ColorSelectContext.Provider value={state}>
//     {children}
//   </ColorSelectContext.Provider>
// }

// export const useColorSelect = () => {
//   const value = useContext(ColorSelectContext);
//   if(!value) throw error("useColorSelect must be inside it's provider")
//   return value
// }


// enable orbit control

const ControlOrbitContext = createContext();

export const ControlOrbitProvider = ({children}) => {
  const state = useState(true);
  return (
    <ControlOrbitContext.Provider value={state}>
      {children}
    </ControlOrbitContext.Provider>
  );
}

export const useControlOrbit = () => {
  const value = useContext(ControlOrbitContext);
  if (!value) throw error("useControlOrbit must be inside it's provider");
  return value;
}