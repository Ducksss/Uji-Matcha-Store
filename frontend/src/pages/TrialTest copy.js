import React from 'react';
import { useFormik, FormikProvider, useField, Formik, FastField, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled, { css } from "styled-components";


// styling
import './trial.css'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const usernameSchema = Yup.object({
    username: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .max(20, 'Must be less  than 20 characters')
        .required('Username is required')
        .matches(
            /^[a-zA-Z0-9]+$/,
            'Cannot contain special characters or spaces'
        ),
})

const printInfomation = (info) => {
    console.log(info)
}

export const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px
        3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
        valid &&
        css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px, rgb(177, 247, 160) 0px 0px
            0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
        error &&
        css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px
            0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export const DisplayingErrorMessagesExample = () => (
    <div>
        <h1>Displaying Error Messages</h1>
        <Formik
            initialValues={{
                username: '',
                email: '',
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className={`form-control`}>
                        <Field name="username" />
                        {/* If this field has been touched, and it contains an error, display it
           */}
                        {touched.username && errors.username && <div>{errors.username}</div>}
                        <Field name="email" />
                        {/* If this field has been touched, and it contains an error, display
          it */}
                    </div>
                    {touched.email && errors.email && <div>{errors.email}</div>}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

async function fetchNewTextC(a, b) {
    await new Promise((r) => setTimeout(r, 500));
    return `textA: ${a}, textB: ${b}`;
}

const MyField = (props) => {
    const {
        values: { textA, textB },
        setFieldValue,
    } = useFormikContext();
    const [field, meta] = useField(props);

    React.useEffect(() => {
        let isCurrent = true;
        // your business logic around when to fetch goes here.
        if (textA.trim() !== '' && textB.trim() !== '') {
            fetchNewTextC(textA, textB).then((textC) => {
                if (!!isCurrent) {
                    // prevent setting old values
                    setFieldValue(props.name, textC);
                }
            });
        }
        return () => {
            isCurrent = false;
        };
    }, [textB, textA, setFieldValue, props.name]);

    return (
        <>
            <input {...props} {...field} />
            {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
        </>
    );
};

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);

    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    return (
        <div
            className={`form-control ${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
                }`}
        >
            <div className="flex items-center space-between">
                <label htmlFor={props.id}>{label}</label>{' '}
                {showFeedback ? (
                    <div
                        id={`${props.id}-feedback`}
                        aria-live="polite"
                        className="feedback text-sm"
                    >
                        {meta.error ? meta.error : '✓'}
                    </div>
                ) : null}
            </div>
            <input
                {...props}
                {...field}
                aria-describedby={`${props.id}-feedback ${props.id}-help`}
                onFocus={handleFocus}
            />
            <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
                {helpText}
            </div>
        </div>
    );
};

const Example = () => {
    return (
        <FormikProvider
            initialValues={{
                username: '',
            }}
            onSubmit={async (values) => {
                await sleep(500);
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={usernameSchema}
        >
            <Form>
                <TextInputLiveFeedback
                    label="Username"
                    id="username"
                    name="username"
                    helpText="Must be 8-20 characters and cannot contain special characters."
                    type="text"
                />
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </Form>
        </FormikProvider >
    );
};

export default function TrialTest() {
    return (
        <div className="app">
            <h1 className="text-4xl">Accessible instant feeback with Formik 2</h1>
            <p className="text-lg">
                Instant feedback during typing can be extremely helpful in certain
                situations. For example, checking the validity (or availability) of a
                username shouldn't require the user to resubmit the form (multiple times).
                Providing instant feedback while users are typing can allow them to
                experiment more easily until they find valid input value (like a suitable
                username). Note: This isn't always optimal, use your judgement.
            </p>
            <div className="example">
                <Basic />
            </div>
            <p className="text-md mt-1">
                <strong>Note:</strong> The displayed feedback message in this example is
                coded using a <code>{`<div>`}</code> element that has an{' '}
                <code>{`aria-live`}</code> attribute with the value <code>polite</code>.
                The contents of this so called "live region" are conveyed to screen
                readers and other assistive technology. The value "polite" de-emphasizes
                the importance of the message and does not cause screen readers to
                interrupt their current tasks to read aloud this message. Thus the message
                is only read once when the user stops typing rather than on every
                keystroke that the user makes.
            </p>
            <p className="text-sm">
                <i>
                    Example adapted from{' '}
                    <a
                        href="https://www.w3.org/WAI/tutorials/forms/notifications/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        W3C WAI Web Accessibility Tutorials
                    </a>
                </i>
            </p>
        </div>
    )
}