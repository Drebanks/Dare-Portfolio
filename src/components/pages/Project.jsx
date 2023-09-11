import React from "react";
import styled from "styled-components";
import Landify from "../../assets/Hero.jpg";
// import { Link } from "react-router-dom";
import unique from "../../assets/numero.png";
import webapp from "../../assets/webapp.png";
import todo from "../../assets/todo.jpg";
import Cap from "../../assets/dar.png";

function Project() {
  return (
    <MainPro id="project">
      <Body>
        <h1>Projects</h1>
        <Box>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={Landify} alt="page" />
            </div>
            <div className="detail-card">
              <h2>Transroute</h2>
              <p> 
              A platform Connecting the entire payments value chain through a single software platform, providing a single and simplistic control over demanding payment operations.
              </p>
            </div>
            <a href="https://transroute.co/" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src={unique} alt="uniq" />
            </div>
            <div className="detail-card">
              <h2>Numero Website</h2>
              <p>
              A banking solution focused at helping entrepreneurs manage their business accounts and finances
              </p>
            </div>
            <a href="https://numero.africa/" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={webapp} alt="tom" />
            </div>
            <div className="detail-card">
              <h2>Numero WebApp</h2>
              <p>
              A banking solution focused at helping entrepreneurs manage their business accounts and finances
              </p>
            </div>
            <a href="https://dash.getnumero.co/" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
        </Box>
        <Box>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={Cap} alt="spa" />
            </div>
            <div className="detail-card">
              <h2>SPACEET</h2>
              <p>
              Spaceet provides a seamless user experience for apartment listing and short let bookings.
              </p>
            </div>
            <a href="https://spaceet.com" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
        <InnerBox data-aos="zoom-in">
            <div>
              <img src={todo} alt="dre" />
            </div>
            <div className="detail-card">
              <h2>Todo App</h2>
              <p>
                This is an App built with
                HTML, CSS, and JavaScript
              </p>
            </div>
            <a href="https://todo-nu-rust.vercel.app//">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
          {/* <InnerBox data-aos="zoom-in">
            <div>
              <img src={webapp} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>CurpraMovie</h2>
              <p>
                This is full stack web application built with
                react.js, styled-components, context api, node.js, Mongo db and express
              </p>
            </div>
            <a href="https://movie-webapp.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox> */}
        </Box>
      </Body>
    </MainPro>
  );
}

export default Project;

const MainPro = styled.div`
  padding: 100px 0;

  button{
    cursor: pointer;
  }
`;
const Body = styled.div`
  margin: 0 auto;
  max-width: 1240px;
 
  h1 {
    font-family: lobster;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 590px){
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 999px) {
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const InnerBox = styled.div`
  border: 0px;
  margin: 1rem;
  flex: 1;
  border-radius:2rem;
  border-radius: 12.8028px;
    background-color: ${props=>props.theme.cardColor};
    box-shadow: ${props=>props.theme.cardShadow};
    width: 100%;
text-align:center;
padding: 2rem 1rem;
  

  img {
    width: 100%;
    border-radius:1rem;
  }
  .detail-card {
    padding: 1rem;
    text-align:center;
  }
  button {
    border: 0px;
    background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.99rem 1.2rem;
    color: white;
    border-radius:2rem;
    margin-bottom: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  } 
  a {
    text-decoration: none;
  }
  p{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  h2{
  font-size: 1.4rem;
  margin-bottom: 1rem;
  }
`;
