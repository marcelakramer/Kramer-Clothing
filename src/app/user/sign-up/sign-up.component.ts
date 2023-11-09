import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {

  }

  onSubmit(): void {
    this.userService.create(this.user).subscribe(
      (response) => {
        this.router.navigate(['/sign-in'])
      },
      (error) => {
        alert('Erro ao criar usuário: email já cadastrado');
      }
    );
  }

}
