import { Component } from '@angular/core';

@Component({
  selector: 'component-demo-app',
  template: '<ngx-datatable-footer-simple [datatable]="datatable" [count]="count" (display)="showCount()"></ngx-datatable-footer-simple>'
})
export class DemoComponent {}
