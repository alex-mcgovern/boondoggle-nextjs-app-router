"use client";

import {
  Box,
  Button,
  Card,
  FlagGb,
  FlagIe,
  Form,
  FormInput,
  FormInputCurrency,
  FormInputDate,
  FormSelectSingle,
  FormSubmitButton,
  Icon,
  Main,
  getSprinkles,
} from "@alex-mcgovern/boondoggle.design";
import { faHome } from "@fortawesome/pro-solid-svg-icons";

export default function FormPage() {
  return (
    <Main>
      <Card>
        <h1>Form</h1>
        <p>Uses `react-hook-form` </p>
        <Form
          name="test_form"
          handleSubmit={(field_values) => {
            alert(JSON.stringify(field_values, null, 2));
          }}
        >
          <Box display="flex" flexDirection="column" gap="space_4">
            <Box display="grid" gap="space_4" gridTemplateColumns="2x">
              <FormInput label="First Name" name="first_name" />
              <FormInput label="Last Name" name="last_name" />
            </Box>
            <FormInput label="Email address" name="email_address" />
            <FormInputDate label="Date of birth" name="date_of_birth" />
            <FormInputCurrency
              locale="en-GB"
              initialCurrency="GBP"
              label="Salary"
              name="salary"
            />
            <FormSelectSingle
              name="country"
              label="Country"
              items={[
                {
                  label: "United Kingdom",
                  value: "england",
                  slotLeft: <FlagGb />,
                },
                {
                  label: "Ireland",
                  value: "ireland",
                  slotLeft: <FlagIe />,
                },
              ]}
            />
            <FormSubmitButton marginLeft="auto">Submit</FormSubmitButton>
          </Box>
        </Form>
      </Card>
    </Main>
  );
}
