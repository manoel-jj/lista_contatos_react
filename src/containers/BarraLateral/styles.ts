import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const linkLateral = styled.div`
  display: block;
  margin-left: 50px;
  margin-top: 16px;

  div {
    margin: 5px;
  }

  a {
    color: green;
    font-size: 16px;
    text-decoration: none;
  }
`

export const imgContato = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 24px;
    display: flex;
    color: green;
  }
`

export const botao = styled.button`
  background-color: black;
  color: green;
  font-size: 16px;
  margin-top: 5px;
`
