import { Component } from '@angular/core';
//import { HomePage } from '../home/home';
import {TodosvoluntariosPage} from '../todosvoluntarios/todosvoluntarios' ;

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  tab1Root = TodosvoluntariosPage;
 
  constructor() {

  }
}
