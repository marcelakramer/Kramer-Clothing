import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  colunasVisiveis = ['name', 'email']

  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.dataSource = new MatTableDataSource<User>(users);
    })
  }
}
