import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly configBehaviorSubject: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private layout: ILayout) {
    this.configBehaviorSubject = new BehaviorSubject<ILayout>(layout);
    console.log('layout', layout);
  }

  set configuration(value: Partial<ILayout>) {
    let config = this.configBehaviorSubject.getValue();
    config = Object.assign(config, value);
    this.configBehaviorSubject.next(config);
  }

  get configuration(): any {
    /*     this.configBehaviorSubject.next(this.layout);
    this.configBehaviorSubject.subscribe(console.log)
    this.configBehaviorSubject.getValue();

    const observable = this.configBehaviorSubject.asObservable();
    observable.subscribe(console.log); */

    return this.configBehaviorSubject.asObservable();
  }
}

/* const layoutService = new LayoutService({ header: true, menu: true });
layoutService.configuration = {header: false, menu: false}
layoutService.configuration */
