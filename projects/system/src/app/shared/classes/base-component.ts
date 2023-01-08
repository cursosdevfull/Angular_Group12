import { environment } from 'projects/system/src/environments/environment';

export abstract class BaseComponent {
  abstract title: string;
  abstract iconName: string;
  totalRecords = 0;
  pageSize = environment.pageSize;
  currentPage = 0;
}
