import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


//Poner en escuchar el store de redux
import {StoreModule}  from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TableUserComponent } from './page/home/table-user/table-user.component';
import { ChangeBockStatusComponent } from './page/home/change-bock-status/change-bock-status.component';
import { ChangeEnableStatusComponent } from './page/home/change-enable-status/change-enable-status.component';
import { ModalsComponent } from './page/home/modals/modals.component';
import { CrearComponent } from './page/home/Modals/crear/crear.component';
import { EditComponent } from './page/home/Modals/edit/edit.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { environment } from 'src/environments/environment.prod';
import { EditInformationComponent } from './page/home/edit-information/edit-information.component';
import { DeleteUserComponent } from './page/home/delete-user/delete-user.component';
import { DeleteComponent } from './page/home/delete/delete.component';
import { appReducer } from './app.reducer';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableUserComponent,
    ChangeBockStatusComponent,
    ChangeEnableStatusComponent,
    ModalsComponent,
    CrearComponent,
    EditComponent,
    EditInformationComponent,
    DeleteUserComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer), //configuración redux
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  entryComponents:[CrearComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
