import { Button } from "antd";
import styled from "styled-components";

export const BotaoEstilizado = styled(Button)`
  &&& {
    display: flex;
    background: linear-gradient(to right, #ea57c3, #784af2);
    align-items: center;
    justify-content: center;
    color: white; // Cor do texto
    border: none; // Sem borda
    padding: 12px;
    height: 40px;
    border-radius: 8px; // Bordas arredondadas
    cursor: pointer; // Cursor do mouse em forma de ponteiro
    font-size: 14px; // Tamanho da fonte
    transition: transform 0.1s ease-in-out; // Transição suave para o efeito de clique

    &:hover {
      color: white; // Cor do texto
      transform: scale(1.1); // Efeito de aumento ao passar o mouse
    }

    &:active {
      color: white; // Cor do texto
      transform: scale(0.95); // Efeito de pressionamento ao clicar
    }
  }
`;
