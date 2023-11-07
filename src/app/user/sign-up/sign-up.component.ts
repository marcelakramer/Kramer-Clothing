import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  user = new User('', '', '');

  constructor(private userService: UserService) {

  }

  onSubmit(): any {
    this.userService.create(this.user).subscribe(
      response => {
        console.log('criado');

      }
    );

    this.userService.getAll().subscribe(
      response => {
        console.log(response)
      }
    )
  }
}
