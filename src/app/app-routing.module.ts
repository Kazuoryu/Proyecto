import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { ArticleComponent } from './article/pages/article/article.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'Articulos', component: ArticleComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
