import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage( { name: 'edit-info-page'})
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage {

  photo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cropService: Crop, private imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditInfoPage');
  }

  openImagePicker(){
    let options= {
      maximumImagesCount: 1,
    }
    
    this.imagePicker.getPictures(options)
    .then((results) => {
      this.reduceImages(results).then(() => {
        console.log('all images cropped!!');
      });
    }, (err) => { console.log(err) });
  }

reduceImages(selected_pictures: any) : any{
    return selected_pictures.reduce((promise:any, item:any) => {
      return promise.then((result) => {
        return this.cropService.crop(item, {quality: 75})
				.then(cropped_image => this.photo = cropped_image);
      });
    }, Promise.resolve());
  }

}
