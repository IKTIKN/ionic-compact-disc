import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPageMessageComponent } from 'src/app/components/empty-page-message/empty-page-message.component';

@NgModule({
  declarations: [EmptyPageMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [EmptyPageMessageComponent]
})
export class SharedModule { }
