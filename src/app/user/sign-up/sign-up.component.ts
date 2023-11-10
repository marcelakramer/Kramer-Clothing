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
  user = new User('', '', '', '');

  constructor(private userService: UserService) {

  }

  onSubmit(): void {
    this.userService.getByAny({key: 'email', value: this.user.email}).subscribe(
      found => {

        if(found.length > 0) {
          console.log(`aqui`);

          alert(`Email ${this.user.email} já cadastrado`)
        } else {
          console.log(`aqui2`);

          this.userService.create(this.user).subscribe()
        }
      }
    )
  }

}
