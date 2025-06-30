import { Container, ContainerProps } from "@chakra-ui/react";

export default function MyContainer({ children, ...props }: ContainerProps) {
  return (
    <Container {...props} maxW={"5xl"} px={{ base: 4, md: 8 }} mx={"auto"}>
      {children}
    </Container>
  );
}
