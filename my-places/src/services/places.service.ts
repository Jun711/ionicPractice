export class PlacesService {
	private places: {title: string}[] = [];

	addPlace(place: {title: string}) {
		this.places.push(place);
	}

	getPlaces() {
		// slicing will create a new copy
		return this.places.slice();
	}

}