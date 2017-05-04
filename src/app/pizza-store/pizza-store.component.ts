import { Component } from '@angular/core';

@Component({
  selector: 'pizza-store',
  template: `
    <md-toolbar color="primary">
        <div style="text-align: center;"> 
            <md-icon>local_pizza</md-icon>
            Pizza Store 
        </div>
    </md-toolbar>
    
    <md-card>
      <md-tab-group>

        <md-tab label="BASE">
          <base/>
        </md-tab>
        
        <md-tab label="TOPPING">
          <h3>Topping component to be done on the lines of Base component...coming soon...</h3>
        </md-tab>
        
        <md-tab label="PIZZA">
          <h3>Pizza component to be done on the lines of Base component...coming soon...</h3>
        </md-tab>

        <md-tab label="ORDER">
          <h3>Order component to be done on the lines of Base component...coming soon...</h3>
        </md-tab>

      </md-tab-group>
    </md-card>
  `
})
export class PizzaStoreComponent  {  }