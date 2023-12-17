# Pizza Store Front End

Pizza Store Front End is an Angular front end application over [Pizza Store API](https://github.com/psachdev6375/devcapsule/tree/master/services). It mimics the existing [AngularJS front end application](https://github.com/psachdev6375/devcapsule/tree/master/ui).

## Screenshots

### Pizza bases grid view
![screenshots](pizza-bases-grid-view.png)

### Pizza bases list view
![screenshots](pizza-bases-list-view.png)

### Add a new pizza base
![screenshots](pizza-bases-add-new.png)

### Filter pizza bases
![screenshots](pizza-bases-filter.png)

## Screen layout

```
<my-app>
    <pizza-store>
        <base>
            <base-grid>
            </base-grid>

            <base-list>
            </base-list>
 
            <add-base>
            </add-base>
        </base>

        <topping>
        </topping>
 
        <pizza>
        </pizza>

        <order>
        </order>
    </pizza-store>
</my-app>
```

## Prerequisites

- [Pizza Store API](https://github.com/psachdev6375/devcapsule/tree/master/services) should be set up and running at http://localhost:8080/
- Node.js and npm should be installed. The application is being currently developed on a Windows machine with portable edition of [Node.js v4.8.0](https://nodejs.org/dist/v4.8.0/node-v4.8.0-win-x86.zip) and npm v4.3.0.


## Project setup
- [Download](https://github.com/sanjeevsachdev/pizza-store-front-end/archive/master.zip) the source and unzip in any directory on your machine.
- Open a command prompt and run the following commands  
Setup environment for Node.js and npm:
```shell
<NODE_HOME>\nodevars.bat
```
Navigate to project home directory (this is where you will find package.json file).
```shell
cd <PROJECT_HOME>
```
Install packages required for the application:
```shell
npm install
```
Build and run the application:
```shell
 npm run webpack-serve
 ```
