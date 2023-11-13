import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService
      .getByAny({ key: 'email', value: this.email })
      .subscribe((found) => {
        if (found[0]) {
          if (found[0].password == this.password) {
            this.router.navigate(['']);
          }
        } else {
          alert(`Credenciais inválidas`);
        }

        this.router.navigate(['thank-you']);
      });
  }
}
