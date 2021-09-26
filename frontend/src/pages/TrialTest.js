import React from 'react';

// imports
import axios from "axios";
import * as Yup from 'yup';
import config from '../Config'

// trials
import { Formik } from 'formik';
import { useFormik, FormikProvider, Form, useField } from 'formik'; // instant feedback
import { FastField } from 'formik'; // instant feedback


// styling
import './trial.css';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Basic = () => (
    <div>
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
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
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

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div style={{ marginTop: "1.5rem" }}        >
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
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

const TextInputLiveFeedback2 = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
    const [increment, setIncrement] = React.useState(0);
    const [errorMessage, setErrorMessage] = React.useState(false);

    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const [didCallAxios, setdidCallAxios] = React.useState(false);

    const handleFocus = () => setDidFocus(true);
    const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;

    if (meta.touched && !meta.initialTouched && !didCallAxios) {
        console.log('Call Axios To Validate please' + increment)
        setdidCallAxios(true)
        axios
            .get(`${config.baseUrl}/u/user/${meta.value}/available`)
            .catch((error) => {
                setErrorMessage(true);
            })
    }

    console.log(meta)
    console.log(meta.touched, !meta.initialTouched, !didCallAxios, handleFocus)

    return (
        <div
            className={`form-control ${showFeedback ? ((meta.error || errorMessage) ? 'invalid' : 'valid') : ''
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
                        {(meta.error || errorMessage) ? (meta.error ? meta.error : "Email has already been taken") : '✓'}
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
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            number: ''
        },
        onSubmit: async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(20, 'Must be less  than 20 characters')
                .required('Username is required')
                .test('Unique Email', 'Email has already been taken', // <- key, message
                    function (value, testContext) {
                        var boolean = (testContext.originalValue == value) && (testContext.originalValue != null)
                        console.log(testContext)
                        if (boolean) {
                            console.log("Calling backend")
                            return new Promise((resolve, reject) => {
                                axios.get(`http://localhost:8003/api/u/user/${value}/available`)
                                    .then((res) => {
                                        resolve(true)
                                    })
                                    .catch((error) => {
                                        if (error.response.data.content === "The email has already been taken.") {
                                            resolve(false);
                                        }
                                    })
                            })
                        }
                    }
                ),
            number: Yup.string().
                required('required')
        }),
    });

    return (
        <FormikProvider value={formik}>
            <Form>
                <MyTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                />

                <MyTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />

                <TextInputLiveFeedback
                    label="Email"
                    id="email"
                    name="email"
                    helpText="Must be 8-20 characters and cannot contain special characters."
                    type="text"
                />

                <MyTextInput
                    label="Contact Number"
                    name="number"
                    type="text"
                    placeholder="Doe"
                />
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </Form>
        </FormikProvider>
    );
};

export default function TestZone() {
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
                <Example />
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