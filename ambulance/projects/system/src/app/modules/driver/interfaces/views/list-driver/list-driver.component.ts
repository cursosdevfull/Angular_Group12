import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';

@Component({
  selector: 'amb-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent implements OnInit {
  constructor(private layoutService: LayoutService) {
    this.layoutService.configuration = { header: true, menu: true };
  }

  ngOnInit(): void {}
}
