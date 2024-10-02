import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardsComponent } from './container-cards.component';

describe('ContainerCardsComponent', () => {
  let component: ContainerCardsComponent;
  let fixture: ComponentFixture<ContainerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
