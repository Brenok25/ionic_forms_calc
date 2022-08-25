import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab2Page {

  num1 : '1'
  num2 : '2'
  saida: string

  constructor(private alertController: AlertController) {}

  async presentAlert(op : string, name:string) {
    const alert = await this.alertController.create({
      header: 'A area do triangulo é: ',
      subHeader: this.num1 + op + this.num2,
      message: this.saida,
      buttons: ['fechar'],
    });

    await alert.present();
  }

  
  soma(){
    var op = "+"
    var name = "Soma"
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    var result = n1 + n2
    this.saida = result.toString()

    this.presentAlert(op, name)
  }

}
