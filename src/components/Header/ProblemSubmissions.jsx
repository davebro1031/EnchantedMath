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
                        initialValues={{ user_email: '', title: '', problem: '', solution: '' }}
                        validate={values => {
                            const errors = {};
                            if (values.user_email && !values.user_email.includes('@')) errors.user_email = 'Invalid email address';
                            if (!values.title) errors.title = 'Please suggest a title';
                            if (!values.problem) errors.problem = 'Cannot be blank';
                            if (!values.solution) errors.solution = 'Please write a solution or provide a link to one'
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {

                                emailjs.sendForm('service_irjoalo', 'template_sx6vf8m', form.current, 'rdWXGwjeVqsj8OSlm')
                                .then((result) => {
                                        toast({
                                            title: 'Message sent',
                                            description: 'Thank you for your submission!',
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
                                onClose()
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

                                    <Field name='title' >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.title && form.touched.title} >
                                                <FormLabel>Title</FormLabel>
                                                <Input {...field} focusBorderColor='teal.500' />
                                                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='problem' >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.problem && form.touched.problem} mt={4}>
                                                <FormLabel>Problem</FormLabel>
                                                <Textarea {...field} resize='vertical' focusBorderColor='teal.500' />
                                                <FormErrorMessage>{form.errors.problem}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='solution' >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.solution && form.touched.solution} mt={4}>
                                                <FormLabel>Solution</FormLabel>
                                                <Textarea {...field} resize='vertical' focusBorderColor='teal.500' />
                                                <FormErrorMessage>{form.errors.solution}</FormErrorMessage>
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