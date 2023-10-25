import { Field, Form, Formik } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Select, Box, Textarea } from '@chakra-ui/react'

export default function Feedback() {
    function validateName(value) {
        let error
        if (!value) {
            error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }

    return (
        <Box maxWidth='500px'>
            <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
                {(props) => (
                    <Form>
                        <Field name='name' validate={validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>First name</FormLabel>
                                    <Input {...field} placeholder='name' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        {/* <Field name='user_email' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name} >
                                <FormLabel>Your email (optional)</FormLabel>
                                <Input {...field} placeholder='someone@somewhere.com' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field> */}

                        {/* <Field name='topic' >
                        {({ field, form }) => (
                            <FormControl mt={4} isInvalid={form.errors.name && form.touched.name} isRequired>
                                <FormLabel>Subject</FormLabel>
                                <Select {...field} placeholder='-- select one --'>
                                    <option value="suggested change">Suggest change</option>
                                    <option value="new solution">New solution</option>
                                    <option value="correction">Corrections</option>
                                    <option value="comment">Comments</option>
                                    <option value="miscellaneous">Other</option>
                                </Select>
                            </FormControl>
                        )}
                    </Field> */}

                        {/* <Field name='message' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name} mt={4} isRequired>
                                <FormLabel>Message</FormLabel>
                                <Textarea {...field} placeholder='message' resize='vertical' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field> */}


                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}


