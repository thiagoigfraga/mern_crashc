import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

function CreatePage() {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  function handleAddProduct() {
    // Here you would typically send the new product to your backend
    console.log("New Product Added:", newProduct);
    // Reset the form after adding the product
    setNewProduct({ name: "", price: "", image: "" });
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size={"2xl"} textAlign="center" mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={"6"}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <Input
              placeholder="Product Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="purple" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
