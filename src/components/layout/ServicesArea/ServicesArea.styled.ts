import styled from "styled-components";

export const StyledServicesArea = styled.section`
  background: #ddd;
  position: relative;
  padding: 200px 100px;
  ul.services-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .services-content li {
    padding: 0 30px;
    flex-basis: 33%;
    text-align: center;
  }
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
    .services-content{
        flex-direction: column;
    }
    .services-content li{
        margin-bottom: 15px;
    }
    padding: 100px 50px;
  }
  @media (max-width: 700px) {
    .services-content{
        flex-direction: column;
    }
    .services-content li{
        margin-bottom: 15px;
    }
    padding: 125px 30px;
    min-height: 600px;
  }
`;
