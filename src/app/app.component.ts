import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from "./services/dataService";
import {Car} from "./models/car.model";
import {Person} from "./models/person.model";
import {MenubarModule} from "primeng/menubar";
import {HomePageComponent} from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DataService]

})
export class AppComponent {
  title = 'Esercitazione';

  people!: Person[];
  cars!: Car[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentPeople.subscribe(people => this.people = people);
    this.dataService.currentCars.subscribe(cars => this.cars = cars);
  }
}
