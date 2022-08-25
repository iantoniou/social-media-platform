import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { IItem } from './item.interface';
import { LoaderService } from 'src/shared/services/loader.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  @Input() sidenavList!: IItem[];
  isLoading: boolean = false;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private loaderService: LoaderService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
      this.loaderService.getLoaderStatus().subscribe((isLoading: boolean)=> this.isLoading = isLoading);
  }

  // navigateTo(path: string){
  //    this.router.navigateByUrl(path);
  // }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
