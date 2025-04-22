import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherMenu, featherShoppingCart, featherUser } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgIcon],
  providers: [provideIcons({ featherShoppingCart ,featherUser ,featherMenu})],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toolRent';
  public isDropdownOpen = false;
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeDropdown();
    }
  }

  public MenuBar(){
    var menu = document.getElementById("menuBar") as HTMLElement;
    if(menu.className === "navbar-links"){
      menu.className = "responsive";
   }
    else{
        menu.className = "navbar-links";
    }
  }
}