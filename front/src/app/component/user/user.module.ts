import { UserComponent } from "./user.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user-routing.module";
import { UserListComponent } from './shared-components/user-list/user-list.component';
import { IndexComponent } from './index/index.component';
import { UserFormComponent } from "./shared-components/user-form/user-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDetailComponent } from './shared-components/user-detail/user-detail.component';
import { TableUserComponent } from './shared-components/table-user/table-user.component';



@NgModule({
    declarations: [UserComponent, UserListComponent, IndexComponent, UserFormComponent, UserDetailComponent, TableUserComponent],
    imports: [UserRoutingModule, CommonModule, ReactiveFormsModule, FormsModule],
    providers: []
})
export class UserModule { }
