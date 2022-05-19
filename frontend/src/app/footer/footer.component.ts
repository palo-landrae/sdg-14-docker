import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng-bootstrap-darkmode';
import { ColorModeService } from '../color-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  theme = '';
  constructor(themeService: ThemeService, colorModeService: ColorModeService) {
    themeService.theme$.subscribe(
      (theme) => (this.theme = colorModeService.selectedTheme(theme))
    );
  }

  ngOnInit(): void { }
}
