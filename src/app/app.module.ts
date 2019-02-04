import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { PainelComponent }   from './painel/painel.component';
import { ContaComponent }   from './conta/conta.component';
import { RecebiveisComponent }   from './recebiveis/recebiveis.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ContaComponent,
    RecebiveisComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
