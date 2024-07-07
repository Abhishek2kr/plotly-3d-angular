import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyThreeDModelComponent } from './plotly-three-d-model.component';

describe('PlotlyThreeDModelComponent', () => {
  let component: PlotlyThreeDModelComponent;
  let fixture: ComponentFixture<PlotlyThreeDModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotlyThreeDModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlyThreeDModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
