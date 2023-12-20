import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hide = true;
  userId: string = ``;
  user: User = new User(``,``,``,``, ``, ``)
  hasInfoChanged: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
      this.userId = this.activatedRoute.snapshot.params['userId'];

      // this.userService.getAll().subscribe(users => {
      //   for(let userFound of users) {
      //     if(userFound.id == this.userId) {
      //       this.user = userFound;
      //     }
      //   }
      // });

      this.userService.getById(this.userId).subscribe((response) => {
        if(response[0]) {
          
          console.log('piri', this.userId);
          console.log(response);
          
          this.user = response[0]
        }
      })
  }

  onInputChange() {
    this.hasInfoChanged = true;
  }

  saveChanges() {
    this.userService.update(this.user).subscribe();
    this.hasInfoChanged = false;
  }

  deleteAccount() {
    this.router.navigate(['']);
    this.userService.delete(this.user).subscribe();
    this.userService.changeLoggedIn(false);
  }

  goBack() {
    this.router.navigate(['/kits', this.userId]);
  }

  goToOrders() {
    this.router.navigate(['/orders', this.user.id]);
  }

  logOut() {
    this.router.navigate(['/sign-in']);
  }
}
