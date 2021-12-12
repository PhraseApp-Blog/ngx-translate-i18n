import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousExampleComponent } from './miscellaneous-example.component';

describe('MiscellaneousExampleComponent', () => {
  let component: MiscellaneousExampleComponent;
  let fixture: ComponentFixture<MiscellaneousExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscellaneousExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
