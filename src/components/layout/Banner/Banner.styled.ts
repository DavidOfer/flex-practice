import styled from "styled-components";

export const StyledBanner = styled.section`
  color: #fff;
  position: relative;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  .banner-image {
    background-image: url("https://i.redd.it/jx0cehys3yr31.jpg");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
  }
  
  @media (max-width: 1000px) {
    .bannerh1 {
      margin-top: 30px;
    }
    padding: 100px 50px;
  }
  @media (max-width: 700px) {
    .bannerh1 {
      margin-top: 30px;
    }
    padding: 125px 30px;
    min-height: 600px;
  }
`;
