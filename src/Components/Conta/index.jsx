import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import {
  Icone,
  Box,
  Botao,
  Saldo,
  Detalhe,
  IconeTema,
} from "../../Components/UI";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
      Balance available{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>US$</Detalhe> 1,000,000{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
