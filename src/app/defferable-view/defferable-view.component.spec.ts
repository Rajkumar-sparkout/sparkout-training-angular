import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferableViewComponent } from './defferable-view.component';

describe('DefferableViewComponent', () => {
  let component: DefferableViewComponent;
  let fixture: ComponentFixture<DefferableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferableViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefferableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
