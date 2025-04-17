import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSiteRoutingModule } from './main-site-routing.module';
import { MainSiteComponent } from './main-site.component';
import { HomeComponent } from '../main-site/home/home.component';
import { FooterComponent } from '../main-site/footer/footer.component';
import { AboutComponent } from '../main-site/about/about.component';
import { HeroSectionComponent } from '../main-site/hero-section/hero-section.component';
import { NavBarComponent } from '../main-site/nav-bar/nav-bar.component';
import { LoginComponent } from '../main-site/model/login/login.component';
import { SignupComponent } from '../main-site/model/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUFoliAMRr_vVH_vwgWfTDdICSPjgy1sc',
  authDomain: 'classycorner-2024.firebaseapp.com',
  projectId: 'classycorner-2024',
  storageBucket: 'classycorner-2024.appspot.com',
  messagingSenderId: '219415378608',
  appId: '1:219415378608:web:dfbf2cb5bf28c5b12a9975',
};

@NgModule({
  declarations: [
    MainSiteComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeroSectionComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, MainSiteRoutingModule,FormsModule],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
})
export class MainSiteModule {}
