import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserDetailComponent } from './shared-components/user-detail/user-detail.component';
import { UserResolverGuard } from './user-resolver';
import { UserComponent } from './user.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '',
                component: IndexComponent,
            },
            {
                path: 'user-detail/:id', component: UserDetailComponent,
                resolve: {
                    user: UserResolverGuard
                }
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
