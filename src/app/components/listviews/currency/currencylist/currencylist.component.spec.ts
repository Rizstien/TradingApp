import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistComponent } from './currencylist.component';

describe('CurrencylistComponent', () => {
  let component: CurrencylistComponent;
  let fixture: ComponentFixture<CurrencylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
