import React from "react";

import Input from "./InputWithStyle";
import withHoC from "./withHoC";

export default {
  title: "Input/WriteInput",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const wInput = withHoC.bind(Input.bind());
// export const wInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
wInput.args = {
  type: "text",
  name: "wInput",
  value: " test jung ",
  errorMessage: "wInput",
  label: "wInput",
};

export const WriteInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WriteInput.args = {
  type: "text",
  name: "write-input",
  value: "jung ",
  errorMessage: "PropTypes.string",
  label: "write-input",
};
