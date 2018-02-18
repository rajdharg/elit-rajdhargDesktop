import {Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `<input type="text" value={{msg}} />                  <!--property binding using curly bracket-->
            <input type="text" [value]=msg />                       <!--property binding using square bracket-->
            <input type="text" [value]=counter /><br/>
            <span [innerText]=counter></span>
            <input type="button" (click)="increment()" value="Counter Increment"/>              <!--2 way binding-->
    `
})

export class AppCounterComponent {
    msg = "This is property binding";
    counter = 0;

    increment(){
        this.counter++;
    }
}