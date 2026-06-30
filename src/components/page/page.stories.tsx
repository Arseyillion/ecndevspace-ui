import Page from ".";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the page",
      control: {
        type: "text",
      },
    },
    children: {
      description: "The children of the page",
      control: {
        type: "text",
      },
    },
  },
};

export const PageOne ={
    args:{
        title: "This is the Page One title",
        children: "These are the Page One children"
    }
};

export const PageTwo ={
    args:{
        title: "This is the Page Two title",   
        children: "These are the Page Two children"
    }
};
