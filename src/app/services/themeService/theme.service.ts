import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme = new Subject<string>();
  themeChange = this.theme.asObservable();
  
  setTheme(currentTheme: string): void {
    this.theme.next(currentTheme);
  }
}
