import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlueBoxComponent } from './blue-box.component';
import { ChatComponent } from './chat.component';
import { HomeComponent } from './home.component';
import { NameComponent } from './name.component';
import { TaskComponent } from './task.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello/:name', component: NameComponent },
  { path: 'blue', component: BlueBoxComponent },

  { path: 'chat', component: ChatComponent, outlet: 'side' },
  { path: 'task', component: TaskComponent, outlet: 'side' }
];

@NgModule({
  declarations: [
    AppComponent,
    BlueBoxComponent,
    ChatComponent,
    HomeComponent,
    NameComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
