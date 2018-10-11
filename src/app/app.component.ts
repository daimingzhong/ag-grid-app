import { Component } from '@angular/core';
import {Local} from 'protractor/built/driverProviders';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        new LocalData('Toyota', 'Celica', 35000),
        new LocalData('Ford', 'Celica', 32000),
        new LocalData('Porsche', 'Celica', 35000),

        // LocalData.load('Toyota', 'Celica', 35000),
        // LocalData.load('Ford', 'Celica', 32000),
        // LocalData.load('Porsche', 'Celica', 35000),
    ];


}

class LocalData{
    make: string;
    model: string;
    price: number;

    constructor(make: string, model: string, price: number) {
        this.make = make;
        this.model = model;
        this.price = price;
    }


    // static load (make: string, model: string, price: number) {
    //     const localData = new LocalData();
    //     localData.make = make;
    //     localData.model = model;
    //     localData.price = price;
    //     return localData;
    // }
}

interface LocalData {
    make: string;
    model: string;
    price: number;
    ha: () => void;
}


const makeLocalData = (make: string, model: string, price: number) => {
    return {
        make, model, price,
    } as LocalData;
};


const data = makeLocalData('1', '', 1);
