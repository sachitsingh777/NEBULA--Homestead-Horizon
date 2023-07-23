import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PrivateRoute from "../component/PrivateRoute";
const hostData = JSON.parse(localStorage.getItem("host"))||"";
const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [isGuest, setIsGuest] = useState(true); // Assume the user is a guest initially
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    property_id: null,
    host_id: hostData.host_id,
    check_in: "",
    check_out: "",
    total_price: 0,
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`https://homestead3.onrender.com/properties/allproperties`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const propertiesData = await response.json();
      console.log(propertiesData);
      setProperties(propertiesData);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleBookingButtonClick = (property_id) => {
    // Set the property_id and open the modal
    setBookingDetails({ ...bookingDetails, property_id, host_id: hostData.host_id });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Clear the booking details when the modal is closed
    setBookingDetails({
      ...bookingDetails,
      property_id: null,
      check_in: "",
      check_out: "",
      total_price: 0,
    });
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await fetch("https://homestead3.onrender.com/booking/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      // Booking successful, close the modal and show a success message
      setIsModalOpen(false);
      alert("Booking created successfully!");
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <Box m="4%">
      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {properties.map((property) => (
          <Box key={property.id} w="full">
            <Image
              h="337px"
              w="full"
              borderRadius="12px"
              mb="10px"
              src={`${property.image}`} // Assuming your images are stored in the "public/images" folder
              alt="A house"
              fontSize="16px"
              objectFit="cover"
            />
            <Stack spacing="0">
              <Flex justifyContent="space-between">
                <Heading
                  as="h2"
                  fontWeight="bold"
                  color="black"
                  fontSize="16px"
                  isTruncated
                >
                  {property.property_type}
                </Heading>
                <Text as="span" color="black" ml="4">
                  ${property.price}/night
                </Text>
              </Flex>

              <Flex justifyContent="space-between">
                <Text as="span" color="black">
                  {property.location} kilometers away
                </Text>
                <Text as="span" color="black">
                  {property.date}
                </Text>
              </Flex>
            </Stack>

            {/* Add Booking button for guests */}
            {isGuest && (
             
              <Button
                colorScheme="blue"
                mt="2"
                onClick={() => handleBookingButtonClick(property.id)}
              >
                Book Now
              </Button>
            )}
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal for Booking Details */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Booking Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Check-in</FormLabel>
              <Input
                type="date"
                value={bookingDetails.check_in}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, check_in: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Check-out</FormLabel>
              <Input
                type="date"
                value={bookingDetails.check_out}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, check_out: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Total Price</FormLabel>
              <Input
                type="number"
                value={bookingDetails.total_price}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, total_price: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Close
            </Button>
           <PrivateRoute> <Button colorScheme="green" onClick={handleBookingSubmit}>
              Submit Booking
            </Button></PrivateRoute>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AllProperties;
