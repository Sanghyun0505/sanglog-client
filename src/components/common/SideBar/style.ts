import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 300px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.055) 0px 2px 10px 0px;
  z-index: 2;
  white-space: nowrap;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const SideBarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #5fd9cd;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    margin-top: 10px;
  }
`;

export const LinkUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 20px;
`;

export const LinkLi = styled.li<{ isSelect?: boolean }>`
  width: 90%;
  height: 40px;
  border-radius: 0 10px 10px 0;
  display: flex;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.isSelect && "#5fd9cd"};
  color: ${(props) => props.isSelect && "#fff"};
`;
