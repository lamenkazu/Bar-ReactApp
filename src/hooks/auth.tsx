import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
  PropsWithChildren,
} from "react";
import { api } from "./../services/api";

import {
  AuthContextData,
  SignInProps,
  SignUpProps,
  UserProps,
} from "../@types/auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ cpf, password }: SignInProps) => {
    try {
      const response = await api.post("/sessions", { cpf, password });
      const { user } = response.data;

      localStorage.setItem("@bar-valadares:user", JSON.stringify(user));

      setData(user);
      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  }, []);

  const signUp = useCallback(({ name, cpf, password, role }: SignUpProps) => {
    api
      .post("/users/admin", { name, cpf, password, role })
      .then(() => {
        alert("Registro realizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível realizar o registro.");
        }
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@bar-valadares:user");

    setData({} as UserProps);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("@bar-valadares:user");

    if (user) {
      setData(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const authValue = useMemo(
    () => ({
      signIn,
      signUp,
      signOut,
      user: data,
    }),
    [signIn, signUp, signOut, data, loading]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
