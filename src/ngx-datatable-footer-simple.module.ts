import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatablePagerSimpleComponent } from './ngx-datatable-pager-simple/ngx-datatable-pager-simple.component';
import { NgxDatatableFooterSimpleComponent } from './ngx-datatable-footer-simple/ngx-datatable-footer-simple.component';

@NgModule({
  declarations: [
    NgxDatatablePagerSimpleComponent,
    NgxDatatableFooterSimpleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxDatatablePagerSimpleComponent,
    NgxDatatableFooterSimpleComponent
  ]
})
export class NgxDatatableFooterSimpleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDatatableFooterSimpleModule
    };
  }
}
