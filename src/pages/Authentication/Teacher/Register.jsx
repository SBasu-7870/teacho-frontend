import React from "react"

import ChevronDots from "./components/ChevronDots"
import FormGroup from "../Student/components/FormGroup"
import SelectGroup from "./components/SelectGroup"
import InputGroup from "../Student/components/InputGroup"

import Button from "../Student/components/Button"

function Register() {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-between item-center py-6">
        <div className="h-8">
         <img
            src="..\assets\logo.png"
            className="h-full"
          />
        </div>
        <a href="#" className="no-underline font-medium text-blue-400">
          Get Help
        </a>
      </div>
      <div className="mt-8">
        <ChevronDots
          steps={["Account", "Details", "Team", "Pay"]}
          currentStep={2}
        />
      </div>
      <div className="my-12 pb-12 w-full max-w-screen-md mx-auto">
        <h1 className="text-4xl font-bold p-7 text-center">Teacher Registration</h1>
        <form className="mt-2 w-full">
          <FormGroup horizontal>
            <InputGroup label="First Name" type="text" name="firstName" />
            <InputGroup label="Last Name" type="text" name="lastName" />
          </FormGroup>
          <FormGroup horizontal>
            <SelectGroup
              label="State of Residence"
              placeholder="Select..."
              name="state"
              options={[
                {
                  value: "West Bengal",
                  label: "West Bengal",
                },
                {
                  value: "West Bengal",
                  label: "West Bengal",
                },
                {
                  value: "West Bengal",
                  label: "West Bengal",
                },
                {
                  value: "West Bengal",
                  label: "West Bengal",
                },
              ]}
            />
            <InputGroup label="City" type="text" name="city" />
          </FormGroup>
          <FormGroup>
            <InputGroup label="Address" type="text" />
          </FormGroup>
          <FormGroup>
           
          </FormGroup>
          <FormGroup>
            <InputGroup label="Resume" type="file" name="resume" />
          </FormGroup>
          <FormGroup>
            <Button text="Next" submit full />
          </FormGroup>
        </form>
      </div>
    </div>
  )
}

export default Register