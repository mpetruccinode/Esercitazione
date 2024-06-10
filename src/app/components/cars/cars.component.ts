import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../../models/car.model";
import {cars} from "../../constants/car.consts"
import {Table, TableModule} from "primeng/table";
import {SearchbarComponent} from "../shared/searchbar/searchbar.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [TableModule, SearchbarComponent, Button],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  cars!: Car[];

  ngOnInit() {
    this.cars = cars;
  }

  searchBar(value: string) {
    this.table.filterGlobal(value, 'contains');
  }

}
