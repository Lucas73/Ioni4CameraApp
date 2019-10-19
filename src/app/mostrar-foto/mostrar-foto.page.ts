import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-foto',
  templateUrl: './mostrar-foto.page.html',
  styleUrls: ['./mostrar-foto.page.scss'],
})
export class MostrarFotoPage implements OnInit {
  public imagen : string

  constructor(private modalController: ModalController ) { 
    
  }

  ngOnInit() {
    console.log(this.imagen)
  }

  dismissModal(){
    this.modalController.dismiss()
  }
}

