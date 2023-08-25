import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 95%;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    img {
      width: 80px;
      height: 80px;
    }

    p {
      color: #5fd9cd;
    }
  }
`;
