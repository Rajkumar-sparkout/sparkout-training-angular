import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidDesignComponent } from './solid-design.component';

describe('SolidDesignComponent', () => {
  let component: SolidDesignComponent;
  let fixture: ComponentFixture<SolidDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
