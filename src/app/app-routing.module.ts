import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { BirthdaysMonthComponent } from './birthdays-month/birthdays-month.component';
import { RolCumpleanosComponent } from './rol-cumpleanos/rol-cumpleanos.component';

const routes: Routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'people', component: PeopleComponent},
    { path: 'birthdays', component: BirthdaysMonthComponent },
    { path: 'rolCumpleanos', component: RolCumpleanosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
