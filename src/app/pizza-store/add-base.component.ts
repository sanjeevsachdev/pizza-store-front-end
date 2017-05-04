import { Component, Optional } from '@angular/core';

import { MdDialogRef } from '@angular/material';

import { Base } from './base';

@Component({
  selector: 'add-base',
  template: `
    <md-card>
        Add Base
    </md-card>

    <md-card>
        <md-input-container>
            <input mdInput placeholder="Base Name" [(ngModel)]="base.name" >
        </md-input-container>
    </md-card>

    <md-card>
        <button md-raised-button (click)="dialogRef.close()" >Close</button>
        <button md-raised-button (click)="dialogRef.close(base)" color="accent">Save Base</button>
    </md-card>
  `
})
export class AddBaseComponent {
    base: Base = {  
                    "id": 0,
                    "name": ''
                  };

    constructor(@Optional() public dialogRef: MdDialogRef<AddBaseComponent>) {}
}