
import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("তুমার ইমেইল ঠিক নেই ")
        .required("তুমার ইমেইল টি দিতে হবে "),
    password: Yup.string()
       .min(6, "পাসওয়ার্ড টি ৬ সংখ্যার চেয়ে বেশি দিতে হবে ")
        .required("পাসওয়ার্ড টি দিতে হবে "),
});

export const registerSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(6, ' ৬ অক্ষরের  কম সম্পূর্ণ নাম!!!')
        .max(50, '৬ অক্ষরের  কম সম্পূর্ণ নাম!!!')
        .required('তুমার সম্পূর্ণ নাম দিতে হবে!!!'),
    email: Yup.string()
        .email("তুমার ইমেইল ঠিক নেই ")
        .required("তুমার ইমেইল টি দিতে হবে "),
    password: Yup.string()
        .min(6, "পাসওয়ার্ড টি ৬ সংখ্যার চেয়ে বেশি দিতে হবে ")
        .required("পাসওয়ার্ড টি দিতে হবে "),
});