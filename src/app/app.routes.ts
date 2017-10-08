import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { NewReleaseNotesComponent } from './new-release-note/new-release-note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegUserComponent } from './account-management/reg-user.component';
import { LoginComponent } from './account-management/login.component';
import { EditUserComponent } from './account-management/edit-user.component';

import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'release',
      component: ReleaseNotesComponent
  },
  {
    path: 'release/:name',
      component: ReleaseNotesComponent
  },
  {
    path: 'register',
      component: RegUserComponent
  },
  {
    path: 'edit-user',
      component: EditUserComponent
  },
  {
    path: 'login',
      component: LoginComponent
  }
];
