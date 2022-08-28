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
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React, { useDebugValue, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChannels, getChannels } from '../redux/Appreducer/action'
export function ChannelModal() {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState({ page: "Facebook", ids: "" })
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...data,
      logo: "https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715?b=1&k=20&m=1314037715&s=170667a&w=0&h=vFoSrBkotNvWgwfQz013ZuLzGw0aWJfLeMkCPTuAxQY="
    }
    dispatch(addChannels(payload)).then((res) => {
      if (res.type === "ADD_CHANNELS_SUCCESS") {



        alert("Channel added successfull")

        dispatch(getChannels())
      
      }
    })

  }



  return (
    <>
      <Text cursor="pointer" color="blue.500" as="b" mt='12px' onClick={onOpen}>Connect</Text>


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
                name="ids" onChange={handleData} mt="15px" />

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