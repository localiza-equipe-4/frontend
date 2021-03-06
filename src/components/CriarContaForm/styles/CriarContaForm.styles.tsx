import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;

  > div {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 25px;
  margin: 25px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 450px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
    min-width: unset;
  }

  h1 {
    color: #00a85a;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0 2rem;
  }

  button {
    margin: 1rem 0 0.8rem;
  }
`;

export const SignInTitle = styled.p`
  color: #00a85a;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 0 2rem;
  grid-column: 1 / 3;
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h2 {
    color: #023b2a;
    font-size: 0.9rem;
    font-weight: 400px;
    margin: 12px;
  }

  a {
    color: #00a85a;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
