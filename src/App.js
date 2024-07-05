import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ScrollUp from "./ScrollUp";
// import Preloader from "./Preloader";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./themes/theme";

function App() {
  const [theme, setTheme] = useState("light");
   return (
    <>
      {/* {loading === false ? (
      ) : (
        <Preloader />
      )} */}
      <ThemeProvider theme={themes[theme]}>
        <Apps>
          <Router>
            <Routes>
              <Route path="/" element={<Home theme={theme} setTheme={setTheme} />}></Route>
            </Routes>
          </Router>
          <ScrollUp />
        </Apps>
      </ThemeProvider>
    </>
  );
}

export default App;

const Apps = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
`;
