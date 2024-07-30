import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "../../../../config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateLoginStatus } from "../../../redux/reducers/userslice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const UserLogin = () => {
  const [isPhoneLogin, setIsPhoneLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        ...data,
        userRole: "USER",
      });

      localStorage.setItem("JWT_TOKEN", res?.data?.token);
      console.log(res);
      dispatch(updateLoginStatus(true));
      toast.success("User logged in successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Reset form fields when switching between phone and email login
    reset({
      email: isPhoneLogin ? "" : undefined,
      phoneNumber: isPhoneLogin ? undefined : "",
    });
  }, [isPhoneLogin, reset]);

  return (
    <section className="bg-[#f5f5f5] dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen overflow-auto">
        <div className="">
          <a
            href="#"
            className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-[150px] h-[150px] mr-2 rounded-md shadow"
              src="https://static.mhdzn.com/wp-content/uploads/2023/02/logo-jewelery-ecommerce-website-ohana-480x480.jpg"
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit((data) => {
                  handleLogin(data);
                })}
              >
                {isPhoneLogin ? (
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your phone number
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      {...register("phoneNumber", { required: "Phone number is required" })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="9988009900"
                      required={true}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {isPhoneLogin ? (
                    <p
                      onClick={() => setIsPhoneLogin(!isPhoneLogin)}
                      className="text-sm cursor-pointer font-medium text-primary-600 hover:underline dark:text-slate-400"
                    >
                      Login with email
                    </p>
                  ) : (
                    <p
                      onClick={() => setIsPhoneLogin(!isPhoneLogin)}
                      className="text-sm cursor-pointer font-medium text-primary-600 hover:underline dark:text-slate-400"
                    >
                      Login with mobile
                    </p>
                  )}

                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-slate-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-yellow-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 ${!isValid && "opacity-50 cursor-not-allowed"}`}
                  disabled={!isValid}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
