import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  user = new User('', '', '', '', '', '');
  signUpForm!: FormGroup;
  nameForm = new FormControl();
  cpfForm = new FormControl();
  phoneNumberForm = new FormControl();
  emailForm = new FormControl();
  passwordForm = new FormControl();


  constructor(private userService: UserService, private router: Router, private messageService: MessageSweetService) {}

  ngOnInit(): void {
    this.nameForm = new FormControl(this.user.name, [
      Validators.required,
    ]);
    this.cpfForm = new FormControl(this.user.cpf, [
      Validators.required,
    ]);
    this.phoneNumberForm = new FormControl(this.user.phoneNumber, [
      Validators.required
    ]);
    this.emailForm = new FormControl(this.user.email, [
      Validators.required
    ]);
    this.passwordForm = new FormControl(this.user.password, [
      Validators.required,
    ]);
    this.signUpForm = new FormGroup({
      name: this.nameForm,
      cpf: this.cpfForm,
      phoneNumber: this.phoneNumberForm,
      email: this.emailForm,
      password: this.passwordForm
    });
  }

  onSubmit(): void {
    this.userService
      .getByEmail({ key: 'email', value: this.user.email })
      .subscribe((found) => {
        if (found[0]) {
          this.messageService.error(`Email already registered.`);
        } else {
          this.userService.create(this.user).subscribe();
          this.messageService.success(`User registered successfully.`);
          this.goToSignIn();
        }
      });
  }
  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }
}
