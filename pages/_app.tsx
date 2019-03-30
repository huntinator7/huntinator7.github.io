import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
      }
  render() {
    return (
      <Container>
        <GlobalStyle />
      </Container>
    );
  }
}

export default MyApp;
