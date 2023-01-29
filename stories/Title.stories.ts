import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TitleComponent } from 'projects/system/src/app/shared/components/title/title.component';

import { SharedModule } from '../projects/system/src/app/shared/shared.module';

export default {
  title: 'Ambulance/Title',
  component: TitleComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedModule, CommonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Médicos',
  iconName: 'home',
};
