import React from "react"
import { GoTrueContext } from "./GoTrueProvider"

const useAuth = () => {
  const context = React.useContext(GoTrueContext)
  if (!context) {
    throw new Error("useAuth can only be used inside a GoTrueProvider")
  }
  return context
}

export default useAuth
