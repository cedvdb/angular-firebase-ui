<p align="center">
  ![screenshot](https://github.com/firebase/firebaseui-web/raw/master/demo/screenshot.png)

</p>

## Installation

```
ng add angular-fire-schematics // skip if you already have angular fire
npm i ng-firebase-ui // requires peer dependency of firebase firebaseui and @angular/fire
```

Add styling

```
@import '~firebaseui/dist/firebaseui.css';
```


Add module

```
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
  ],
  tosUrl: '/tos',
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

```

## usage


Where you want the firebase ui to display:

```
<firebase-ui></firebase-ui>
```


Now when the user connects firebase auth will receive an user. So you can have:

```
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {

    this.user$ = this.afAuth.authState;
  }
```
