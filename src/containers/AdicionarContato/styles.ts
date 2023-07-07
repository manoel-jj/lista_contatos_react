import styled from 'styled-components'

export const FormContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`
