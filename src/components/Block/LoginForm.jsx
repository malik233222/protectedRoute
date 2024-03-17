import { useFormik } from "formik"
import loginSchema from "../../validate/login";
import { logIn } from "../../api/api";
import { useState, useContext } from "react";
import { generalContext } from "../../context/generalContext";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {

    const { loading, setLoading, setIdToken } = useContext(generalContext)
    const [errMessage, setErrMessage] = useState('')
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            setLoading(true)
            try {
                const res = await logIn(values)
                setLoading(false)
                if(res.status===200){
                    setIdToken(res.data.idToken)
                    navigate('/')
                }
                
            } catch (err) {
                setErrMessage(err.response.data.error.message);
                setLoading(false)

            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {
                errMessage && <div className="alert alert-danger">{errMessage}</div>
            }

            <div className="form-floating">
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={formik.errors.email && formik.touched.email ? 'form-control is-invalid' : 'form-control'}
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={formik.errors.password && formik.touched.password ? 'form-control is-invalid' : 'form-control'}
                    id="floatingPassword"
                    placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
                <input
                    className="form-check-input"

                    type="checkbox"
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
                {
                    loading ? <Spinner /> : 'Sign in'
                }
            </button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
    )
}

