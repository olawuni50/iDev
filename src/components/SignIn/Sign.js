import React from 'react'
import { Container, Form, FormContent, FormH1, FormInput, FormLabel,
 FormWrap, Icon, FormButton,
Text, Text2, FormButton2, FormButtonWrap } from './SignElement'

const Sign = () => {
    return (

    <Container>
        <FormWrap>
            <Icon to="/">iDev</Icon>
            <FormContent>
                <Form action="#">
                   <FormH1> Sign in to your account</FormH1>
                       <FormLabel htmlFor="for">Email</FormLabel>
                       <FormInput type="email" required/>
                       <FormLabel htmlFor="for">Password</FormLabel>
                       <FormInput type="password" required/>
                       <FormButton type="submit">Continue</FormButton>
                       <Text>Forgot password?</Text>
                       <Text2>OR</Text2>
                       <FormButtonWrap>
                       <FormButton2 type="submit" to="/sign-up">Sign Up</FormButton2>
                       </FormButtonWrap>
                   
                </Form>
            </FormContent>
        </FormWrap>
            
        </Container>
    )
}

export default Sign
