import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";

const hostData = JSON.parse(localStorage.getItem("host"))||"";

const PropertyTable = ({ properties, handleUpdate, handleDelete }) => {
  return (
    <Table variant='striped' colorScheme='gray'>
      <Thead>
        <Tr>
          <Th>Property Type</Th>
          <Th>Location</Th>
          <Th>Description</Th>
          <Th>Max Guests</Th>
          <Th>Amenities</Th>
          <Th>Image URL</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {properties.map((property) => (
          <Tr key={property.id}>
            <Td>{property.property_type}</Td>
            <Td>{property.location}</Td>
            <Td>{property.description}</Td>
            <Td>{property.max_guests}</Td>
            <Td>{property.amenities}</Td>
            <Td>
              <Image src={property.image} />
              
              </Td>
            <Td>
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => handleUpdate(property)}
              >
                Update
              </Button>{" "}
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleDelete(property.id)}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Properties = () => {
  const [propertyData, setPropertyData] = useState({
    host_id: hostData.host_id,
    property_type: "",
    location: "",
    description: "",
    max_guests: "",
    amenities: "",
    image: "",
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data from the backend on component mount
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`https://homestead3.onrender.com/properties/hostproperties/64bc11b6add6ad1bd872d404`);
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        console.error("Failed to fetch properties");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://homestead3.onrender.com/properties/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Show success message
        setPropertyData({
          property_type: "",
          location: "",
          description: "",
          max_guests: "",
          amenities: "",
          image: "",
        });
        fetchProperties(); // Fetch updated properties list
      } else {
        console.error("Failed to create property");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = (property) => {
    // Fill the form with property data for updating
    setPropertyData({
      property_type: property.property_type,
      location: property.location,
      description: property.description,
      max_guests: property.max_guests,
      amenities: property.amenities,
      image: property.image,
    });
  };

  const handleDelete = async (propertyId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/properties/properties/${propertyId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Show success message
        fetchProperties(); // Fetch updated properties list after deletion
      } else {
        console.error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Flex >
        <Box w="50%" mx="3%"  p="2%" >
            <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Property Type:</FormLabel>
        <Input
          type="text"
          name="property_type"
          value={propertyData.property_type}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Location:</FormLabel>
        <Input
          type="text"
          name="location"
          value={propertyData.location}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description:</FormLabel>
        <Textarea
          name="description"
          value={propertyData.description}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Max Guests:</FormLabel>
        <Input
          type="number"
          name="max_guests"
          value={propertyData.max_guests}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Amenities:</FormLabel>
        <Input
          type="text"
          name="amenities"
          value={propertyData.amenities}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Image URL:</FormLabel>
        <Input
          type="text"
          name="image"
          value={propertyData.image}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" mt={4}>
        Create Property
      </Button>
    </form>
        </Box>
        <Box w="50%" h="600px" >
        <Flex width="100%" h="500px" >
      <Box width="80%" h="100px">
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/02c12f4a-ec58-4790-bc2e-6b5801f89308.jpg)" h="10rem" w="22rem" borderRadius="4px" mb="0.4rem"></Box>
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/11faece5-adf4-460e-b39d-804112c8879a.jpg)" h="8rem" w="22rem" borderRadius="4px" mb="0.4rem"></Box>
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/9de3e2a5-5a44-48b3-9757-bccc647d990c.jpg)" w="22rem" h="10rem" borderRadius="4px" mb="0.4rem"></Box>
      </Box>
      <Box width="80%" h="100px">
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/e6789ec5-2061-4d69-bd1d-f54e6539fedc.jpg)" height="10rem" borderRadius="4px" mb="0.4rem"></Box>
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/13c9055f-2a70-4ba4-83da-202209d84dbd.jpg)" height="10rem" borderRadius="4px" mb="0.4rem"></Box>
        <Box backgroundSize={"cover"} backgroundImage="url(https://a0.muscache.com/im/pictures/01608353-154e-4821-8a4f-7745490f2899.jpg)" height="10rem" borderRadius="4px" mb="0.4rem"></Box>

      </Box>
    </Flex>
        </Box>
      </Flex>
       
      <div style={{ marginLeft: "20px" }}>
        <PropertyTable
          properties={properties}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Properties;
