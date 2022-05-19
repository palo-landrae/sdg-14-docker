import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'ng-bootstrap-darkmode';
import { ColorModeService } from '../color-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  faBars = faBars;
  theme = '';
  constructor(themeService: ThemeService, colorModeService: ColorModeService) {
    themeService.theme$.subscribe(
      (theme) => (this.theme = colorModeService.selectedTheme(theme))
    );
  }

  ngOnInit(): void { }
}
