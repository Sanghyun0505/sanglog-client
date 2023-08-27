import styled from "styled-components";

export const DetailItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  row-gap: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailItemWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
  }
`;

export const DetailItemViewContainer = styled.div`
  width: 60%;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 4rem;
  }
  code {
    font-size: 12px;
  }
`;

export const DetailItemTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 5rem;
`;
