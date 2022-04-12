import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmberPizzaComponent } from './amber-pizza.component';

describe('AmberPizzaComponent', () => {
  let component: AmberPizzaComponent;
  let fixture: ComponentFixture<AmberPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmberPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmberPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
