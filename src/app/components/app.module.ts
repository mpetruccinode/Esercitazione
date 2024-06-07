import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PeopleComponent} from "./people/people.component";
import {CarsComponent} from "./cars/cars.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MenubarModule} from "primeng/menubar";
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePageComponent,
        children: [
          { path: 'people', component: PeopleComponent },
          { path: 'cars', component: CarsComponent }
        ]
      }
    ]),
    MenubarModule,
    TableModule
  ],
  exports: [
    MenubarModule,
    RouterModule,
    TableModule
  ]
})
export class AppModule { }
