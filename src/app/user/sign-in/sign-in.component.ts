import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true;
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.authenticate(this.email, this.password).subscribe(
      (user: any) => {
        this.router.navigate(['/thank-you'])
      },
      (error: any) => {
        alert('Credenciais inválidas')
      }
    );
  }
}
