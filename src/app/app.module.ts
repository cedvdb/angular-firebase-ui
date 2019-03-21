import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { AppComponent } from './app.component';

import { NgFirebaseUiModule } from 'ng-firebase-ui';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

const config: firebaseui.auth.Config = {
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '/tos',
  // Privacy policy url/callback.
  privacyPolicyUrl() {
    window.location.assign('/tos');
  }
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgFirebaseUiModule.init(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
