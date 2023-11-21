import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
`;

export const HeaderWrapper = styled.div`
  width: 95%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
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
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 40px;
    height: 40px;
  }
`;
