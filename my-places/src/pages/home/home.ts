import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";

import { Place } from '../../model/place.model';

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	places: {title: string}[] = [];

	constructor(
		public navCtrl: NavController,
		private placesService: PlacesService,
		private modalCtrl: ModalController) {
	}

	ionViewWillEnter() {
		// this.places = 
		this.placesService.getPlaces()
		.then(
			(places) => {
				this.places = places;
			}
		);
	}

	onLoadNewPlace() {
		this.navCtrl.push('NewPlace')
	}

	onOpenPlace(place: Place) {
		this.modalCtrl.create('Place', place).present();
	}
}
