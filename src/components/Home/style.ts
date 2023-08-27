import styled from "styled-components";

export const HomeContainer = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 2rem 0 2rem 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
