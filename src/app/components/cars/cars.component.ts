import {Component, OnInit} from '@angular/core';
import {Car} from "../../models/car.model";
import {cars} from "../../constants/car.consts"
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [TableModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit {
  cars!: Car[];


  ngOnInit() {
    this.cars = cars;
  }
}
