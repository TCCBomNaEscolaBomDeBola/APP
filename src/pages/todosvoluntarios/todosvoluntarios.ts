import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { VoluntarioProvider, Voluntario } from '../../providers/voluntario/voluntario';
import { RestProvider } from '../../providers/rest/rest';
import { CriaVoluntarioPage } from '../cria-voluntario/cria-voluntario';

@Component({
  selector: 'page-todosvoluntarios',
  templateUrl: 'todosvoluntarios.html',
})
export class TodosvoluntariosPage {

  model: Voluntario;
  voluntarios: any;
  searchText: string = null;
  modelo: any[] = [];
  user: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private voluntarioProvider: RestProvider,
    private restProvider: RestProvider,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.model = new Voluntario();


  }
  ionViewDidEnter() {

    let loading = this.loadingCtrl.create({
      content: 'Aguarde...',
    });

    loading.present();
    this.voluntarioProvider.getVoluntario().subscribe(
      (voluntario)=>{
        loading.dismiss();
        this.voluntarios = voluntario;
      },
      () =>{
       let alert = this.alertCtrl.create({
        message: 'Erro ao carregar Voluntários',  
        title: 'Erro',
        subTitle:'Não foi possível carregar os Volutários',
        buttons :['OK'],

       });
       loading.dismiss();
       alert.present();


       
      }
    );
   /* this.restProvider.getVoluntario() 
      .then(data => {
        this.voluntarios = data;
      loading.dismiss();
      this.voluntarios = data;

      });
      () => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Não foi possivel. Tente novamente.',
          buttons: ['Ok']
        })
        loading.dismiss();
        alert.present();
      }*/
  }




  deletarVoluntario(voluntario: Voluntario) {
    let alert = this.alertCtrl.create({

      title: 'Deletar Voluntário',
      message: 'Deseja realmente deletar este voluntário?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'DELETAR',
          handler: () => {
            this.restProvider.removeVoluntario(voluntario.Id);
            this.toast.create({ message: 'Voluntário removido com sucesso.', duration: 1000, position: 'botton' }).present();
          }
        }
      ]

    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    alert.present();
  }

  adicionarVoluntario() {
    this.navCtrl.push(CriaVoluntarioPage);
  }

  selecionar(voluntario: Voluntario) {
    let alert = this.alertCtrl.create({
      title: 'Informações do Voluntário',
      subTitle: `Id: ${voluntario.Id}<br>
                 Nome: ${voluntario.Nome} <br>
                 E-mail: ${voluntario.Email} <br>
                 Contato: ${voluntario.Contato} <br>
  `,
      buttons: ['Ok']

    });
    alert.present();
  }




}





