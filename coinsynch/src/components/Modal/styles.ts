import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h4 {
    margin-bottom: 1rem;
    color: $gray-500;

    span:nth-child(1) {
      color: $text-base;
    }

    span:nth-child(2) {
      color: $orange-500;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 0.5rem;
    color: $text-base;
    border: 1px solid $gray-300;
    border-radius: 5px;
    margin-bottom: 1rem;
    outline: none;
  }

  a:nth-child(3) {
    font-size: 12px;
    color: $gray-500;
    margin-left: 12rem;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 32px;
    padding: 0.5rem 3.3rem;
    margin-bottom: 1rem;
    background-color: $orange-500;
    color: $white;
    transition: ease-in-out;
    cursor: pointer;
  }

  p {
    font-size: 12px;
    color: $text-base;

    a {
      font-weight: bold;
      color: $gray-500;

      span:nth-child(1) {
        color: $text-base;
      }

      span:nth-child(2) {
        color: $orange-500;
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const InputWithIcon = styled.div`
  background-repeat: no-repeat;
  background-position: 5px 7.5px;
  padding-left: 25px;

  input {
    position: relative;
  }
`;

export const ShowPasswordIcon = styled.span`
  position: absolute;
  right: 10px;
  bottom: 7.2rem;
`;
