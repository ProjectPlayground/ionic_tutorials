import { Component } from '@angular/core';

import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'barcode-scanner.page.html',
})
export class BarcodeScannerPage {
  results: any;

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.results = barcodeData;
    }, (err) => {
      // An error ocurred
      alert(`Error scanning: ${err}`);
    });
  }

  reset() {
    this.results = null;
  }

  lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }

}
