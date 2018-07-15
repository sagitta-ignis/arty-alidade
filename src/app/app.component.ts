import { Component, OnDestroy, ChangeDetectorRef, HostBinding } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'ali-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  @HostBinding('class.sidenav-top-container') private _classSidenavTopContainer = true;
  @HostBinding('class.is-mobile') private _classIsMobile;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.onMediaChange();

    this._mobileQueryListener = () => {
      this.onMediaChange();
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private onMediaChange() {
    this._classIsMobile = this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
