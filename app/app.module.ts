import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppHomeComponent} from './app.home.component'
import {AppBindingComponent} from './app.binding.component'
import {AppCounterComponent} from './app.counter.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppHomeComponent,
        AppBindingComponent,
        AppCounterComponent
    ],
    bootstrap: [AppHomeComponent]
})
export class AppModule {}