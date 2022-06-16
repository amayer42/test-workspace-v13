import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MyFirstComponent } from './my-first.component';

export default {
  title: 'MyFirstComponent',
  component: MyFirstComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MyFirstComponent>;

const Template: Story<MyFirstComponent> = (args: MyFirstComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}