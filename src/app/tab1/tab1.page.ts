import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {

  ladA : string
  ladB : string
  ladC : string
  saida : string
  tipo : string
  imagem : any = 'assets/5825587.png'
  
  constructor() {}

  verif(){
    var LadoA = parseFloat(this.ladA)
    var LadoB = parseFloat(this.ladB)
    var LadoC = parseFloat(this.ladC)
    
    if (LadoA + LadoB > LadoC && LadoA + LadoC > LadoB && LadoB + LadoC > LadoA){

      if (LadoA == LadoB && LadoA == LadoC){
        this.saida = 'É um triangulooooooooooooooo'
        this.tipo = 'Equilatero'
        this.imagem = 'assets/13384.png'
      }

      else if (LadoA != LadoB && LadoA != LadoC && LadoB != LadoC){
        this.saida = 'É um triangulooooooooooooooo'
        this.tipo = 'Escaleno'
        this.imagem = 'assets/OIP.jfif'
      }

      else{
        this.saida = 'É um triangulooooooooooooooo'
        this.tipo = 'Isóceles'
        this.imagem = 'assets/iso.jfif'
      }

    }
    else{
      this.saida = ' Não é um triangulooooooooooooooo'
      this.tipo = ''
      this.imagem = 'assets/5825587.png'
    }
    
    
  }
  
  // if (this.ladA == this.ladB && this.ladA == this.ladC){
  //   // equilatero
  // }
}
