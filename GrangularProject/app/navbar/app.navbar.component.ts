import {Component} from '@angular/core'
import {AppNavbarTabs} from './app.const.navbartabs'

@Component({
    selector: 'app-navbar',
    templateUrl: './app/navbar/app.navbar.component.html',
})
export class AppNavbarComponent{
    navtabs = AppNavbarTabs;
}
