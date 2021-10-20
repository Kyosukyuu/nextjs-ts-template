import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="blue" type="button">
      {children}
    </ChakraButton>
  );
};

export default Button;
