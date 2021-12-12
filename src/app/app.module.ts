import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgxTranslateModule } from './translate/translate.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MiscellaneousExampleComponent } from './miscellaneous-example/miscellaneous-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeedbackComponent,
    MiscellaneousExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxTranslateModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: FeedbackComponent, pathMatch: 'full' },
        { path: 'miscellaneous-example', component: MiscellaneousExampleComponent },
        { path: '**', component: FeedbackComponent },
      ],
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
