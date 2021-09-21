{
    ({ touched, errors, isSubmitting, values }) =>
        !isSubmitting ? (
            <div>
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Login Form</h1>
                    </div>
                </div>
                <Form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autocomplete="off"
                            className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mt-3">
                            Password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className={`mt-2 form-control
                          ${touched.password && errors.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                        />
                        <ErrorMessage
                            component="div"
                            name="password"
                            className="invalid-feedback"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                    >
                        Submit
                    </button>
                </Form>
            </div>
        ) : (
            <div>
                <h1 className="p-3 mt-5">Form Submitted</h1>

                <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">
                        Password: {values.password}
                    </li>
                </ul>
            </div>
        )
}