import { Component, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.css'],
})
export class ThemeButtonComponent implements OnInit {
  isDarkEnable = false;
  currentTheme$ = new BehaviorSubject<string>('light');

  constructor(private renderer: Renderer2) {}

  changeTheme() {
    this.renderer.removeClass(document.body, this.currentTheme$.value);
    this.currentTheme$.value === 'light'
      ? this.currentTheme$.next('dark')
      : this.currentTheme$.next('light');
    this.renderer.addClass(document.body, this.currentTheme$.value);
    localStorage.setItem('theme', this.currentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme$.next(savedTheme);
    }
    this.renderer.addClass(document.body, this.currentTheme$.value);
  }
}
