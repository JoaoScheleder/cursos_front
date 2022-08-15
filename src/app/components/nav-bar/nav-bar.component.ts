import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/themeService/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  private element! : HTMLElement;

  @Output() toggleSidenav =  new EventEmitter();

  constructor(private themeService: ThemeService, @Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {
    this.element = document.documentElement
  }

  changeTheme(){
    this.themeService.setTheme('Change')
  }

  openFullscreen() {
    if (this.element.requestFullscreen) {
      this.element.requestFullscreen();
    }
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
   }
  }

  eventToggleSidenav(){
    console.log('nav')
    this.toggleSidenav.emit()
  }
  }

