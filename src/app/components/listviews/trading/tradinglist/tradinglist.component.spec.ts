import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradinglistComponent } from './tradinglist.component';

describe('TradinglistComponent', () => {
  let component: TradinglistComponent;
  let fixture: ComponentFixture<TradinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradinglistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
