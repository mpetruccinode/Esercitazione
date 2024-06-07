import { BehaviorSubject } from 'rxjs';
import { Person } from '../models/person.model';
import {Car} from "../models/car.model";


export class DataService {
  private peopleSource = new BehaviorSubject<Person[]>([]);
  private carsSource = new BehaviorSubject<Car[]>([]);

  currentPeople = this.peopleSource.asObservable();
  currentCars = this.carsSource.asObservable();

  constructor() { }

  changePeople(people: Person[]) {
    this.peopleSource.next(people);
  }

  changeCars(cars: Car[]) {
    this.carsSource.next(cars);
  }
}
