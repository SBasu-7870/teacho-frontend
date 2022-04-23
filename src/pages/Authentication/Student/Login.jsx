import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Button from "./components/Button.jsx"
import FormGroup from "./components/FormGroup.jsx"
import InputGroup from "./components/InputGroup.jsx"
import CheckboxGroup from "./components/CheckboxGroup.jsx"
import { Navbar } from "../../../NavBar/navbar.jsx"

function Login() {
  return (
    <>
     <Navbar />
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <a
          href="/"
          className="absolute text-3xl text-blue-400 cursor-pointer top-0 right-0 mt-6 mr-8"
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <form className="w-5/6 sm:w-1/2 mx-auto text-center">
          <img
            src="..\assets\logo.png"
            className="h-8 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
            <p className="mt-3 text-gray-800">
              New to Teacho?{" "}
              <a href="#" className="text-blue-400">
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-12">
            <FormGroup>
              <InputGroup
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                type="password"
                name="password"
                placeholder="Your password"
              />
            </FormGroup>
            <FormGroup>
              <Button text="Log In" submit full />
            </FormGroup>
            <div className="text-right">
              <a href="#" className="text-blue-400">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4">
              <p className="text-left text-gray-800">Or login with</p>
              <div className="mt-2 grid grid-cols-3 gap-6 text-black text-2xl">
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="http://localhost:5000/auth/google/callback"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="mt-6 border-t border-b border-gray-300">
              <FormGroup>
                <CheckboxGroup
                  label="Remember this device"
                  name="rememberMe"
                  defaultChecked
                />
              </FormGroup>
            </div>
            <p className="text-sm mt-6 text-left">
              By continuing you accept our{" "}
              <a href="#" className="text-blue-400">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login