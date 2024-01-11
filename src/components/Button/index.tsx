import { ButtonHTMLAttributes, ComponentType } from "react";

import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  contra?: boolean;
  icon?: ComponentType<{ size?: string; color?: string }>; // Ajuste o tipo conforme necessário
  to?: string;
}

export function Button({
  title,
  loading = false,
  contra = false,
  icon: Icon,
  to,
  ...rest
}: Readonly<ButtonProps>) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (to) navigate(to);
  };

  return (
    <Container
      onClick={handleNavigation}
      type="button"
      disabled={loading}
      $contra={contra}
      {...rest}
    >
      {Icon && <Icon />}
      <p> {title}</p>
    </Container>
  );
}
