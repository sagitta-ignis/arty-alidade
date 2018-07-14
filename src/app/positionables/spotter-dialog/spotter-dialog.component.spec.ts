import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterDialogComponent } from './spotter-dialog.component';

describe('SpotterDialogComponent', () => {
  let component: SpotterDialogComponent;
  let fixture: ComponentFixture<SpotterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
