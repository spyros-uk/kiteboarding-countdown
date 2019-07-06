import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url("https://images.unsplash.com/photo-1560507570-65c8309cf9ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80")
    no-repeat 50% 40%;
  background-size: cover;
  opacity: 0.9;
`;
