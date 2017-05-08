import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
	location: any;

	constructor(private navCtrl: NavController, 
				  public navParams: NavParams,
				  private placesService: PlacesService,
				  private geolocation: Geolocation) {
	}

	onAddPlace(value: {title: string}) {
		this.placesService.addPlace(value);
		console.log(this.navCtrl.getViews())
		this.navCtrl.pop();
		//this.form.value = "";
	}

	onLocateUser() {
		let options = {
		  enableHighAccuracy: false,
		  timeout: 5000,
		  maximumAge: 0
		};

		this.geolocation.getCurrentPosition(options)
			.then(
				(location) => {
					console.log(location.coords.latitude);
					console.log(location.coords.longitude);
					this.location = location;
				}
			)
			.catch(
				(error) => console.log('An error ocurrerd!', error)
			)
	}
}
