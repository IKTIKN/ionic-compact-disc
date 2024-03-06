import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScanResultPageRoutingModule } from './scan-result-routing.module';
import { ScanResultPage } from './scan-result.page';
import { AlbumCardComponent } from 'src/app/components/album-card/album-card.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanResultPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ScanResultPage,
    AlbumCardComponent
  ]
})
export class ScanResultPageModule {}
