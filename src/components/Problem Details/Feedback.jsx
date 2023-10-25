import { Field, Form, Formik } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Select, Box, Textarea } from '@chakra-ui/react'

export default function Feedback({ id, title }) {

    return (
        <Box maxWidth='500px'>
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
                        // Make a copy of the form data
                        const data = {}
                        for (let key of Object.keys(values)) {
                            data[key] = values[key]
                        }

                        // update the email data if needed
                        !data.user_email && (data.user_email = "anonymous")

                        // pass in the problem id as well
                        data.id = id

                        console.log(data)
                        setSubmitting(false)
                    }, 1000)
                }}
            >
                {(props) => (
                    <Form>
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
                                        <option value="miscellaneous">Other</option>
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
        </Box >
    )
}


