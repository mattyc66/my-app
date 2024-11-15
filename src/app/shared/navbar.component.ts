import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], 
  template: `
    <nav class="navbar">
      <ul class="nav-links">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}