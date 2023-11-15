import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: string = ``;
  user: User = new User(``,``,``,``)

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
      this.userId = this.route.snapshot.params['userId']

      this.userService.getAll().subscribe(users => {
        for(let userFound of users) {
          if(userFound.id == this.userId) {
            this.user = userFound;
          }
        }
      })


  }

  saveChanges() {
    this.userService.update(this.user).subscribe()
  }

  deleteAccount() {
    this.userService.delete(this.user).subscribe()
  }
}
