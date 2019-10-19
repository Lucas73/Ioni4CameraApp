import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  image: string = null;
  constructor(private camera: Camera, public events: Events, public file: File) {
  }
  foto(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
    this.camera.getPicture( options ).then(data => {
      let filename = data.substring(data.lastIndexOf('/')+1);
      let path =  data.substring(0,data.lastIndexOf('/')+1);
           //Utilizamos readAsDataURL para convertir el path local en una URL
            this.file.readAsDataURL(path, filename).then(
              res=> {
                  this.image = res  
                  //Publicamos la imagen
                  if(this.image != null){
                    console.log('Foto publicada')
                    this.events.publish('data:created', this.image);
                  }
                }
              );
      })
    .catch(error =>{
      console.error( error );
    });
  }
  
}
