import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng-bootstrap-darkmode';
import { ColorModeService } from '../color-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  theme = '';
  cardArray = [
    {
      img: '../../assets/img/acidification_card.png',
      title: 'Acidification',
      link: '/sea-water-ph',
    },
    {
      img: '../../assets/img/eutrophication_card.png',
      title: 'Eutrophication',
      link: '/eutrophication',
    },
    {
      img: '../../assets/img/fishery_card.png',
      title: 'Fishery Collapse',
      link: '/fish-stocks',
    },
    {
      img: '../../assets/img/plastic_card.png',
      title: 'Marine Pollution',
      link: '/beach-litter',
    },
    {
      img: '../../assets/img/oceanwarming_card.png',
      title: 'Ocean Warming',
      link: '/ocean-warming',
    },
    {
      img: '../../assets/img/coral-reefs.jpg',
      title: 'Species Extinction',
      link: '/species-exctinction',
    },
  ];

  constructor(themeService: ThemeService, colorModeService: ColorModeService) {
    themeService.theme$.subscribe(
      (theme) => (this.theme = colorModeService.selectedTheme(theme))
    );
  }
  ngOnInit(): void { }
}
