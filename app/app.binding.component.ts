import {Component, AfterViewChecked} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import { AnonymousSubscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-binding',
    templateUrl: './app/app.binding.component.html',
    styleUrls: ['./app/app.binding.component.css']
})

export class AppBindingComponent{
    msg = "This is property binding";
    counter = 0;
    date = new Date();

    increment(){
        this.counter++;
    }

    getDate(){
        this.date = new Date();
    }
    
    

}