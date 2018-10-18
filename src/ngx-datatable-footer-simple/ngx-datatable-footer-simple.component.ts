import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable/release/components';

@Component({
  selector: 'ngx-datatable-footer-simple',
  template: `
    <ng-template ngx-datatable-footer-template let-pageSize="pageSize" let-selectedCount="selectedCount" let-curPage="curPage" let-offset="offset">
      <div class="page-count" [ngStyle]="{'text-align':'right'}">
        <ngx-datatable-pager-simple [iconPrev]="iconPrev" [iconNext]="iconNext"
          [page]="curPage" [size]="pageSize" [datatable]="datatable" [count]="count" (change)="datatable.onFooterPage($event)" class="datatable-pager">
        </ngx-datatable-pager-simple>
        <span *ngIf="count>=0">
          {{'当前 '+((datatable.rows&&datatable.rows.length > 0)?((offset||0)*pageSize+1):((offset||0)*pageSize))+' - '+((offset+1)*pageSize > count?count:((offset+1)||1)*pageSize)+' /'+count+' 行'}}
        </span>
        <button *ngIf="!(count>=0)" (click)="trggerDisplayNumber()" type="button" class="btn m-btn--pill btn-secondary btn-sm">显示条数</button>
      </div>
    </ng-template>`
})
export class NgxDatatableFooterSimpleComponent implements OnInit {

  @ViewChild(TemplateRef)
  set template(val: TemplateRef<any>) {
    this._template = val;
    this.update();
  }
  get template(): TemplateRef<any> {
    return this._template;
  }

  @Input() count: number;
  @Input() iconPrev: string = 'fa fa-angle-left';
  @Input() iconNext: string = 'fa fa-angle-right';

  @Input()
  set datatable(val: DatatableComponent) {
    this._datatable = val;
    this.update();
  }
  get datatable(): DatatableComponent {
    return this._datatable;
  }

  @Output() display = new EventEmitter();

  private _template: TemplateRef<any>;
  private _datatable: DatatableComponent;

  constructor() {
  };

  ngOnInit() {
  };

  trggerDisplayNumber() {
    this.display.emit();
  };

  private update(): void {
    if (this._datatable && this._template
      && (!this._datatable.footer || !this._datatable.footer.template)) {
      if (this._datatable.footer) {
        this._datatable.footer.template = this._template;
      } else {
        this._datatable.footer = {
          footerHeight: this._datatable.footerHeight,
          totalMessage: this._datatable.messages.totalMessage,
          selectedMessage: this._datatable.messages.selectedMessage,
          pagerLeftArrowIcon: '',
          pagerRightArrowIcon: '',
          pagerPreviousIcon: '',
          pagerNextIcon: '',
          template: this._template
        };
      }
    }
  };
}
