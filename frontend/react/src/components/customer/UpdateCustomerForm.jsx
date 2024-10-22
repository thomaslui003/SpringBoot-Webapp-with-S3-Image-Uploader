import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, Avatar, Box, Button, FormLabel, Input, Select, Stack, VStack} from "@chakra-ui/react";
import {customerProfilePictureURL, saveCustomer, updateCustomer, uploadCustomerProfilePicture} from "../../services/client.js";
import {successNotification, errorNotification} from "../../services/notification.js";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Image } from "@chakra-ui/react";


const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert className="error" status={"error"} mt={2}>
                    <AlertIcon/>
                    {meta.error}
                </Alert>
            ) : null}
        </Box>
    );
};

const MyDropzone = ({customerId, fetchCustomers}) => {
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      const formData = new FormData();
      formData.append("file", acceptedFiles[0])

      uploadCustomerProfilePicture(
        customerId,
        formData).then(()=> {
            successNotification("Success","Profile image uploaded")
            fetchCustomers();
        }).catch(()=> {
            errorNotification("Error","Upload failed: Ensure your profile image is a JPEG or PNG under 1MB")
        })
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <Box {...getRootProps()}
        w = {'100%'}
        textAlign={'center'}
        border={'dashed'}
        borderColor={'gray.300'}
        borderRadius={'3xl'}
        _hover={{ bg: "gray.100" }}
        p={6}
        cursor="pointer"
        rounded={'md'}      
      >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the picture here ...</p> :
            <p>Drag 'n' drop picture here, or click to select picture</p>
        }
      </Box>
    )
  }



// And now we can use these
const UpdateCustomerForm = ({ fetchCustomers, initialValues, customerId }) => {
    return (
        <>
        <VStack spacing={'5'} mb={'5'}>
            <Avatar
            borderRadius={'full'}
            boxSize={'150px'}
            objectFit={'cover'}
            src={customerProfilePictureURL(customerId)} 
            />
            <MyDropzone customerId={customerId}
             fetchCustomers={fetchCustomers}
             />
        </VStack>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Must be 20 characters or less')
                        .required('Required'),
                    age: Yup.number()
                        .min(16, 'Must be at least 16 years of age')
                        .max(100, 'Must be less than 100 years of age')
                        .required(),
                })}
                onSubmit={(updatedCustomer, {setSubmitting}) => {
                    setSubmitting(true);
                    updateCustomer(customerId, updatedCustomer)
                        .then(res => {
                            console.log(res);
                            successNotification(
                                "Customer updated",
                                `${updatedCustomer.name} was successfully updated`
                            )
                            fetchCustomers();
                        }).catch(err => {
                            console.log(err);
                            errorNotification(
                                err.code,
                                err.response.data.message
                            )
                    }).finally(() => {
                         setSubmitting(false);
                    })
                }}
            >
                {({isValid, isSubmitting, dirty}) => (
                    <Form>
                        <Stack spacing={"24px"}>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Type your full name"
                            />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Type your email"
                            />

                            <MyTextInput
                                label="Age"
                                name="age"
                                type="number"
                                placeholder="20"
                            />

                            <Button 
                                bgGradient="linear(to-r, teal.400, blue.500)" 
                                color="gray.200" 
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg'
                                }}
                                size="lg" 
                                borderRadius="full"
                                shadow="xl"
                                disabled={!(isValid && dirty) || isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default UpdateCustomerForm;