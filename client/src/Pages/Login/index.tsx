import { FC, useEffect } from "react";

import { useLogin } from "../../Hooks/useLogin";
import { useAuth } from "../../Context/AuthContext/context";

import { Button, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import "./styles.scss";

const LoginPage: FC = () => {
  const { email, password, token, show, handleShowButton, isDisabled, validateEmail, validatePassword, loading, getData } = useLogin();
  const { changeLocalStoreToken } = useAuth();

  useEffect(() => {
    if (token) {
      changeLocalStoreToken("update", token);
    }
  }, [token]);

  return (
    <>
      <div className="easyedit-login">
        <div className="easyedit-login--container">
          <Heading as="h2" size="md">
            Authorization
          </Heading>
          <div className="easyedit-login--container__form">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdOutlineMailOutline} />
              </InputLeftElement>
              <Input
                isInvalid={email === undefined}
                type="email"
                name="email"
                placeholder="Enter email"
                onBlur={(e) => validateEmail(e.currentTarget.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftElement>
                <Icon as={FaKey} />
              </InputLeftElement>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                isInvalid={password === undefined}
                onBlur={(e) => validatePassword(e.currentTarget.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowButton}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button isLoading={loading} onClick={getData} isDisabled={isDisabled}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
