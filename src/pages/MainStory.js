import * as React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../components/Global.styled";
import Header from "../components/styled/Header/Header";
import Article from "../components/styled/Articles/Article";
import Footer from "../components/styled/Footer/Footer";
import theme from "../theme";

const MainStory = (props) => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="appContainer">
          <Header />
          <Article />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

MainStory.propTypes = {};

export default MainStory;