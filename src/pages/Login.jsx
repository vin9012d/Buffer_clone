import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../redux/Authreducer/action';
import { USER_LOGIN_SUCCESS } from '../redux/Authreducer/actiontype';
import { Box, Heading, Input, Button, Text } from "@chakra-ui/react"
import Login1 from "../Robin_img/Login1.jpg"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Login = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [showAlert, setShowAlert] = useState(false)
  const comingfrom = location.state?.from?.pathname || "/"
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email == "eve.holt@reqres.in") {
      if (email && password) {
        dispatch(login({ email, password }))
          .then((r) => {
            if (r.type === USER_LOGIN_SUCCESS) {

              // navigate(comingfrom,{replace:true})
              navigate("/publishing")

            }
          })
      }
    }
    else {
      setShowAlert(true)
    }
  };
  return (
    <>
    {showAlert && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>Login with this Email id:</AlertDescription>
          <AlertTitle>&nbsp;&nbsp;&nbsp;eve.holt@reqres.in</AlertTitle>
        </Alert>
      )}
    <Box display="flex" width={"100%"}>
      <Box width={{ base: '100%', md: '50%', xl: '33%' }} overflowY="scroll" paddingLeft={"4%"} paddingRight="4%">
        <img style={{ marginTop: "6vh", width: "35%" }} src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="" />
        <Heading mt="6vh" color={"rgba(71,71,71,255)"}>Log in</Heading>
        <Heading color={"rgba(71,71,71,255)"} mt="5vh" fontSize="15px">Email Address</Heading>
        <Input mt="2vh" type={"email"} height="7vh"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Heading color={"rgba(71,71,71,255)"} mt="5vh" fontSize="15px">Password</Heading>
        <Input mt="2vh" height="7vh"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit} mt="5vh" backgroundColor={"rgb(44,75,255)"} color="white" width={"100%"} height="7vh">Log In</Button>
        <Box display="flex" justifyContent={"space-between"} alignItems="center">
          <Heading color={"grey"} mt="5vh" fontSize="15px">Create an account</Heading>
          <Heading color={"grey"} mt="5vh" fontSize="15px">Forgot your password?</Heading>
        </Box>
        <Text mt="7vh" fontSize="14px" textAlign={"center"}>
          We no longer support social sign on. Please click here to set your password and access your account.
        </Text>
        <Box display="flex" justifyContent={"center"} alignItems="center">
          <Heading color={"grey"} mt="6vh" fontSize="13px">Terms of Service&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Security</Heading>

        </Box>
      </Box>
      <Box width={{ base: '0%', md: '50%', xl: '67%' }}><img style={{ width: "100%", height: "100vh" }} border="1px solid black" src={Login1} alt="" /></Box>
    </Box> 
    </>
  )
};

export { Login }