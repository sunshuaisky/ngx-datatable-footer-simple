import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableFooterSimpleModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxDatatableFooterSimpleModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
