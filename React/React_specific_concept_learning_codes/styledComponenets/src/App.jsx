
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
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  colors: {
    primary: "#4caf50",
    danger: "#f44336",
  },
};

const darkTheme = {
  colors: {
    primary: "#333",
    danger: "#ff9800",
  },
};

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div style={{ padding: "20px" }}>
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

