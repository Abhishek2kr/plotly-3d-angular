import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-plotly-three-d-model',
  templateUrl: './plotly-three-d-model.component.html',
  styleUrls: ['./plotly-three-d-model.component.scss'],
})
export class PlotlyThreeDModelComponent implements OnInit, OnChanges {
  @ViewChild('plotlyChart', { static: true }) plotlyChart!: ElementRef;

  @Input() plotData: any;
  @Input() plotLayout: any;

  defaultData = [
    {
      type: 'isosurface',
      x: [0, 0, 0, 0, 1, 1, 1, 1],
      y: [0, 1, 0, 1, 0, 1, 0, 1],
      z: [1, 1, 0, 0, 1, 1, 0, 0],
      value: [1, 2, 3, 4, 5, 6, 7, 8],
      isomin: 2,
      isomax: 6,
      colorscale: 'Reds',
    },
  ];

  defaultLayout = {
    margin: { t: 0, l: 0, b: 0 },
    scene: {
      camera: {
        eye: {
          x: 1.88,
          y: -2.12,
          z: 0.96,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.createPlot();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plotData'] || changes['plotLayout']) {
      this.createPlot();
    }
  }

  private createPlot(): void {
    const data = this.plotData || this.defaultData;
    const layout = this.plotLayout || this.defaultLayout;

    Plotly.newPlot(this.plotlyChart.nativeElement, data, layout, {
      showSendToCloud: true,
    });
  }
}
