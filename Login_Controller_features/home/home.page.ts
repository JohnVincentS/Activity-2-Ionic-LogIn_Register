import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, NavController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  username: string = "";
  password: string = "";
  ActionSheetController: any;


  constructor(public navCtrl: NavController, public loadingc:LoadingController, public alertcontroler: AlertController, public toastcontroller: ToastController, public actionsheet: ActionSheetController, public modalcontroller: ModalController) {}

  async loading(){
    let loading = this.loadingc.create({
      spinner: "bubbles"
    });
    (await loading).present();
    setTimeout(async ()=> {
      (await loading).dismiss()
    }, 2000)
  }
  
  
  gotoLogin(){

  }

  async presentAlert(){
    const alert = document.createElement('ion-alert')
    alert.header = "Alert";
    alert.subHeader = "Important message";
    alert.message = "This is an alert";
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }

  async actionSheet(){
    const actionSheet = await this.ActionSheetController.create({
      header: 'Actions',
      subHeader: 'Actions to play with',
      cssClass: 'action-sheet',
      buttons: [{
        text: 'Yes',
        handler: ()=>{
          actionSheet.dismiss({
            clicked: 'YES'
          })
        }
      },
      {
        text: 'No',
        role: 'cancel'
      }]
    });
    actionSheet.OnDidDismiss()
      .then((result)=>{

        console.log('result');
        if(result && result.data){
          console.log('You have recieved results:', result.data);
        }
      })
    return await actionSheet.present();
  }
  openModal(){
    
    let modal = this.modalController.create(HomePage);

     modal.present();
  }

  async showToast() {
    await this.toastcontroller.create({
      message: 'This is a toast',
      duration: 3000,
      position: 'top',
      buttons:[{
        text: 'OK',
        handler: () =>{
          console.log('Okay clicked')
        }
      }]
    }).then(res => res.present());
  }
}
