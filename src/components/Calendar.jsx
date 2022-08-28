import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { FaUserCircle } from "react-icons/fa";
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const locales = {
  "en-In": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 9, 26),
    end: new Date(2022, 9, 26),
  },
  {
    title: "Vacation",
    start: new Date(2022, 12, 25),
    end: new Date(2023, 1, 2),
  },
  {
    title: "Conference",
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
];

const CalendarComponent = () => {
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  console.log(allEvents);

  const handleEvent = (value) => {
    setNewEvent({ title: `${value}`, start: new Date(), end: new Date() });
  };

  return (
    <>
      <Box w="82.5%" mt="30px">
        <Button
          variant="solid"
          colorScheme="messenger"
          borderRadius="3px"
          size="md"
          position="absolute"
          right="21%"
          mt="-2px"
          onClick={onOpen}
        >
          Create Post
        </Button>
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader borderBottom="1px solid grey">
              <Flex
                alignItems="center"
                ml="5px"
                mr="5px"
                justifyContent="space-between"
              >
                <Text fontSize="sm">Campaign</Text>
                <Box w="280px">
                  <Select borderRadius="3px" placeholder="No Campaign" />
                </Box>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <FaUserCircle icon="fa-duotone" size="26px" swapOpacity />
              <Textarea
                h="250px"
                mt="10px"
                onChange={(e) => handleEvent(e.target.value)}
                placeholder="What would you like to share?"
              />
            </ModalBody>
            <ModalFooter>
              <Flex gap="10px">
                <Button
                  colorScheme="gray"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    toast({
                      description: "Great! Your draft is saved.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Save as Draft
                </Button>
                <Button
                  colorScheme="blue"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    toast({
                      description:
                        "Great! The post has been added to your queue.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Add to Queue
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "83vh" }}
        />
      </Box>
    </>
  );
};

export default CalendarComponent;
