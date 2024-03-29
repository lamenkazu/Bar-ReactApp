import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, InputWrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignIn = () => {
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });

  const handleFormChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    signIn({ cpf: form.cpf, password: form.password });
  };

  return (
    <Container>
      <h1>Faça login</h1>

      <InputWrapper>
        <Input
          id="cpf"
          name="cpf"
          lbl="CPF"
          type="text"
          placeholder="Somente números"
          onChange={handleFormChanges}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSignIn();
            }
          }}
        />
        <Input
          id="password"
          name="password"
          lbl="Senha"
          type="password"
          placeholder="*****"
          onChange={handleFormChanges}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSignIn();
            }
          }}
        />
      </InputWrapper>
      <Button title="Entrar" onClick={handleSignIn} />
    </Container>
  );
};
