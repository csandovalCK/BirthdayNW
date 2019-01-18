import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatCardModule, MatExpansionModule, MatFormFieldModule,
MatDatepickerModule, MatNativeDateModule, MatInputModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSelectModule} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { BirthdaysMonthComponent } from './birthdays-month/birthdays-month.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RolCumpleanosComponent } from './rol-cumpleanos/rol-cumpleanos.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    BirthdaysMonthComponent,
    FooterComponent,
    RolCumpleanosComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
