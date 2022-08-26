import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab2Page {
  
  ladA : string
  ladB : string
  ladC : string
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

  
  area_3(){
    var LadoA = parseFloat(this.ladA)
    var LadoB = parseFloat(this.ladB)
    var LadoC = parseFloat(this.ladC)
    var sp = (LadoA + LadoB + LadoC) / 2
    var area = (sp*(sp - LadoA)*(sp - LadoB)*(sp - LadoC))**(0.5) //.toFixed(2)
    this.saida = area.toString()

    this.presentAlert()
  }

}
