import { Component, Input } from '@angular/core';

import { Base } from './base';

@Component({
  selector: 'base-grid',
  template: `
    <md-grid-list cols="3" rowHeight="150px">
        <md-grid-tile *ngFor="let base of bases | filterBy: baseFilter" [colspan]="1" [rowspan]="1" [style.background]="'#fce4ec'">
          <md-grid-tile-header>
          </md-grid-tile-header>
          <h3 md-line>{{base.name}}</h3>
        </md-grid-tile>
    </md-grid-list>    
  `
})
export class BaseGridComponent {
    @Input() bases: Base[];
    @Input() baseFilter: any;
}