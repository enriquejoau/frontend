import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageLoginComponent } from "./core/presentation/pages/page-login/page-login.component";

const routes : Routes =[
    {path: '', component:PageLoginComponent},  
    {path: 'users',
      loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
    },
    {path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
  },
  {path: 'seminario',
    loadChildren: () => import('./seminario/seminario.module').then((m) => m.SeminarioModule)
  },
    {path: '**', redirectTo:''},
  
  ]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{


}