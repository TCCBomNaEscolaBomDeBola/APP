import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { VoluntarioProvider, Voluntario } from '../../providers/voluntario/voluntario';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { TodosvoluntariosPage } from '../todosvoluntarios/todosvoluntarios';

@IonicPage()
@Component({
  selector: 'page-cria-voluntario',
  templateUrl: 'cria-voluntario.html',
})
export class CriaVoluntarioPage {

  model: Voluntario;
  voluntarioForm: any = {};
  tabBarElement: any;
  splash = true;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    formBuilder: FormBuilder,
    private restProvider: RestProvider,
    public voluntarioProvider: VoluntarioProvider,
    public alertCtrl: AlertController) {

    this.model = new Voluntario();


    this.voluntarioForm = formBuilder.group({

      Nome: ['', Validators.required],
      Contato: ['', Validators.required],
      Login: ['', Validators.required],
      Senha: ['', Validators.required],
      Email: ['', Validators.required]

    });

  }
  ionViewDidLoad() { }


  salvar() {
    this.restProvider.insereVoluntario(this.model).then((result) => {
      this.toast.create({ message: 'Registro enviado com sucesso.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.push(TodosvoluntariosPage);

    }, (err) => {
      this.toast.create({ message: 'Não foi possivel enviar o registro ' + this.model.Nome, duration: 4000, position: 'botton' }).present();
    })
  }

}