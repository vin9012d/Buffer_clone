import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input,
    Text,
    Select,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
export function ChannelModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData]=useState({page:"Facebook",id:""})
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleData = (e) => {
        const { name, value } = e.target;
        console.log(value,'value')
        console.log(data)
        setData({...data,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    


    return (
      <>
        <Text  cursor="pointer" color="blue.500" as="b" mt='12px'  onClick={onOpen}>Connect</Text>
     
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
                <ModalOverlay />
            
                
                <ModalContent>
                <form onSubmit={handleSubmit}> 
            <ModalHeader>Connect your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                       
         <Select onChange={handleData} placeholder='Select option' defaultValue={data.page} name="page">
      <option value='Instagram'>Instagram</option>
      <option value='Facebook'>Facebook</option>
       <option value='Twitter'>Twitter</option>
       <option value='Shopify'>Shopify</option>
       <option value='Pinterest'>Pinterest</option>
                            </Select>
                            
                            <Input type="text" placeholder='enter your account id'
                            name="id" value={data.id}     onChange={handleData} mt="15px" />
        
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type="submit" >
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                        </form>
          </ModalContent>
        </Modal>
      </>
    )
  }