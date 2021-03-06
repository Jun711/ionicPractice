import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Place page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class Place {
	lat: number;
	lng: number;

  	constructor(private viewCtrl: ViewController,
  				private navParams: NavParams) {
  		this.lat = navParams.data.location.lat;
  		this.lng = navParams.data.location.lng;
  	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Place');
	}

	onDismiss() {
		// tell ionic to remove this page from the stack of pages
		// but modal is not on the stack as it is an overlay
		this.viewCtrl.dismiss();
	}
}
