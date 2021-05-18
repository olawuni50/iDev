import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1,
FormLabel, FormInput, FormButton} from "./SignupElement"

const Signup = () => {
    return (
        <>
            <Container>
        <FormWrap>
            <Icon to="/">iDev</Icon>
            <FormContent>
                <Form action="#">
                   <FormH1> Sign up for new account</FormH1>
                       <FormLabel htmlFor="for">Email</FormLabel>
                       <FormInput type="email" placeholder="@name.com" required/>
                       <FormLabel htmlFor="for">First Name</FormLabel>
                       <FormInput type="text" required/>
                       <FormLabel htmlFor="for">Last Name</FormLabel>
                       <FormInput type="text" required/>
                       <FormLabel htmlFor="for">Password</FormLabel>
                       <FormInput type="password" required/>
                       <FormLabel htmlFor="for">Confirm Password</FormLabel>
                       <FormInput type="password" required/>
                       <FormButton type="submit">Continue</FormButton>
                       
                   
                </Form>
            </FormContent>
        </FormWrap>
            
        </Container>
        </>
    )
}

export default Signup
