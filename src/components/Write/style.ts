import styled from "styled-components";

export const RegistContainer = styled.form`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  padding-top: 3rem;
`;

export const RegistTitleInputBar = styled.input<{ fontSize: string }>`
  width: 100%;
  height: 65px;

  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  outline: none;
  border: none;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

export const ImageInputBar = styled.input`
  width: 40%;
  height: 50px;

  font-size: 16px;
  font-weight: bold;

  outline: none;
  border: none;

  background-color: #f8f9fa;
  color: #5fd9cd;
`;

export const RegistSubmitContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-weight: bold;
  column-gap: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const RegistOutContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
`;

export const RegistSubmitBtn = styled.button`
  width: 120px;
  height: 50px;
  outline: none;
  border: none;
  background-color: #5fd9cd;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #64e3d6;
  }
`;
