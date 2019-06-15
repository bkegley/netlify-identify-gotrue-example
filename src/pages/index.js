import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import useAuth from "../context/useAuth"

const IndexPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const { auth, login } = useAuth()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Netlify Identity Example</h1>
      <p>
        This is a small example of using Netlify Identity and the GoTrue APi
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h2>Login</h2>
        <form
          onSubmit={async e => {
            e.preventDefault()
            const newUser = await login(email, password).catch(err =>
              console.log({ err })
            )
            console.log({ newUser })
          }}
        >
          <div style={{ display: "flex" }}>
            <label htmlFor="email" style={{ flex: 1 }}>
              Email
            </label>
            <input
              style={{ flex: 1 }}
              type="text"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <label htmlFor="password" style={{ flex: 1 }}>
              Password
            </label>
            <input
              style={{ flex: 1 }}
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
