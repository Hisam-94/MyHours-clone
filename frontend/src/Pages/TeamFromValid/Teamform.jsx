import React from 'react'
import {
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    Accordion,
    InputGroup,
    InputLeftAddon,
    Box,
    Text,
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Checkbox,
    Progress,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    // Tooltip,
    Flex
} from '@chakra-ui/react';

import CSSReset from "@chakra-ui/css-reset";
import { Form, Field, useField, useForm } from "react-final-form";
import validate from "./validate";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ! ON-SUBMIT :
const onSubmit = async (values) => {
    await sleep(300);
    console.log("ANS" , values)
    window.alert(JSON.stringify(values, 0, 2));
};

const Teamform = () => (
<>
   <Box display='flex'>
   <Box w='20%' bg='green'>
            <h1>SIDEBAR</h1>
    </Box>

   
    <CSSReset />
    
    <Box
        w={'80%'} pl={'5%'} pr={'15%'} m="20px auto">
        <Heading as="h1" m={4} size="xl" textAlign="left">
            Add Team Member
        </Heading>

        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({
                handleSubmit,
                form,
                errors,
                submitting,
                pristine,
                values
            }) => (
                <Box
                    as="form"
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
                    onSubmit={handleSubmit}
                >

                
                    <InputControl name="name" type="text" label="NAME :" placeholder="Enter name here" />

                    <InputControl name="email" type="email" label="Email :" placeholder="Enter email here" />

                    <TextareaControl name="notes" label="NOTES (PRIVATE TO ADMINS) :" placeholder="Add notes..." />



                    <Field
                        name="favoriteColor"
                        component={AdaptedRadioGroup}
                        label="Role :"
                    >
                        <Stack>
                        <Radio value="admin" color="red">
                            <Stack
                                direction="row"
                                gap={10}
                                h="70"
                                border="1px solid lightGray"
                                rounded="5"
                            >

                                <Flex direction="column">
                                    <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
                                        Admin
                                    </Box>
                                    <Box pl="10" color="gray">
                                        <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} >Can view and edit anything in group or workspace.</Text>
                                    </Box>
                                </Flex>
                            </Stack>

                        </Radio>
                        <Radio value="manager" color="green">
                            <Stack
                                direction="row"
                                gap={10}
                                h="70"
                                border="1px solid lightGray"
                                rounded="5"
                            >

                                <Flex direction="column">
                                    <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
                                        Manager
                                    </Box>
                                    <Box pl="10" color="gray">
                                    <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} >Can view and manage assigned projects. Cannot view other projects.</Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Radio>
                        <Radio value="normal" color="blue">
                            <Stack
                                direction="row"
                                gap={10}
                                h="70"
                                border="1px solid lightGray"
                                rounded="5"
                            >

                                <Flex direction="column">
                                    <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
                                        Normal
                                    </Box>
                                    <Box pl="10" color="gray">
                                    <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} > Can only track time on assigned projects/tasks.</Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Radio>
                        </Stack>

                    </Field>

                    <CheckboxControl   textAlign='center' name="agree">Automatically add this member to all new projects </CheckboxControl>

                    <hr />

                    <Accordion allowMultiple mt="30">
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="500"
                                        color="gray.500"
                                        fontSize="xl"
                                    >
                                        Labour Rate
                                        <AccordionIcon />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Enter default hourly rate for the team member to calculate Labor
                                cost. This rate can be further specified on individual projects.

                                <InputGroup mt="5">
                                    <InputLeftAddon h="10" mt='6' children="INR" />
                                    <InputControl
                                        size="sm"
                                        type="number"
                                        placeholder="Enter laber rate here"
                                        name="laborRate"
                                    />
                                </InputGroup>
                            </AccordionPanel>


                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="500"
                                        color="gray.500"
                                        fontSize="xl"
                                    >
                                        Billable Rate
                                        <AccordionIcon />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Enter default billable rate for the team member to calculate
                                Billable cost. This rate can be further specified on individual
                                projects.
                                <InputGroup mt="5">
                                    <InputLeftAddon h="10" mt='6' children="INR" />
                                    <InputControl
                                        size="sm"
                                        type="number"
                                        placeholder="Enter billing rate here"
                                        name="billlingRate"
                                    />
                                </InputGroup>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <PercentComplete size="sm" my={4} hasStripe isAnimated />

                        

                    <ButtonGroup spacing={4}>
                        <Button
                            isLoading={submitting}
                            loadingText="Submitting"
                            variantColor="teal"
                            type="submit"
                        >
                            Submit
                        </Button>
                        <Button
                            variantColor="teal"
                            variant="outline"
                            onClick={form.reset}
                            isDisabled={submitting || pristine}
                        >
                            Reset
                        </Button>
                    </ButtonGroup>


                    <Box as="pre" my={10}>
                       New Team member data = {JSON.stringify(values, 0, 2)}
                    </Box>
                </Box>
            )}
        />

    </Box>
   
   </Box>
</>

)


const AdaptedTextarea = ({ input, meta, ...rest }) => (
    <Textarea {...input} {...rest} isInvalid={meta.error && meta.touched} />
);

const CheckboxControl = ({ name, value, children }) => {
    const {
        input: { checked, ...input },
        meta: { error, touched, invalid }
    } = useField(name, {
        type: "checkbox" // important for RFF to manage the checked prop
    });
    return (
        <FormControl isInvalid={touched && invalid} my={4}>
            <Checkbox {...input} isInvalid={touched && invalid} my={4}>
                {children}
            </Checkbox>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};


const AdaptedRadioGroup = ({ input, meta, label, children }) => (
    <FormControl isInvalid={meta.touched && meta.invalid} my={4}>
        <FormLabel htmlFor={input.name}>{label}</FormLabel>
        <RadioGroup {...input}>{children}</RadioGroup>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
        <h1>{console.log("Input", input, "Meta", meta, "Children", children)}</h1>
    </FormControl>
);

const Control = ({ name, ...rest }) => {
    const {
        meta: { error, touched }
    } = useField(name, { subscription: { touched: true, error: true } });
    return <FormControl {...rest} isInvalid={error && touched} />;
};

const Error = ({ name }) => {
    const {
        meta: { error }
    } = useField(name, { subscription: { error: true } });
    return <FormErrorMessage>{error}</FormErrorMessage>;
};

const InputControl = ({ name, label, placeholder, type }) => {
    const { input, meta } = useField(name);
    return (
        <Control name={name} my={4}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                {...input}
                isInvalid={meta.error && meta.touched}
                id={name}
                type={type}
                placeholder={placeholder}
            />
            <Error name={name} />
        </Control>
    );
};

const TextareaControl = ({ name, label, placeholder }) => (
    <Control name={name} my={4}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Field
            name={name}

            component={AdaptedTextarea}
            placeholder={placeholder}
            id={name}
        />
        <Error name={name} />
    </Control>
);

const PercentComplete = (props) => {
    const form = useForm();
    const numFields = form.getRegisteredFields().length;
    const numErrors = Object.keys(form.getState().errors).length;
    return (
        <Progress
            value={numFields === 0 ? 0 : ((numFields - numErrors) / numFields) * 100}
            {...props}
        />
    );
};


export default Teamform
