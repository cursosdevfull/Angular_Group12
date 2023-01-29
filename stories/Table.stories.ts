import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { TableComponent } from '../projects/system/src/app/shared/components/table/table.component';
import { SharedModule } from '../projects/system/src/app/shared/shared.module';

export default {
  title: 'Ambulance/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedModule, CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  dataSource: [
    {
      id: 1,
      name: 'user01',
      email: 'user01@correo.com',
    },
    {
      id: 2,
      name: 'user02',
      email: 'user02@correo.com',
    },
  ],
  metaData: [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'name',
      title: 'Nombre',
    },
    {
      field: 'email',
      title: 'Correo',
    },
  ],
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  dataSource: [
    {
      id: 1,
      name: 'user01',
    },
    {
      id: 2,
      name: 'user02',
    },
  ],
  metaData: [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'name',
      title: 'Nombre',
    },
  ],
};
