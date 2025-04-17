import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    DashboardComponent,
    StatsComponent,
    AuthenticationComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
})
export class DashboardModule {}
