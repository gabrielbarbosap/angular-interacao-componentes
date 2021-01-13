import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserSubService } from '../../user-sub.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  formUser;
  gitView;
  userGit = new FormControl();
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userSubService: UserSubService
  ) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      urlAvatar: [''],
      name: ['', Validators.required],
      email: ['', Validators.email],
      city: [''],
      forma: [''],
      tec: [''],
      bio: [''],
      urlGit: ['']
    })
  }

  onSubmit() {
    this.userService.createUsers(this.formUser.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Usuário salvo',
      })
      this.userSubService.newUser(res);
      this.formUser.reset()
    }), err => 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao cadastrar',
    })
  }

  searchGitUser() {
    this.userService.getUserGit(this.userGit.value).subscribe(res => {
      this.gitView = res
      console.log(res)
    })
  }

  updateForm(user) {
    this.formUser.patchValue({
      name: user.name = ! null ? user.name : '',
      email: user.email = ! null ? user.email : '',
      urlAvatar: user.avatar_url = ! null ? user.avatar_url : '',
      bio: user.bio = ! null ? user.bio : '',
      urlGit: user.html_url = ! null ? user.html_url : '',
    });
  }

}
