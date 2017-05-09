import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Place } from '../model/place.model';

@Injectable()
export class PlacesService {
	// private places: {title: string, location: {lat: number, lng: number}}[] = [];
	private places: Place[] = [];

	constructor(private storage: Storage) {
		storage.ready().then(() => {
			console.log('storage is ready')
		});
	}

	addPlace(place: Place) {
		this.places.push(place);
		this.storage.set('places', this.places);
	}

	getPlaces() {
		return this.storage.get('places')
			.then(
				(places) => {
					// at the beginning places would be undefined
					this.places = places == null ? [] : places;
					return this.places.slice();
				});

		// slicing will create a new copy
		// return this.places.slice();
	}

}