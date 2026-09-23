import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

export const BtnPesquisar = styled.button`
  background-color: ${theme.corPrincipal};
  border: 1px solid ${theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`;

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${theme.corPrincipal};
`;
