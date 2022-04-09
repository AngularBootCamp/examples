import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';

const config: SocketIoConfig = {
  url: 'http://localhost:8085',
  options: {}
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  bootstrap: [AppComponent]
})
export class AppModule {}
