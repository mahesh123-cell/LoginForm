import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Name is required"),
  userEmail: Yup.string().email("Invalid email").required("Email is required"),
});
