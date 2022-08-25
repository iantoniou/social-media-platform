import { Component } from '@angular/core';
import { sidenavList } from './sidenav-list/sidenav.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media-platform';
  sidenavList = sidenavList;
}
