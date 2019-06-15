import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  console.log({ email, password })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Netlify Identity Example</h1>
      <p>
        This is a small example of using Netlify Identity and the GoTrue APi
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log({ e })
          }}
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
