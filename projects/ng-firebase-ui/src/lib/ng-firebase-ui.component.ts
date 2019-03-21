import { AfterViewInit, ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

import { CONFIG_TOKEN } from './config.token.const';

@Component({
    selector: 'firebase-ui',
    template: '<div id="firebaseui-auth-container"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgFirebaseUiComponent implements AfterViewInit {

    constructor(
        @Inject(CONFIG_TOKEN) protected config: any,
        // this one needs to be injected even if not used
        // so it doesn't throw an error because there is two instances of firebase
        protected afAuth: AngularFireAuth
    ) { }

    ngAfterViewInit() {
        // Initialize the FirebaseUI Widget using Firebase.
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', this.config);
    }

}
