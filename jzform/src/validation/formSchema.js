import * as Yup from "yup";

const formSchema = Yup.object().shape({
    first_name: Yup
    .string()
    .trim()
    .required("First name required")
    .min(3, "First name needs to be minimum of 3 characters"),
    last_name: Yup
    .string()
    .trim()
    .required("Last name required")
    .min(3, "Last name needs to be minimum 3 characters"),
    email: Yup
    .string()
    .required("Email required")
    .email("This needs to be an email"),
    password: Yup
    .string()
    .required("Password needed")
    .min(8, "Minimum 8 characters"),
    terms: Yup
    .string()
    .required("Accept Terms of Services")
    .oneOf(["true"], "Accept Terms of Services")
});

export default formSchema;