import { Component } from '@angular/core';

import { LocalNotifications } from 'ionic-native';

@Component({
  templateUrl: 'local-notifications.page.html',
})
export class LocalNotificationsPage {
  results: string;

  constructor() {
    LocalNotifications.on('click', notification => {
      var data = JSON.parse(notification.data);
      this.results = data.name;
      alert(`Notification received! (${data.name})`);
    });
  }

  scheduleNotification() {
    LocalNotifications.schedule({
      id: 1,
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #21',
      }
    });
  }

}
