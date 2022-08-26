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
export const Channeldelete = () => {
    const handleDelete = (id) => {
  
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
