import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productcomponent } from './productcomponent';

describe('Productcomponent', () => {
  let component: productcomponent;
  let fixture: ComponentFixture<productcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [productcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(productcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
