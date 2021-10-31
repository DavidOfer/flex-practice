import styled from "styled-components";

export const StyledHeader = styled.header`
  color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 100px 0;
  .navLink {
    text-decoration: none;
    color: inherit;
    min-height: 30px;
  }
  .navLink:hover,
  .navLink:active{
    border-bottom: 2px solid;
  }
  .title {
  }
  .navDiv {
    display: flex;
  }
  .navDiv > .navLink {
    margin: 0 15px;
  }
  .navDiv .navLink:first-child {
    margin-left: 0;
  }
  .navDiv .navLink:last-child {
    margin-right: 0;
  }
  @media (max-width: 1000px) {
    header {
      padding: 20px 50px;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    .title {
      margin-bottom: 15px;
    }
    .navDiv .test {
      margin: 0 7px;
    }
  }
`;
