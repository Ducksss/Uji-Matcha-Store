import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";

// imports
import axios from "axios";
import * as Yup from "yup";
import config from "../Config.js";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Formik, Form, Field, ErrorMessage } from "formik";

// styling 
import tw, { css } from "twin.macro";
import styled from "styled-components";

// icons
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Your user name must be 8 characters long")
    .required("Please enter your username!"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Please enter your email address!"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Please enter you password!"),
  contact: Yup.string()
    .required("Please enter your contact number!"),
  address: Yup.string()
    .required("Please enter your address!"),
});

export default function Signup() {
  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Sign Up For Treact";
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com"
    }
  ];
  const submitButtonText = "Sign Up";
  const SubmitButtonIcon = SignUpIcon;
  const tosUrl = "#";
  const privacyPolicyUrl = "#";
  const signInUrl = "http://localhost:3004/login";

  // Team's Defined Variables
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const registerUserInformation = (values) => {
    axios
      .post(`${config.baseUrl}/u/user/create-account`, {
        email: values.email,
        username: values.username,
        password: values.password,
        contact: values.contact,
        address: values.address
      })
      .then((results) => {
        history.push({
          pathname: "/login",
          state: "success"
        });
      })
      .catch((error) => {
        if (error.response.data.description === "Invalid Credentials.") {
          console.log("Please key in a your valid credentials")
        }

        if (error.response.data.description === "Internal error") {
          console.log("Please contact an administrator for help!")
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
                {/* <SocialButtonsContainer>
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
                  <DividerText>Or Sign up with your e-mail</DividerText>
                </DividerTextContainer> */}
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    registerUserInformation(values);
                  }}
                >
                  {
                    ({ touched, errors, values }) =>
                      !isSubmitted ? (
                        <Form css={[tw`mx-auto max-w-xs`]} >
                          {/* <Input type="email" placeholder="Email" />
                          <Input type="password" placeholder="Password" /> */}
                          <div className="form-group" style={{ marginTop: "1.25rem" }}>
                            <Field
                              type="text"
                              name="username"
                              placeholder="Enter username"
                              autocomplete="off"
                              css={[tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`]}
                              className={`mt-2 form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                            />
                            <ErrorMessage
                              component="div"
                              name="username"
                              className="invalid-feedback"
                              style={{ color: "red", fontSize: '0.8rem' }}
                            />
                          </div>

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

                          <div className="form-group" style={{ marginTop: "1.25rem" }}>
                            <Field
                              type="text"
                              name="contact"
                              placeholder="Enter contact number"
                              autocomplete="off"
                              css={[tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`]}
                              className={`mt-2 form-control ${touched.contact && errors.contact
                                ? "is-invalid"
                                : ""
                                }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="contact"
                              className="invalid-feedback"
                              style={{ color: "red", fontSize: '0.8rem' }}
                            />
                          </div>

                          <div className="form-group" style={{ marginTop: "1.25rem" }}>
                            <Field
                              type="text"
                              name="address"
                              placeholder="Enter address information"
                              autocomplete="off"
                              css={[tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`]}
                              className={`mt-2 form-control ${touched.address && errors.address
                                ? "is-invalid"
                                : ""
                                }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="address"
                              className="invalid-feedback"
                              style={{ color: "red", fontSize: '0.8rem' }}
                            />
                          </div>

                          <SubmitButton type="submit">
                            <SubmitButtonIcon className="icon" />
                            <span className="text">{submitButtonText}</span>
                          </SubmitButton>

                          <p tw="mt-6 text-xs text-gray-600 text-center">
                            I agree to abide by treact's{" "}
                            <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                              Terms of Service
                            </a>{" "}
                            and its{" "}
                            <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                              Privacy Policy
                            </a>
                          </p>

                          <p tw="mt-8 text-sm text-gray-600 text-center">
                            Already have an account?{" "}
                            <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                              Sign In
                            </a>
                          </p>
                        </Form>
                      ) : (
                        <div css={[tw`text-center`]} >
                          <ClipLoader loading={isSubmitted} css={{ display: "block", margin: "0 auto", borderColor: "red" }} size={150} />
                          <p>Processing your information...</p>
                        </div>
                      )
                  }
                </Formik>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
}