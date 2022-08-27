import React, { useState } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import InnerpageModal from "./InnerpageModal";
import { HamburgerIcon } from "@chakra-ui/icons";

const AltNavbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Flex
        border="0.1px solid grey"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        borderRight="none"
        borderTop={"none"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Flex alignItems="center">
          <NavLink to="#">
            <Flex pr="20px" pl="20px" gap="1">
              <Image
                w="18px"
                src="https://static.cdnlogo.com/logos/b/15/buffer.svg"
              />
              <Text fontSize="xl" fontWeight="bold">
                Buffer
              </Text>
            </Flex>
          </NavLink>
          <Flex>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Publishing
                </Text>
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Analytics
                </Text>
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Engagement
                </Text>
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Start Page
                </Text>
              </Box>
            </NavLink>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <NavLink to="#">
            <Flex
              alignItems="center"
              gap="5px"
              color="#2C4BFF"
              p="1.2rem"
              pl="28px"
              pr="28px"
            >
              <FaUserFriends />
              <Text fontWeight="medium" fontSize="md">
                Invite Your Team
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex
              alignItems="center"
              p="1.2rem"
              pl="28px"
              pr="28px"
              color="rgb(99, 99, 99)"
              _hover={{ backgroundColor: "#F5F5F5", color: "#433D3D" }}
              gap="5px"
            >
              <Text fontSize="14px" fontWeight="medium">
                Apps
              </Text>
              <BsCaretDownFill fontSize="12px" />
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex
              alignItems="center"
              p="1.2rem"
              pl="28px"
              pr="28px"
              color="rgb(99, 99, 99)"
              _hover={{ backgroundColor: "#F5F5F5", color: "#433D3D" }}
              gap="5px"
            >
              <Text fontSize="14px" fontWeight="medium">
                Help
              </Text>
              <BsCaretDownFill fontSize="12px" />
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex
              alignItems="center"
              p="1.2rem"
              pl="28px"
              pr="28px"
              gap="10px"
              _hover={{ backgroundColor: "#F5F5F5" }}
            >
              <Text color="#D5C4BA">soumyanil22@gmail.com</Text>
              <FaUserCircle
                icon="fa-duotone"
                size="26px"
                color="#121E66"
                swapOpacity
              />
            </Flex>
          </NavLink>
          <HamburgerIcon fontSize={30} display={["block", "block", "block", "none", "none"]} onClick={() => { setShowModal(true) }} />
        </Flex>
        {
          showModal ? <InnerpageModal /> : ""
        }
      </Flex>
    </>
  );
};

export default AltNavbar;
