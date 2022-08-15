import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ThemeService } from './services/themeService/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cursos_front';
  @ViewChild('container') container! : ElementRef;
  @ViewChild('drawer') drawer! : MatDrawer;

  constructor(private themeService : ThemeService){
    this.themeService.themeChange.subscribe((_)=>{
      this.container.nativeElement.classList.toggle('dark-theme')
    })
  }
  toggleSidenav(){
    console.log("teste")
    this.drawer.toggle()
  }
}
