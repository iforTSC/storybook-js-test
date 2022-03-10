import React from 'react';

import { Button } from './Button';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    buttonIcon: { control: { type: "select", 
                              options: { 
                                none :null,
                                happy: "😀",
                                sad : "😒",
                              } 
                            },
                          
                }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  buttonIcon: null,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor:'gray'
};

export const Large = Template.bind({});
Large.args = {  
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};


export const Menu = Template.bind({});
Menu.args = {
  menu:true,
  label: 'Menu Button',
  buttonIcon: "📑",
  backgroundColor:'cornflowerblue',
};
