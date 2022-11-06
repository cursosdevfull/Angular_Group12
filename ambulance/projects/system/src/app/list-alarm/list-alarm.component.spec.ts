import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlarmComponent } from './list-alarm.component';

describe('ListAlarmComponent', () => {
  let component: ListAlarmComponent;
  let fixture: ComponentFixture<ListAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
