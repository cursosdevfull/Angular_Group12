import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../config/services/layout.service';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private layoutService: LayoutService) {
    this.layoutService.configuration = { header: false, menu: false };
  }

  ngOnInit(): void {}
}
