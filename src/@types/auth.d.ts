export interface SignInProps {
  cpf: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  cpf: string;
  password: string;
  role: string;
  gender: string;
}

export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  password: string;
  role: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextData {
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => void;
  signOut: () => void;
  user: UserProps;
}
