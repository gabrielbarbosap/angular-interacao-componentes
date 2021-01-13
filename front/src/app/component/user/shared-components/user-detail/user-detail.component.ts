import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { UserSubService } from '../../user-sub.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user;
  formUser;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userSubService: UserSubService,
  ) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
    this.userSubService.Userdetail('nao');

    this.formUser = this.fb.group({
      _id: [''],
      urlAvatar: [''],
      name: ['', Validators.required],
      email: ['', Validators.email],
      city: [''],
      forma: [''],
      tec: [''],
      bio: [''],
      urlGit: ['']
    })

    if (this.user) {
      this.formUser.patchValue(this.user);
    }
  }

  onSubmit() {
    this.userService.editUser(this.formUser.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Usuário Editado',
      })
      this.router.navigate([''], { relativeTo: this.route });
    }), err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao editar.',
      })
    }
  }

}
