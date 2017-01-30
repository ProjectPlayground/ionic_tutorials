import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BarcodeScannerPage, CameraPage, DeviceMotionPage, GeolocationPage, HomePage, LocalNotificationsPage, VibrationPage } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
