import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService {
	private places: {title: string}[] = [];

	constructor(private storage: Storage) {
		storage.ready().then(() => {
			console.log('storage is ready')
		});
	}

	addPlace(place: {title: string}) {
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