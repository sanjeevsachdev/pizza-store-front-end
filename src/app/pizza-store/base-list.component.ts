import { Component, Input } from '@angular/core';

import { Base } from './base';

@Component({
  selector: 'base-list',
  template: `
    <md-list>
        <md-list-item>
          <h2 md-line>Base Name</h2>
        </md-list-item>
        <md-divider></md-divider>
        <md-list-item *ngFor="let base of bases | filterBy: baseFilter">
          <h3 md-line>{{base.name}}</h3>          
        </md-list-item>
    </md-list>    
  `
})
export class BaseListComponent {
    @Input() bases: Base[];
    @Input() baseFilter: any;
}