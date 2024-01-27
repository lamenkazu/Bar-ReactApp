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

const emptyUser: UserProps = {
  id: "",
  name: "",
  cpf: "",
  password: "",
  role: "",
  gender: "",
  createdAt: "",
  updatedAt: "",
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProps>(emptyUser);
  const [loading, setLoading] = useState<boolean>(true);

  const signIn = useCallback(async ({ cpf, password }: SignInProps) => {
    try {
      const response = await api.post("/sessions", { cpf, password });
      const { user } = response.data;

      localStorage.setItem("@bar-valadares:user", JSON.stringify(user));

      setUser(user);
      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  }, []);

  const signUp = useCallback(
    async ({ name, cpf, password, role, gender }: SignUpProps) => {
      const res = await api.post("/users/admin", {
        name,
        cpf,
        password,
        role,
        gender,
      });

      return res.data;
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@bar-valadares:user");

    setUser(emptyUser);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("@bar-valadares:user");

    if (user) {
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const authValue = useMemo(
    () => ({
      signIn,
      signUp,
      signOut,
      user,
    }),
    [signIn, signUp, signOut, user, loading]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
