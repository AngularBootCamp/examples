import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from './dashboard.service';
import { Video } from './dashboard.types';

@Component({
  selector: 'vst-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  videoList: Observable<Video[]>;
  selectedVideo: Observable<Video | undefined>;

  constructor(private ds: DashboardService) {
    this.videoList = ds.videoList;
    this.selectedVideo = ds.currentVideo;
  }

  videoChanged(video: Video) {
    this.ds.updateVideo(video);
  }
}
