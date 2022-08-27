import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import {BiDotsVerticalRounded } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { deleteChannels, getChannels } from '../redux/Appreducer/action'
export const Channeldelete = ({ id }) => {
  
  const dispatch=useDispatch()
  const handleDelete = (id) => {
      
    dispatch(deleteChannels(id)).then((res) => {
      console.log(res, 'response')
      if (res.type == "DELETE_CHANNELS_SUCCESS") {
        dispatch(getChannels()).then(() => {
          
        })
      }
    })
    }

  return (
      <Box>
          <Menu>
  <MenuButton
  
    aria-label='Options'
   
    variant='outline'
  >

<Icon h={19} w={19}    as={BiDotsVerticalRounded } />
  </MenuButton>
  <MenuList>
    <MenuItem >
      Refresh Channel
    </MenuItem>
    <MenuItem  onClick={()=>handleDelete(id)} >
      Remove channel
    </MenuItem>
   
  </MenuList>
</Menu>
   </Box>
  )
}
