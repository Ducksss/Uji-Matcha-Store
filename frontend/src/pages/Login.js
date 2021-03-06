import React, { useState } from "react";
import tw, { css } from "twin.macro";
import { Container as ContainerBase } from "components/misc/Layouts";

// imports
import axios from "axios";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import config from "../Config.js";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toast, swalWithBootstrapButtons } from '../shared/swal';

// styling
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// icons
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import illustration from "images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

// const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Please enter your email address!"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Please enter you password!"),
});

export default function Login() {
  // Pre Defined Variables
  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Sign In To Treact";
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com"
    }
  ];
  const submitButtonText = "Sign In";
  const SubmitButtonIcon = LoginIcon;
  const forgotPasswordUrl = "#";
  const signupUrl = "http://localhost:3004/register";

  // Team's Defined Variables
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const validateLogininformation = (values) => {
    // Insert spinner into here in the future!
    setIsSubmitted(true);

    axios
      .post(`${config.baseUrl}/u/user/signin`, {
        email: values.email,
        password: values.password,
      })
      .then((results) => {
        localStorage.setItem('token', results.data.token);
        localStorage.setItem('displayName', results.data.displayName);

        history.push({
          pathname: "/",
        });
      })
      .catch((error) => {
        if (error.response.data.description === "Login failed.") {
          Toast.fire({
            icon: 'error',
            title: `Please key in a your valid credentials.`
          })
        }

        if (error.response.data.description === "Internal error") {
          Toast.fire({
            icon: 'error',
            title: `Please contact an administrator for help!`
          })
        }
      })
      .finally(() => {
        setIsSubmitted(false);
      })
  }

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer css={[tw.form`mx-auto max-w-xs`]}>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>Or Sign in with your e-mail</DividerText>
                </DividerTextContainer>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    validateLogininformation(values);
                  }}
                >
                  {
                    ({ touched, errors, values }) =>
                      !isSubmitted ? (
                        <div>
                          <Form css={[tw`mx-auto max-w-xs`]} >
                            {/* <Input type="email" placeholder="Email" />
                          <Input type="password" placeholder="Password" /> */}

                            <div className="form-group" style={{ marginTop: "1.25rem" }}>
                              <Field
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                autocomplete="off"
                                css={[tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`]}
                                className={`mt-2 form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                              />
                              <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                                style={{ color: "red", fontSize: '0.8rem' }}
                              />
                            </div>

                            <div className="form-group" style={{ marginTop: "1.25rem" }}>
                              <Field
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                autocomplete="off"
                                css={[tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`]}
                                className={`mt-2 form-control ${touched.password && errors.password
                                  ? "is-invalid"
                                  : ""
                                  }`}
                              />

                              <ErrorMessage
                                component="div"
                                name="password"
                                className="invalid-feedback"
                                style={{ color: "red", fontSize: '0.8rem' }}
                              />
                            </div>
                            <SubmitButton type="submit">
                              <SubmitButtonIcon className="icon" />
                              <span className="text">{submitButtonText}</span>
                            </SubmitButton>
                          </Form>
                        </div>
                      ) : (
                        <div css={[tw`text-center`]} >
                          <ClipLoader loading={isSubmitted} css={{ display: "block", margin: "0 auto", borderColor: "red" }} size={150} />
                          <p>Processing your information...</p>
                        </div>
                      )
                  }
                </Formik>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                    Forgot Password ?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container >
    </AnimationRevealPage >
  )
};