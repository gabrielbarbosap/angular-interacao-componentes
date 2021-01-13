import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../user-sub.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users = [];
  constructor(
    private userSubService: UserSubService,

  ) { 
  }

  ngOnInit(): void {
    this.userSubService.Userdetail('sim');
  }

}
