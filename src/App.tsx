import React from "react";
import "./App.css";
import { useState } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  const [name, setName] = useState(""); //para manter o estado dos valores a medida que são digitados
  const [lastName, setLastName] = useState("");

  const [displayText, setDisplayText] = useState("");

  //handleSubmit é chamada para exibir o alert
  const handleSubmit = (e: any) => {
    //preventDefault impede que a página seja recarregada após o envio
    e.preventDefault();
    setDisplayText(`Meu nome é ${name} e meu sobrenome é ${lastName}`);
  };

  return (
    <div className="container">
      <h1>Test</h1>
      {/*chakra components*/}
      <form className="form" onSubmit={handleSubmit}>
        <>
          <Stack spacing={10}>
            <Input
              placeholder="Whats your name?"
              size="sm"
              width="165px"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Input
              placeholder="Whats your last name?"
              size="sm"
              width="165px"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Stack>
        </>

        <>
          <Stack>
            <Button type="submit" colorScheme="teal" variant="solid">
              Enviar
            </Button>
          </Stack>
        </>
      </form>

      <div className="text">{displayText}</div>
    </div>
  );
}

export default App;
