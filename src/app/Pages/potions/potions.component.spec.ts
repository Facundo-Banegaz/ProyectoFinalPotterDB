import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionsComponent } from './potions.component';

describe('PotionsComponent', () => {
  let component: PotionsComponent;
  let fixture: ComponentFixture<PotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
