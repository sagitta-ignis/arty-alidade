import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Spotter } from '../../../assets/prototype-data';

@Component({
  selector: 'ali-spotter-dialog',
  templateUrl: './spotter-dialog.component.html',
  styleUrls: ['./spotter-dialog.component.scss']
})
export class SpotterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SpotterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public spotter: Spotter) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
