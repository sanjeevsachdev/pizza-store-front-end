import { Component, OnInit } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

import { AddBaseComponent } from './add-base.component';
import { Base } from './base';
import { BaseService }  from './base.service';

@Component({
  selector: 'base',
  template: `
    <md-card>
        <md-input-container>
            <input mdInput placeholder="Search bases" [(ngModel)]="baseFilter.name" >
        </md-input-container>

        <button md-raised-button (click)="openAddBaseDialog()" md-tooltip="Add a new base" color="accent">Add Base</button>

        <md-button-toggle-group #group="mdButtonToggleGroup" (change)="viewType = group.value">
            <md-button-toggle value="grid" md-tooltip="Show list view">
                <md-icon>view_module</md-icon>
            </md-button-toggle>
            <md-button-toggle value="list" md-tooltip="Show grid view">
                <md-icon>view_list</md-icon>
            </md-button-toggle>
        </md-button-toggle-group>
    </md-card>

    <md-card [ngSwitch]="viewType">
        <div *ngSwitchCase="'grid'"> 
            <base-grid [bases]="bases" [baseFilter]="baseFilter" > </base-grid>
        </div>
        <div *ngSwitchCase="'list'">
            <base-list [bases]="bases" [baseFilter]="baseFilter" > </base-list>
        </div>
        <div *ngSwitchDefault>
            <base-grid [bases]="bases" [baseFilter]="baseFilter" > </base-grid>
        </div>
    </md-card>
  `,
  providers: [ BaseService ]
})
export class BaseComponent implements OnInit {
    bases: Base[];
    baseFilter: any = { "name": '' };
    viewType: string = 'grid';
    errorMessage: string;

    constructor (private dialog: MdDialog, private baseService: BaseService) {}

    ngOnInit(): void {
        this.getBases();
    }

    openAddBaseDialog() {
        let dialogRef = this.dialog.open(AddBaseComponent);
        dialogRef.afterClosed()
                 .subscribe(
                    result => {this.addBase(result);});
    }

    getBases() {
        this.baseService.getBases()
                        .subscribe(
                            bases => this.bases = bases,
                            error =>  this.errorMessage = <any>error);
    }

    addBase(newBase: Base) {
        if (!newBase) { 
            return; 
        }
        
        this.baseService.createBase(newBase)
                        .subscribe(
                            base => this.bases.push(base),
                            error =>  this.errorMessage = <any>error);        

    }
}