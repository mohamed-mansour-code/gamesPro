import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoadComponent } from './card-load.component';

describe('CardLoadComponent', () => {
  let component: CardLoadComponent;
  let fixture: ComponentFixture<CardLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
