import React from "react";
import { withFormik } from "formik";
import axios from "axios";
import { Form, Icon, Input, Button, Select, Tooltip } from "antd";

import { api } from "../package.json";

const FormItem = Form.Item;
const Option = Select.Option;

const selectAfter = (
  <Select defaultValue="@1xinternet.de">
    <Option value="@1xinternet.de">@1xinternet.de</Option>
    <Option value="@1x.rocks">@1x.rocks</Option>
  </Select>
);

const TextInput = ({
  values,
  errors,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  name,
  placeholder,
  prefix,
  addonAfter,
  type,
  label
}) => (
  <Form.Item
    hasFeedback={!!errors[name]}
    validateStatus={errors[name] && "error"}
    help={errors[name]}
    label={label}
  >
    <Input
      type={type}
      placeholder={placeholder}
      value={values[name]}
      onChange={event => setFieldValue(name, event.target.value)}
      onBlur={() => setFieldTouched(name)}
      onPressEnter={handleSubmit}
      prefix={prefix}
      addonAfter={addonAfter}
    />
  </Form.Item>
);

export const InputForm = withFormik({
  mapPropsToValues: () => ({
    username: "m.ek",
    password: "zt+Efnraw69BdHyniBr7",
    token: "rRyq2ywwT95XYgml6xnS"
    // username: "",
    // password: "",
    // token: ""
  }),
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    props.formInputComplete(values);
  },
  validate: values => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.token) {
      errors.token = "Required";
    }

    return errors;
  }
})(form => {
  return (
    <Form onSubmit={form.handleSubmit} horizontal>
      <TextInput
        {...form}
        name="username"
        type="text"
        placeholder="Jira Username"
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        addonAfter={selectAfter}
        label="Your Jira account username"
      />
      <TextInput
        {...form}
        name="password"
        type="password"
        placeholder="Jira Password"
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        label="Your Jira account password"
      />
      <TextInput
        {...form}
        name="token"
        placeholder="Times API Token"
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        label={
          <span>
            Times API access token&nbsp;
            <Tooltip title="Find it here: https://times.1xinternet.de/user">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      />
      <FormItem>
        <Button type="primary" htmlType="submit">
          Generate QR Code
        </Button>
      </FormItem>
    </Form>
  );
});
