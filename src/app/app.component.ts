import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import { field, Spotter, Target, Artillery, spotters, targets, artilleries } from '../assets/prototype-data';

@Component({
  selector: 'ali-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public get targets() {
    return targets;
    // return Array.from(field.values()).filter(p => p instanceof Target).map(p => p as Target);
  }

  public get spotters() {
    return spotters;
    // return Array.from(field.values()).filter(p => p instanceof Spotter).map(p => p as Spotter);
  }

  public get artilleries() {
    return artilleries;
    // return Array.from(field.values()).filter(p => p instanceof Artillery).map(p => p as Artillery);
  }

  public artilleryTypes = [
    'Mortar',
    'FieldArtillery',
    'Gunboat',
    'Tank',
    'Howitzer'
  ];

  public currentSpotter: Spotter = spotters[0];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
