import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";

@IonicPage()
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

	onOpenPlace() {
		this.modalCtrl.create('Place').present();
	}
}
