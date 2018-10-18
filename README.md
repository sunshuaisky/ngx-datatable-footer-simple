## Installation

Install through npm:
```
npm install --save ngx-datatable-footer-simple
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { NgxDatatableFooterSimpleModule } from 'ngx-datatable-footer-simple';

@NgModule({
  imports: [
    NgxDatatableFooterSimpleModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<ngx-datatable-footer-simple [datatable]="datatable" [count]="count" (display)="showCount()"></ngx-datatable-footer-simple>'
})
export class MyComponent {}
```
