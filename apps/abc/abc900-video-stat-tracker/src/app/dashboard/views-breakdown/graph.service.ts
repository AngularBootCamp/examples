import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';
import { FilterOptions, Video } from '../dashboard.types';

import { GraphData, getGraphData } from './graph-helper';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  graphData: Observable<GraphData>;

  constructor(dashboardService: DashboardService) {
    this.graphData = combineLatest([
      dashboardService.currentVideo,
      dashboardService.filterForm.valueChanges.pipe(
        startWith(dashboardService.filterForm.value as FilterOptions)
      )
    ]).pipe(
      filter(([video]) => !!video),
      map(([video, formValue]) =>
        getGraphData(video as Video, formValue)
      )
    );
  }
}
