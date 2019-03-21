import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFirebaseUiComponent } from './ng-firebase-ui.component';
import { CONFIG_TOKEN } from './config.token.const';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  declarations: [NgFirebaseUiComponent],
  exports: [NgFirebaseUiComponent]
})
export class NgFirebaseUiModule {
  static init(config?: firebaseui.auth.Config): ModuleWithProviders {
    return {
      ngModule: NgFirebaseUiModule,
      providers: [
        { provide: CONFIG_TOKEN, useValue: config }
      ]
    };
  }
}
