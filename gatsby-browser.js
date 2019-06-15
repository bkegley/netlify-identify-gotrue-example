import React from "react"
import GoTrueProvider from "./src/context/GoTrueProvider"

export const wrapRootElement = ({ element }) => {
  return <GoTrueProvider>{element}</GoTrueProvider>
}
