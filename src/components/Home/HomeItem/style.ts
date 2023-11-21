import styled from "styled-components";

export const HomeItem = styled.div`
  width: 320px;
  height: 360px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 5px 0px;
  border: 1px solid #ddd;
`;

export const HomeItemImage = styled.div`
  width: 100%;
  height: 65%;

  cursor: pointer;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #d9d9d9;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    overflow: hidden;

    transform: scale(1);
    transition: all 0.25s ease-in-out;
    &:hover {
      transform: scale(1.04);
    }
  }
`;

export const HomeEtcContainer = styled.div`
  width: 100%;
  height: 35%;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const HomeEtcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
