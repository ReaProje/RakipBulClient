import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  { path: "", component:AnasayfaComponent},
  { path: "ilan", component: IlanComponent},
  { path: "anasayfa", component: AnasayfaComponent},
  { path: "giris", component: GirisComponent},
  {path: "etkinlik",component: EtkinlikComponent},
  {path:"profildetail",component:ProfileComponent},
  {path:"comment",component:CommentComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
