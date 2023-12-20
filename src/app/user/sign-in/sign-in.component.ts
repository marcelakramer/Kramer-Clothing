import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageSweetService } from 'src/app/shared/services/message.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  hide = true;
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router, private messageService: MessageSweetService) {}

  onSubmit(): void {
    this.userService
      .getByAny({ key: 'email', value: this.email })
      .subscribe((found) => {
        console.log(found);

        if (found) {
          if (found.password == this.password) {
            this.userService.changeLoggedIn(true)
            this.router.navigate(['/kits', found.id]);
          } else {
            this.messageService.error(`Invalid credentials.`)
          }
        } else {
          this.messageService.error(`Invalid credentials.`);
        }
      });
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
