import Button from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Press Me",
  bgColor: "Small",
  size: "sm",
  scale: 1,
  borderRadius: 3,
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium",
  bgColor: "blue",
  size: "md",
  scale: 1,
  borderRadius: 3,
};

export const Large = Template.bind({});
Large.args = {
  bgColor: "blue",
  label: "Large",
  size: "lg",
  scale: 1,
  borderRadius: 3,
};
