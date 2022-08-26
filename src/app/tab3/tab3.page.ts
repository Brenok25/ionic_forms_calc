import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab3Page {

  base : string
  alt : string
  saida: string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A area do triangulo é: ',
      subHeader: "",
      message: this.saida,
      buttons: ['fechar'],
    });

    await alert.present();
  }

  
  area_2(){
    var bas = parseFloat(this.base)
    var h = parseFloat(this.alt)
    var area = ((bas * h) / 2)
    this.saida = area.toString()

    this.presentAlert()
  }
}
