import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamutNg6LibComponent } from './mamut-ng6-lib.component';

describe('MamutNg6LibComponent', () => {
  let component: MamutNg6LibComponent;
  let fixture: ComponentFixture<MamutNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamutNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamutNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
