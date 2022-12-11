import { environment } from 'projects/system/src/environments/environment';

export abstract class BaseComponent {
  abstract title: string;
  abstract iconName: string;

  pageSize = environment.pageSize;
}
