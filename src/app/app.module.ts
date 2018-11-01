import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CriaVoluntarioPage } from '../pages/cria-voluntario/cria-voluntario';
//import { InventarioPage } from '../pages/inventario/inventario';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite';
import { VoluntarioProvider } from '../providers/voluntario/voluntario';
import { BrMaskerModule } from 'brmasker-ionic-3';
import {TodosvoluntariosPage} from '../pages/todosvoluntarios/todosvoluntarios' ;

 
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CriaVoluntarioPage,
    TodosvoluntariosPage
 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CriaVoluntarioPage,
    TodosvoluntariosPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider, 
    SQLite,
    VoluntarioProvider,
 
  ]
})
export class AppModule {}
