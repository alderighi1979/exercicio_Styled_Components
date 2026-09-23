import styled from "styled-components";
import { theme } from "../../styles/theme";

export const VagaEstilo = styled.li`
  border: 1px solid ${theme.corPrincipal};
  background-color: ${theme.corSecundaria};
  color: ${theme.corPrincipal};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover{
    background-color: ${theme.corPrincipal};
    color: ${theme.corSecundaria};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color:${theme.corSecundaria};
    background-color: ${theme.corPrincipal};
    color:${theme.corSecundaria};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    &:hover{
      border-color: ${theme.corPrincipal};
      background-color: ${theme.corSecundaria};
      color: ${theme.corPrincipal};
    }

      @media (max-width: 768px) {
      display: block;
      }
`
