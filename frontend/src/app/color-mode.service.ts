import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ColorModeService {
  theme = '';

  constructor() { }

  selectedTheme(theme: string) {
    if (theme.toString() == 'dark') {
      this.theme = 'bg-dark text-white';
    } else {
      this.theme = 'bg-light text-black';
    }
    return this.theme;
  }
}
