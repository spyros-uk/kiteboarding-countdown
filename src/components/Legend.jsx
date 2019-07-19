import React from "react"

import { H2, H4 } from "./Typography"
import styled from "styled-components"

export default function Legend() {
  return (
    <StyledLedend>
      <H2>KITEBOARDING</H2>
      <H4>starts in...</H4>
    </StyledLedend>
  )
}

const StyledLedend = styled.div`
  text-align: center;
`
