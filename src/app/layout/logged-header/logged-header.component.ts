import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.scss']
})
export class LoggedHeaderComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      const userId = this.activatedRoute.snapshot.params['userId?'];
      this.userService.getById(userId).subscribe(

        response => {
          this.user = response[0];
        }
      )
  }

  goToProfile() {
    this.router.navigate(['/profile', this.user?.id])
  }
}
