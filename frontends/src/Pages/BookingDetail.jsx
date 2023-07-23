import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const hostData = JSON.parse(localStorage.getItem("host"));
const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
console.log(hostData)
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/booking/bookings/${hostData.host_id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const bookingsData = await response.json();
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleUpdateButtonClick = (bookingId) => {
    setSelectedBookingId(bookingId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBookingId(null);
  };

  const handleDeleteButtonClick = async (bookingId) => {
    try {
      const response = await fetch(`https://homestead3.onrender.com/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      // Booking deleted successfully, update the bookings list
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Property ID</Th>
            <Th>Check-in</Th>
            <Th>Check-out</Th>
            <Th>Total Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookings.map((booking) => (
            <Tr key={booking.id}>
              <Td>{booking.property_id}</Td>
              <Td>{booking.check_in}</Td>
              <Td>{booking.check_out}</Td>
              <Td>{booking.total_price}</Td>
              <Td>
                <Button colorScheme="blue" mr={2} onClick={() => handleUpdateButtonClick(booking.id)}>
                  Update
                </Button>
                <Button colorScheme="red" onClick={() => handleDeleteButtonClick(booking.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for Update Booking */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Place your form fields here for updating booking details */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Close
            </Button>
            {/* Add a button to submit the updated booking details */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookingDetails;
