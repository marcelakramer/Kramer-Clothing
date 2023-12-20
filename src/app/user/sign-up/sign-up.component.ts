import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { MessageSweetService } from 'src/app/shared/services/message.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  hide = true;
  user = new User('', '', '', '');

  constructor(private userService: UserService, private router: Router, private messageService: MessageSweetService) {}

  onSubmit(): void {
    this.userService
      .getByAny({ key: 'email', value: this.user.email })
      .subscribe((found) => {
        if (found) {
          this.messageService.error(`Email already registered.`);
        } else {
          this.userService.create(this.user).subscribe();
          this.messageService.success(`User registered successfully.`);
          this.goToSignIn();
        }
      });
  }  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }
}
