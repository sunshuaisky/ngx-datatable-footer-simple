import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-datatable-pager-simple',
  template: `
    <ul class="pager">
    <select *ngIf="isShowSize" [(ngModel)]="size" (change)="selectSize()">  
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>  
    </select>
      <li [class.disabled]="page<=1" [ngStyle]="{'line-height':'35px'}">
        <a (click)="prevPage()">
          <i class="{{iconPrev}}"></i>
        </a>
      </li>
      <li [class.disabled]="canNext()" [ngStyle]="{'line-height':'35px'}">
        <a (click)="nextPage()">
          <i class="{{iconNext}}"></i>
        </a>
      </li>
    </ul>`,
  styles: [`
    .pager li a {
      background: #f2f3f8;
    }
    .pager li a:hover {
      background: #d5d6d8;
    }`]
})
export class NgxDatatablePagerSimpleComponent {
  @Input() iconPrev: string;
  @Input() iconNext: string;
  @Input() datatable: any;

  @Input()
  set size(val: number) {
    this._size = val;
  };
  get size(): number {
    return this._size;
  };

  @Input() size: number;
  @Input() count: number;

  @Input()
  set page(val: number) {
    this._page = val;
  };
  get page(): number {
    return this._page || 1;
  };

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() changeSize: EventEmitter<any> = new EventEmitter();

  _page = 1;
  _size = 0;

  totalPages(): number {
    if (this.count) {
      const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
      return Math.max(count || 0, 1);
    } else {
      if (this.datatable.rows.length < this.size) {
        return this.page - 1;
      } else {
        return this.page + 1;
      };
    };
  };

  canNext(): boolean {
    if (this.count >= 0) {
      return this.page >= Math.ceil(this.count / this.size);
    } else if (this.datatable.rows) {
      return this.datatable.rows.length < this.size;
    } else {
      return false
    };
  };

  prevPage(): void {
    this.selectPage(this.page - 1);
  };

  nextPage(): void {
    this.selectPage(this.page + 1);
  };

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.page = page;
      this.change.emit({
        page
      });
    }
  };

  selectSize(): void {
    this.selectPageSize(this.size)
  };

  selectPageSize(size: number): void {
    this.size = size
    this.changeSize.emit({
      size: size
    })
  };
};
