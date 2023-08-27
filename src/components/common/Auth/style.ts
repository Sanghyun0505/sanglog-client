import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AuthWrapper = styled.div`
  width: 700px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  cursor: default;
  overflow: hidden;
  animation: modaldown 0.2s linear;

  @keyframes modaldown {
    from {
      transform: translateY(-7%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const AuthItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInWrapper = styled.div`
  width: 70%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const AuthText = styled.div`
  font-size: 30px;
`;

export const AuthInputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const SingInInputBar = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 15px;
  &:hover {
    border: 1px solid #5fd9cd;
  }
`;

export const AuthBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #5fd9cd;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
`;

export const NotAccountText = styled.p`
  font-size: 13px;
  text-align: center;
  span {
    color: #5fd9cd;
    cursor: pointer;
  }
`;
