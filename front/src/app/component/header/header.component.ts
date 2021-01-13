import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSubService } from '../user/user-sub.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  users: User[];
  viewSelect = false;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private userSubService: UserSubService,

  ) {
    this.subscription = userSubService.detail$.subscribe(
      tarefa => {
        if(tarefa === "sim") {
          this.viewSelect = true
        } else {
          this.viewSelect = false
        }
      });
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res
      this.users.map(it => it.urlAvatar ? it.urlAvatar : it.urlAvatar = '../../../../../assets/avat-01-512.png');
    })
  }

  edit(id) {
    this.router.navigate(['user-detail', id], { relativeTo: this.route });
  }

}
