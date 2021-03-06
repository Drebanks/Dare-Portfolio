import React from "react";
import styled from "styled-components";
import Landify from "../../assets/landify.png";
// import { Link } from "react-router-dom";
import unique from "../../assets/unique.png";
import tomp from "../../assets/tomp.png";
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
              <h2>LANDING PAGE</h2>
              <p> 
                This page was built with React, it
                is also responsive to mobile view
              </p>
            </div>
            <a href="https://landify-landingpage.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src={unique} alt="uniq" />
            </div>
            <div className="detail-card">
              <h2>LANDING PAGE</h2>
              <p>
                This page with the signup is built with HTML and CSS. It is quite responsive to mobile
                view.
              </p>
            </div>
            <a href="https://unique-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

        <InnerBox data-aos="zoom-in">
            <div>
              <img src={Cap} alt="spa" />
            </div>
            <div className="detail-card">
              <h2>SPACEET</h2>
              <p>
                This service apartment site is built with React.
              </p>
            </div>
            <a href="https://spaceet.com" target="_blank" rel="noopener noreferrer">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
         
        </Box>
          {/* <InnerBox data-aos="zoom-in">
            <div>
              <img src={tomp} alt="tom" />
            </div>
            <div className="detail-card">
              <h2>TOMPURSE FINTECH</h2>
              <p>
                Tompurse landing page and auth page using React.js. It is also responsive. 
              </p>
            </div>
            <Link to="https://tomspurse-react.vercel.app/">
              <button>CLICK TO VIEW</button>
            </Link>
          </InnerBox> */}
        <Box>
        {/* <InnerBox data-aos="zoom-in">
            <div>
              <img src={dataware} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>Dataware</h2>
              <p>
                This is a landing page website  built with
                HTML, CSS, and JavaScript
              </p>
            </div>
            <a href="https://dataware.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={cm} alt="curtis" />
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
