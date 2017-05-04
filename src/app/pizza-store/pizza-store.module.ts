import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { PizzaStoreComponent }  from './pizza-store.component';
import { BaseComponent }  from './base.component';
import { BaseListComponent }  from './base-list.component';
import { BaseGridComponent }  from './base-grid.component';
import { AddBaseComponent }  from './add-base.component';
import { BaseService }  from './base.service';
import { ToppingListComponent }  from './topping-list.component';
import { PizzaListComponent }  from './pizza-list.component';
import { OrderListComponent }  from './order-list.component';

const pizzaStoreRoutes: Routes = [
    {path: 'base', component:BaseComponent},
    {path: 'topping', component:ToppingListComponent},
    {path: 'pizza', component:PizzaListComponent},
    {path: 'order', component:OrderListComponent}
];

@NgModule({
  imports: [ CommonModule, FormsModule, RouterModule.forRoot(pizzaStoreRoutes), HttpModule, MaterialModule.forRoot(), BrowserAnimationsModule, Ng2FilterPipeModule ],
  declarations: [ PizzaStoreComponent, BaseComponent, BaseListComponent, BaseGridComponent, AddBaseComponent, ToppingListComponent, PizzaListComponent, OrderListComponent ],
  exports: [ PizzaStoreComponent ],
  entryComponents: [AddBaseComponent]
})
export class PizzaStoreModule { }