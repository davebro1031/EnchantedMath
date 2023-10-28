import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Select,
    Textarea,
    useToast
} from "@chakra-ui/react"
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


export default function ProblemSubmissions({ isOpen, onClose }) {
    const form = useRef()
    const toast = useToast()
    return (
        <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Submit a new problem
                    </AlertDialogHeader>

                    <Formik
                        initialValues={{ user_email: '', topic: '', message: '' }}
                        validate={values => {
                            const errors = {};
                            if (values.user_email && !values.user_email.includes('@')) errors.user_email = 'Invalid email address';
                            if (!values.topic || values.topic === "-- select one --") errors.topic = 'Select a topic';
                            if (!values.message) errors.message = 'Cannot be blank'
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {

                                emailjs.sendForm('service_1k8zvyk', 'template_rnm6u4q', form.current, '3JjiwyeBApVMWrxjU')
                                    .then((result) => {
                                        toast({
                                            title: 'Message sent',
                                            description: 'Thank you for your feedback!',
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true
                                        })
                                    }, (error) => {
                                        console.error(error)
                                        toast({
                                            title: 'Error',
                                            description: 'Something went wrong :(',
                                            status: 'error',
                                            duration: 3000,
                                            isClosable: true
                                        })
                                    });


                                setSubmitting(false)
                                values.user_email = ""
                                values.topic = "-- select one --"
                                values.message = ""
                            }, 1000)

                        }}
                    >
                        {(props) => (
                            <Form ref={form}>
                                <AlertDialogBody>
                                    <Field name='user_email' >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.user_email && form.touched.user_email} >
                                                <FormLabel>Your email (optional)</FormLabel>
                                                <Input {...field} placeholder='someone@somewhere.com' focusBorderColor='teal.500' />
                                                <FormErrorMessage>{form.errors.user_email}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='topic' >
                                        {({ field, form }) => (
                                            <FormControl mt={4} isInvalid={form.errors.topic && form.touched.topic}>
                                                <FormLabel>Subject</FormLabel>
                                                <Select {...field} placeholder='-- select one --'>
                                                    <option value="suggested change">Suggest change</option>
                                                    <option value="new solution">New solution</option>
                                                    <option value="correction">Corrections</option>
                                                    <option value="comment">Comments</option>
                                                    <option value="other feedback">Other</option>
                                                </Select>
                                                <FormErrorMessage>{form.errors.topic}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='message' >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.message && form.touched.message} mt={4}>
                                                <FormLabel>Message</FormLabel>
                                                <Textarea {...field} placeholder='message' resize='vertical' focusBorderColor='teal.500' />
                                                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button onClick={onClose}>
                                        Cancel
                                    </Button>

                                    <Button
                                        ml={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                    >
                                        Submit
                                    </Button>

                                </AlertDialogFooter>

                            </Form>
                        )}
                    </Formik>

                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>

    )
}