import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Cars',
        icon: 'pi pi-car',
        command: () => {
          this.router.navigate(['/cars']);
        }
      },
      {
        label: 'People',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigate(['/people']);
        }
      },
    ]
  }
}
