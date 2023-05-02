import { InputContainer, TextError } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  console.log(errorMessage)
  return (<>
    <InputContainer>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <input {...rest} {...field} />} />

    </InputContainer>
    {errorMessage ? <TextError>{errorMessage}</TextError> : null}
  </>
  );
};

export default Input;
