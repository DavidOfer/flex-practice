import styled from "styled-components";

export const StyledAbout = styled.section`
  position: relative;
  justify-content: center;
  /* color: #0039e6; */
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  h3 {
    justify-content: center;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  h2 {
    display: inline-block;
    font-weight: 900;
    margin-bottom: 5px;
  }
  .about-content {
    width: 100%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .about-content > div {
    padding: 20px;
    height: 290px;
    background-clip: content-box;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .about-left {
    flex-grow: 1;
    background-image: url("https://store-images.s-microsoft.com/image/apps.23032.13608622719434797.30372fd8-b4bd-41c0-beea-1c2a61e087c1.a8347bb5-9305-48e8-b668-08df54c5a91a?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg");
  }
  .about-right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-left: 200px;
  }
  p {
    display: inline-block;
    max-width: 800px;
    margin-bottom: 35px;
    line-height: 1.5;
    padding-left: 0;
  }
  @media (max-width: 1000px) {
    padding: 50px 50px;
    .about-content{
      flex-direction: column;
    }
    .buttonDiv{
      text-align: center;
    }
  }
  @media (max-width: 700px) {
    padding: 50px 30px;
    min-height: 300px;
    .about-content{
      flex-direction: column;
    }
    .buttonDiv{
      text-align: center;
    }
  }
`;
