import React from "react"
import GoTrue from "gotrue-js"

const auth = new GoTrue({
  APIUrl: "https://priceless-einstein-14b96a.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false,
})

export const GoTrueContext = React.createContext()

const GoTrueProvider = ({ children }) => {
  const confirm = () => {
    return new Promise((resolve, reject) => {
      const token = window.location.hash
        .substring(1)
        .split("confirmation_token=")[1]
      console.log({ token })
      if (!token) {
        resolve()
        return
      }
      auth
        .confirm(token)
        .then(res => {
          resolve(res)
          console.log({ confirm: res })
        })
        .catch(err => {
          reject(err)
          console.log(err)
        })
    })
  }

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      confirm()
        .then(() => {
          auth
            .login(email, password)
            .then(res => {
              resolve(res)
              console.log({ login: res })
            })
            .catch(err => {
              reject(err)
              console.log(err)
            })
        })
        .catch(err => {
          reject(err)
          console.log(err)
        })
    })
  }

  const value = { auth, login }
  return (
    <GoTrueContext.Provider value={value}>{children}</GoTrueContext.Provider>
  )
}

export default GoTrueProvider
