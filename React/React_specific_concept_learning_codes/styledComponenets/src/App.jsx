
// import { AppContainer } from "./Components/AppContainer.style";
// import { GlobalStyle } from "./Components/GlobalStyles.style";
// import { Button } from "./Components/Button.style";
// function App() {
 

//   return (
//     <AppContainer>
//       <GlobalStyle/>
//       <Button bg="red">Click me!</Button>
//       <Button bg="violet">Click me!</Button>
//       <Button bg="yellow">Click me!</Button>


//     </AppContainer>
//   )
// }

// export default App
import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// 🔹 Define light & dark themes
const lightTheme = {
  body: "#ffffff",
  text: "#000000",
  buttonBg: "#4caf50",
  buttonText: "#ffffff",
};

const darkTheme = {
  body: "#121212",
  text: "#ffffff",
  buttonBg: "#333333",
  buttonText: "#ff9800",
};

// 🔹 Global styles that depend on theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s ease;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
`;

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}


