import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './tabs/main/main.component';
import { NotificationsComponent } from './tabs/main/notifications/notifications.component';
import { PopUpComponent } from './tabs/main/notifications/pop-up/pop-up.component';
import { ImagesComponent } from './tabs/main/images/images.component';
import { GalleryComponent } from './tabs/gallery/gallery.component';
import { FlowComponent } from './tabs/gallery/flow/flow.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { ClubsComponent } from './tabs/clubs/clubs.component';
import { NoticeComponent } from './tabs/notice/notice.component';
import { AdmissionComponent } from './tabs/admission/admission.component';
import { FormulaeComponent } from './tabs/formulae/formulae.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    MainComponent,
    NotificationsComponent,
    PopUpComponent,
    ImagesComponent,
    GalleryComponent,
    FlowComponent,
    ContactComponent,
    ClubsComponent,
    NoticeComponent,
    AdmissionComponent,
    FormulaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
