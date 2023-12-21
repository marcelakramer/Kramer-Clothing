import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  signInForm!: FormGroup;
  nameForm = new FormControl();
  cpfForm = new FormControl();
  phoneNumberForm = new FormControl();
  emailForm = new FormControl();
  passwordForm = new FormControl();

  constructor(private userService: UserService, private router: Router, private messageService: MessageSweetService) {}

ngOnInit(): void {
    this.emailForm = new FormControl(this.email, [
      Validators.required
    ]);
    this.passwordForm = new FormControl(this.password, [
      Validators.required,
    ]);
    this.signInForm = new FormGroup({
      email: this.emailForm,
      password: this.passwordForm
    });
  }

  onSubmit(): void {
    this.userService
      .getByEmail({ key: 'email', value: this.email })
      .subscribe((found) => {
        if (found[0]) {
          if (found[0].password == this.password) {
            this.userService.changeLoggedIn(true)
            this.router.navigate(['/kits', found[0].id]);
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
