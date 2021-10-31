import styled from "styled-components";

export const StyledContact = styled.section`
  background: #fff;
  position: relative;
  padding: 200px 100px;
  ul.contact-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .contact-content li {
    padding: 0 30px;
    flex-basis: 33%;
    text-align: center;
  }
  .contact-title{
    margin-bottom: 15px;
  }


  @media (max-width: 1000px) {
    .contact-content{
        flex-direction: column;
    }
    .contact-content li{
        margin-bottom: 15px;
    }
    padding: 100px 50px;
  }
  @media (max-width: 700px) {
    .contact-content{
        flex-direction: column;
    }
    .contact-content li{
        margin-bottom: 15px;
    }
    padding: 125px 30px;
    min-height: 600px;
  }
`;
