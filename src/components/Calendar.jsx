import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <Box w="85%" mt="30px">
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
          <ModalBody></ModalBody>
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
  );
};

export default CalendarComponent;
