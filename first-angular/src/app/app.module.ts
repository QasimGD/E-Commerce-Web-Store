import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"classycorner-2024","appId":"1:219415378608:web:dfbf2cb5bf28c5b12a9975","storageBucket":"classycorner-2024.appspot.com","apiKey":"AIzaSyBUFoliAMRr_vVH_vwgWfTDdICSPjgy1sc","authDomain":"classycorner-2024.firebaseapp.com","messagingSenderId":"219415378608"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
