import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent },  // home
  { path: 'tech', component: TechnewsComponent },  // tech news
  { path: 'businessnews', component: BusinessnewsComponent },  // business news


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
