import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { field, Role, Spotter, Target, Artillery, spotters, targets, artilleries, ArtilleryType } from '../../assets/prototype-data';
import { SpotterDialogComponent } from '../positionables/spotter-dialog/spotter-dialog.component';

@Component({
  selector: 'ali-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.scss']
})
export class CoordinatesComponent {

  public tabs = [
    { label: 'Targets', data: { positionables: targets, role: Role.Target}},
    { label: 'Artilleries', data: { positionables: artilleries, role: Role.Artillery}}
  ];

  public get Role() { return Role; }

  public get spotters() {
    return spotters;
  }

  public artilleryTypes = [
    'Mortar',
    'FieldArtillery',
    'Gunboat',
    'Tank',
    'Howitzer'
  ];

  public currentSpotter: Spotter;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  public selectSpotter(spotter: Spotter) {
    this.currentSpotter = spotter;
  }

  public openPositionableDialog(role: Role) {

    let positionableDialog;
    let positionable;
    switch (role) {
      case Role.Spotter:
        positionableDialog = SpotterDialogComponent;
        positionable = { name: '' };
        break;
    }

    if (!positionableDialog) { return; }

    const dialogRef = this.dialog.open(positionableDialog, {
      width: '250px',
      data: positionable
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return; }
      switch (role) {
        case Role.Spotter:
          this.addSpotter(result.name);
          break;
      }
    });
  }

  private addTarget(name: string, movable?: boolean) {
    if (!name) { return; }
    const id = targets.sort((a, b) => a.id - b.id)[0] + 1;
    targets.push(new Target(id, name, movable || true));
  }

  private addArtillery(name: string, type?: ArtilleryType, shells?: number) {
    if (!name) { return; }
    const id = artilleries.sort((a, b) => a.id - b.id)[0] + 1;
    artilleries.push(new Artillery(id, name, type || ArtilleryType.FieldArtillery, shells || 0));
  }

  private addSpotter(name: string) {
    if (!name) { return; }
    const id = this.spotters.sort((a, b) => a.id - b.id)[0] + 1;
    this.spotters.push(new Spotter(id, name));

    this.snackBar.open(`Added ${name} as a spotter`, null, {
      horizontalPosition: 'center',
      duration: 2000,
    });
  }
}
