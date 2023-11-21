import styled from "styled-components";

export const DetailItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  row-gap: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailItemWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);

  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
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

export const DetailCommentForm = styled.form`
  width: 100%;
  height: 150px;
`;

export const DetailItemCommentBox = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
  border: 1px solid #d9d9d9;
  padding: 1rem 1rem;
  background-color: transparent;
  font-size: 15px;
  margin-top: 2rem;
`;

export const DetailCommentButton = styled.button`
  width: 100px;
  height: 32px;
  outline: none;
  border: none;
  background-color: #5fd9cd;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  margin-top: 10px;
`;

export const DetailCommentUl = styled.ul`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  li {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
    div {
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin-bottom: 5px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 4rem;
      }
    }
  }
`;
