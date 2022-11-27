import { Component } from '@angular/core';
import { concatMap, delay, tap } from 'rxjs';

import { MedicService } from './modules/medic/services/medic.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private users!: any;
  private posts!: any;
  private comments!: any;

  isMenuShow: boolean = true;

  constructor(private readonly medicService: MedicService) {
    const observableUsers = this.medicService.getUsers();
    //const observablePosts = ;
    const observableComments = this.medicService.getComments();

    observableUsers
      .pipe(
        delay(1000),
        tap((value) => {
          this.users = value;
          console.log('Users');
        }),
        concatMap((valueUsers) =>
          this.medicService.getPosts(valueUsers).pipe(
            delay(1000),
            tap((value) => {
              this.posts = value;
              console.log('Posts');
            })
          )
        ),
        concatMap((valuePosts) =>
          observableComments.pipe(
            delay(1000),
            tap((value) => {
              this.comments = value;
              console.log('Comments');
            })
          )
        )
      )
      .subscribe(() => console.log(this.users, this.posts, this.comments));
  }

  toggleMenu(): void {
    this.isMenuShow = !this.isMenuShow;
  }
}
