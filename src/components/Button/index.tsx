import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isDisable = false }: IButtonProps) => {
  return <>
    {isDisable ?
      <ButtonContainer onClick={onClick} type="button">{title}</ButtonContainer> : 
      <ButtonContainer onClick={onClick} disabled type="button">{title}</ButtonContainer>
    }
  </>
};

export default Button;
