import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeService } from 'src/app/services/barcode/barcode.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  private menu: MenuController = inject(MenuController);
  private router: Router = inject(Router);
  barcode: BarcodeService = inject(BarcodeService);

  constructor() { }

  ngOnInit() {
    this.barcode.startScan().then(result => {
      if (result) {
        this.router.navigate(['/', 'scanresult', { barcode: result.content }]);
      }
    });
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.barcode.stopScan();
  }

  setToast(open: boolean): void {
    this.barcode.isToastOpen = open;
  }

}
