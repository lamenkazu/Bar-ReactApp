import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
  Container,
  Form,
  InputWrapper,
  PersonInfoWrapper,
  GenderWrapper,
  PasswordWrapper,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export const SignUp = () => {
  const { signUp } = useAuth();

  const [gender, setGender] = useState(""); // Estado para controlar o gênero selecionado

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedGender = event.target.value;

    // Atualiza o estado com o gênero selecionado
    setGender(selectedGender === gender ? "" : selectedGender);
  };
  useEffect(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  }, []);

  return (
    <Container>
      <Form>
        <h1>Cadastre um funcionario</h1>
        <InputWrapper>
          <PersonInfoWrapper>
            <Input
              id="cpf"
              name="cpf"
              lbl="CPF"
              type="text"
              placeholder="Somente números"
              //   onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  //   handleSignIn();
                }
              }}
            />

            <GenderWrapper>
              <h4>Gênero:</h4>
              <section>
                <div>
                  <input
                    type="checkbox"
                    id="male"
                    name="gender"
                    value="masculino"
                    checked={gender === "masculino"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="male">Masculino</label>
                </div>

                <div>
                  <label htmlFor="female">Feminino</label>
                  <input
                    type="checkbox"
                    id="female"
                    name="gender"
                    value="feminino"
                    checked={gender === "feminino"}
                    onChange={handleGenderChange}
                  />
                </div>
              </section>
            </GenderWrapper>
          </PersonInfoWrapper>

          <Input
            id="name"
            name="name"
            lbl="Nome"
            type="text"
            placeholder="Ex: Maria Da Silva"
            //   onChange={handleFormChanges}
            onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                //   handleSignIn();
              }
            }}
          />

          <PasswordWrapper>
            <Input
              id="password"
              name="password"
              lbl="Senha"
              type="password"
              placeholder="*****"
              //   onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  //   handleSignIn();
                }
              }}
            />

            <Input
              id="confirmPassword"
              name="confirmPassword"
              lbl="Confirmar senha"
              type="password"
              placeholder="*****"
              //   onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  //   handleSignIn();
                }
              }}
            />
          </PasswordWrapper>
        </InputWrapper>

        <Button
          title="Entrar"
          //   onClick={handleSignIn}
        />
      </Form>
    </Container>
  );
};
