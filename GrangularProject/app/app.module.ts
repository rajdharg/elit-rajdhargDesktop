import {NgModule} from '@angular/core'
import {platformBrowser, BrowserModule} from '@angular/platform-browser'
import {AppHomeComponent} from './app.home.component'
import {AppNavbarComponent} from './navbar/app.navbar.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppHomeComponent,
        AppNavbarComponent
    ],
    bootstrap: [AppHomeComponent]
})
export class AppModule{}