import { Component } from '@angular/core';

import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';

@Component({
  templateUrl: 'device-motion.page.html',
})
export class DeviceMotionPage {
  data: any;
  subscription: any;

  startWatching() {
    var options: DeviceMotionAccelerometerOptions = {
      frequency: 500,
    };

    this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  stopWatching() {
    this.subscription.unsubscribe();
  }

}
