import logo from './logo.svg';
import './App.css';

import { Button } from './stories/Button';
/*
function App() {
  return (
    <div className="App">
  <Button
  backgroundColor="#0078A7"
  label="Do something"
  onClick={() => {}}
  primary
/>
    </div>
  );
}
*/

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};

/*
export default App;*/
