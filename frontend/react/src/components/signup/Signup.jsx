import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Flex, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";
import CreateCustomerForm from "../shared/CreateCustomerForm.jsx";
import { AiFillCodeSandboxSquare } from "react-icons/ai";

const Signup = () => {
    const { customer, setCustomerFromToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (customer) {
            navigate("/dashboard/customers");
        }
    })

    return (
        <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
            <Flex p={8} flex={1} alignItems={'center'} justifyContent={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Flex alignItems="flex-end" mb={1}>
                    <AiFillCodeSandboxSquare size="60" color="#FF5733" />
                    <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold" ml={2} color="black">
                        ClientTrack
                    </Text>
                    </Flex>
                    <Heading fontSize={'2xl'} mb={15} textColor={"gray.600"}>Register for an account</Heading>
                    <CreateCustomerForm onSuccess={(token) => {
                        localStorage.setItem("access_token", token)
                        setCustomerFromToken()
                        navigate("/dashboard");
                    }}/>
                    <Link color={"blue.500"} href={"/"}>
                        Have an account? Login now.
                    </Link>
                </Stack>
            </Flex>
            <Flex
                flex={1}
                p={10}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                bgGradient={{sm: 'linear(to-r, blue.600, purple.600)'}}
            >
                <Text fontSize={"2xl"} color={'white'} fontWeight={"bold"} mb={5}>
                    <Link target={"_blank"} href={"https://github.com/thomaslui003/SpringBoot-Webapp-with-S3-Image-Uploader"}>
                        Link to Github!!
                    </Link>
                </Text>
                <Image
                    alt={'Login Image'}
                    objectFit={'scale-down'}
                    src={
                        'https://github.com/thomaslui003/Project-Images/blob/main/webAppScreenShot.png?raw=true'
                    }
                />
            </Flex>
        </Stack>
    );
}

export default Signup;