import * as yup from "yup";

const registerSchema = yup.object({
    email : yup.string().required('Emaili mutleq daxil et').email('Email duzgun deyil'),
    password : yup.string().required('Parolu mutleq daxil et').min(8,'Minium 8')
});

export default registerSchema;