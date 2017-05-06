import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";

/**
 * Generated class for the NewPlace page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
  // queries: {
  //       form: new ViewChild('f')
  //   }
})
export class NewPlace {
	// form;

	constructor(private navCtrl: NavController, 
				  public navParams: NavParams,
				  private placesService: PlacesService) {
	}

	onAddPlace(value: {title: string}) {
		this.placesService.addPlace(value);
		console.log(this.navCtrl.getViews())
		this.navCtrl.pop();
		//this.form.value = "";
	}
}
