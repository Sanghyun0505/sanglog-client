import styled from "styled-components";

export const HomeContainer = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0 0 1rem;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
