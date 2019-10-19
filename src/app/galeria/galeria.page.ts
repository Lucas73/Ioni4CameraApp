import { Component, OnInit } from '@angular/core';
import { MostrarFotoPage } from '../mostrar-foto/mostrar-foto.page';
import { ModalController, Events } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})

export class Galeria{
    
  content = []

  constructor(){}

  agregarFoto(foto : string){
      this.content.push(foto)
  }

}

export class GaleriaPage implements OnInit {

  galeria = new Galeria ()

  constructor(public modalController: ModalController, public events: Events) { 
    console.log('Entrando en galeria')
    this.events.subscribe('data:created', (data) => {
      console.log('Foto obtenida');
      console.log(data);
      this.galeria.agregarFoto(data)
    });
  }

  ngOnInit() {

  }

  async abrirFoto(src){
    const modal = await this.modalController.create({
      component: MostrarFotoPage,
      componentProps: {
        imagen: src
      }
    });
    return await modal.present()
  }
  
}

