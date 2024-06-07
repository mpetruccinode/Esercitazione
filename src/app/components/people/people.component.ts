import {Component, OnInit} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Person} from "../../models/person.model";
import {people} from "../../constants/people.consts"

@Component({
  selector: 'app-people',
  standalone: true,
    imports: [
        PrimeTemplate,
        TableModule
    ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  people!: Person[];


  ngOnInit() {
    this.people = people;
  }
}
