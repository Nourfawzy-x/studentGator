import { Routes } from '@angular/router';
import { ProgramsComponent } from './Components/programs/programs.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentNavigatorComponent } from './Components/student-navigator/student-navigator.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
  { path: '', component: ProgramsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'studentNavigator', component: StudentNavigatorComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorComponent },
];
