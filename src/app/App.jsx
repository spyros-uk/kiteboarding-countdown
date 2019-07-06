import React from "react"

import GlobalStyle from "../components/GlobalStyle"
import Layout from "../components/Layout"
import CountDown from "../components/CountDown"
import Frame from "../components/Frame"
import { H2 } from "../components/Typography"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Frame>
          <H2>KITEBOARDING</H2>
          <CountDown />
        </Frame>
      </Layout>
    </>
  )
}
