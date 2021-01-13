
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { UserSubService } from '../../user-sub.service'
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {
  users: User[];
  subscription: Subscription;
  pendencias = [];
  constructor(
    private userService: UserService,
    private userSubService: UserSubService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.subscription = userSubService.newuser$.subscribe(
      tarefa => {
        this.users.push(tarefa);
        this.buildAvatar()
      });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  buildAvatar() {
    this.users.map(it => it.urlAvatar ? it.urlAvatar : it.urlAvatar = '../../../../../assets/avat-01-512.png' );

  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res
      this.users.map(it => it.urlAvatar ? it.urlAvatar : it.urlAvatar = '../../../../../assets/avat-01-512.png' );
    } )
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  deleteUser(id) {
    Swal.fire({
      text: `Deseja remover o usuário?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Remover'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deletUser(id).subscribe(res => {
          this.getAllUsers();
          console.log(res)
        }, error => {
          Swal.fire({
            title: `Oops`,
            text: error?.error?.message,
            icon: 'error'
          })
        })
      }
    })
  }

  edit(id) {
    console.log('chegou')
    this.router.navigate(['user-detail', id], { relativeTo: this.route });
  }

}
