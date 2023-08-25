import styled from "styled-components";

export const HomeItem = styled.div`
  width: 320px;
  height: 380px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 10px 0px;
  cursor: pointer;

  transform: scale(1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const HomeItemImage = styled.div<{ backgroundImg: string }>`
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #d9d9d9;
  background: url(${(props) => props.backgroundImg}) no-repeat;
  background-size: cover;
`;

export const HomeEtcContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const HomeEtcProfileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 14px;
`;

export const HomeEtcTitle = styled.p`
  font-size: 18px;
  margin-top: 0.5rem;
`;

export const HomeEtcSubTitle = styled.p`
  font-size: 16px;
  color: #495057;
`;
