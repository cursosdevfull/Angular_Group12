import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthApplication } from '../../../modules/auth/application/auth.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly authApplication: AuthApplication) {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this.onToggleSidenav.emit();
  }

  logout(): void {
    this.authApplication.logout();
  }
}
