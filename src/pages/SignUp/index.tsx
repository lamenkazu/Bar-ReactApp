import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { cpf as CPF } from "cpf-cnpj-validator";

import {
  Container,
  Form,
  InputWrapper,
  PersonInfoWrapper,
  CheckboxWrapper,
  PasswordWrapper,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [form, setForm] = useState({
    cpf: "",
    name: "",
    gender: "neutral",
    role: "common",
    password: "",
    confirmPassword: "",
  });

  const handleFormChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedGender = event.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      gender: selectedGender === prevForm.gender ? "neutral" : selectedGender,
    }));
  };

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedRole = event.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      role: selectedRole === prevForm.role ? "common" : selectedRole,
    }));
  };

  const handleSignUp = async () => {
    if (!CPF.isValid(form.cpf)) {
      alert("CPF não é válido.");
      return;
    }

    if (form.password === "" && form.confirmPassword === "") {
      alert("As senhas não podem ser vazias");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Senhas não correspondem");
      return;
    }

    if (form.name === "") {
      alert("Funcionario sem nome não é permitido.");
      return;
    }

    const { cpf, password, gender, role, name } = form;

    await signUp({ cpf, password, gender, role, name })
      .then((res) => {
        if (res === true) {
          toast("Registro realizado com sucesso!", {
            position: "bottom-right", // Posição do toast
            autoClose: 2000, // Tempo em milissegundos para fechar automaticamente
            hideProgressBar: false, // Ocultar a barra de progresso
            closeOnClick: true, // Fechar o toast ao clicar nele
            pauseOnHover: true, // Pausar fechamento ao passar o mouse
            draggable: true, // Permitir arrastar o toast
          });
        }
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível realizar o registro.");
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  }, []);

  return (
    <Container>
      <ToastContainer />

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
              value={form.cpf}
              onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSignUp();
                }
              }}
            />

            <CheckboxWrapper>
              <h4>Função:</h4>
              <section>
                <div>
                  <input
                    type="checkbox"
                    id="admin"
                    name="role"
                    value="admin"
                    checked={form.role === "admin"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="admin">Administrador</label>
                </div>
              </section>
            </CheckboxWrapper>
          </PersonInfoWrapper>

          <PersonInfoWrapper>
            <Input
              id="name"
              name="name"
              lbl="Nome"
              type="text"
              placeholder="Ex: Maria Da Silva"
              value={form.name}
              onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSignUp();
                }
              }}
            />

            <CheckboxWrapper>
              <h4>Gênero:</h4>
              <section>
                <div>
                  <input
                    type="checkbox"
                    id="male"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
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
                    value="female"
                    checked={form.gender === "female"}
                    onChange={handleGenderChange}
                  />
                </div>
              </section>
            </CheckboxWrapper>
          </PersonInfoWrapper>

          <PasswordWrapper>
            <Input
              id="password"
              name="password"
              lbl="Senha"
              type="password"
              placeholder="*****"
              value={form.password}
              onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSignUp();
                }
              }}
            />

            <Input
              id="confirmPassword"
              name="confirmPassword"
              lbl="Confirmar senha"
              type="password"
              placeholder="*****"
              value={form.confirmPassword}
              onChange={handleFormChanges}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSignUp();
                }
              }}
            />
          </PasswordWrapper>
        </InputWrapper>

        <Button title="Cadastrar" onClick={handleSignUp} />
      </Form>
    </Container>
  );
};
