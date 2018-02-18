import {Component} from '@angular/core'
import {AppBindingComponent} from './app.binding.component'
import {AppCounterComponent} from './app.counter.component'

@Component({
    selector: 'app-home',
    template: `<app-binding></app-binding>
                <app-counter></app-counter>
    `
})
export class AppHomeComponent {

}