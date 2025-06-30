import { Flex } from "@chakra-ui/react";
import MyContainer from "./ui/container";

export default function Navbar() {
  return (
    <MyContainer>
      <MobileNavbar />
      <DesktopNavbar />
    </MyContainer>
  );
}

const MobileNavbar = () => {
  return (
    <Flex
      hideFrom={"lg"}
      borderWidth={"1"}
      borderColor={"gray.subtle"}
      borderRadius={"md"}
      bg={"bg"}
      py={"6"}
      px={"3"}
    >
      MObile Navbar
    </Flex>
  );
};
const DesktopNavbar = () => {
  return <Flex hideBelow={"lg"}>Desktop Navbar</Flex>;
};
