import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {Box, Text, FormControl, FormLabel, Input, Button  } from "@chakra-ui/react";
import { useState } from "react";

const Settings = () => {

    const [client, setClient] = useState({ name: "", age: "", email: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your update logic here
        console.log(client);
    };

    return (
        <SidebarWithHeader>
            
            
            <Text fontSize="3xl" mb={'3'}>Settings</Text>

            <Box 
                maxW="sm" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                p={4} 
                boxShadow="md"
                backgroundColor={"white"}
            >
                <Text fontSize="2xl" mb={4}>Client Information</Text>
                <Box as="form" onSubmit={handleSubmit}>
                <FormControl mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" value={client.name} onChange={handleInputChange} />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel>Age</FormLabel>
                    <Input name="age" value={client.age} onChange={handleInputChange} />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input name="email" value={client.email} onChange={handleInputChange} />
                </FormControl>

                <Button type="submit" colorScheme="blue" mt={4}>Save</Button>
                </Box>
            </Box>
        </SidebarWithHeader>
    );
};

export default Settings;