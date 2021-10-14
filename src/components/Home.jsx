import React from "react";
import styled from "styled-components";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Body from "./pages/Body";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


function Home(props) {  
  const changeTheme =()=>{
    if(props?.theme === "light"){
      props?.setTheme("dark");
    }else{
      props?.setTheme("light")
    }
  }
  const icon= props.theme === "light"?<box-icon type='solid' name='moon'></box-icon> : <box-icon name='sun' type='solid' color="rgba(255, 255, 255, 0.96)"  ></box-icon>;
  return (
   
    <BG>
      <NavBar icons={icon} change={changeTheme} />
      <Body />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </BG>
   
  );
}
export default Home;

const BG = styled.div`
  background-color:${props=>props.theme.pageBackground};
      overflow-x: hidden;
  p,h1,h3, h2{
    color: ${props=>props.theme.titleColor};
  }
  `