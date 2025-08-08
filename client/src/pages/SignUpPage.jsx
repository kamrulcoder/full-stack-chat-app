import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { registerSchema } from "../lib/formik";
import { useAuthStore } from "../store/useAuthStore";
import {Loader2} from "lucide-react"
import { Toaster } from "react-hot-toast";
const SignUpPage = () => {
    const { signup, isSigningUp } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema, // Pass your Yup schema here
    onSubmit: (values, { resetForm }) => {
    signup(values)
    resetForm()
      
    },
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome to our Chat App
              </h1>
              <p className="text-gray-600 mt-2">Sign Up to Chat App </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name:
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full Name "
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    className={`input input-bordered w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  ${
                      formik.touched.fullName && formik.errors.fullName
                        ? "input-error"
                        : ""
                    }`}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="mt-1 text-sm text-error  font-bold">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email address "
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={`input input-bordered w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  ${
                      formik.touched.email && formik.errors.email
                        ? "input-error"
                        : ""
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="mt-1 text-sm text-error  font-bold">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter  your password "
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={`input input-bordered w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  ${
                      formik.touched.password && formik.errors.password
                        ? "input-error"
                        : ""
                    }`}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="mt-1 text-sm text-error  font-bold">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isSigningUp}
                >
                 {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Already have a account ?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
