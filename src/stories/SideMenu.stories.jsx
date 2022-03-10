import React from 'react';

import SideMenu from './SideMenu';
import * as ButtonStories from  './Button.stories';
export default {
  component: SideMenu,
  title: 'Example/SideMenu',
  decorators: [story => <div style={{padding: '1em 0', position:'relative', minHeight:'240px' , overflow:'hidden'}}>{story()}</div>],
  };

const buttonArray = [  
  {id:'x', ...ButtonStories.Menu.args, label:"Home", buttonIcon:"🏠"},
{id:'z', ...ButtonStories.Menu.args, label: "Profile", buttonIcon:"👤"},
{id:'y', ...ButtonStories.Menu.args, label:"Contact", buttonIcon:"📧"},
{id:'q', ...ButtonStories.Menu.args, label:"Help", buttonIcon:"🙋"},]

const Template = args => <SideMenu {...args} />;
//console.log(ButtonStories.Primary.args.button)
export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Primary story in Button.stories.js.
 
  minimised: false,
  buttons: buttonArray
};

export const Minimised = Template.bind({});
Minimised.args = {
  buttons: buttonArray,
  minimised: true,
};
/*

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};*/