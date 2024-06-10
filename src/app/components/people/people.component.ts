import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {Person} from "../../models/person.model";
import {people} from "../../constants/people.consts"
import {SearchbarComponent} from "../shared/searchbar/searchbar.component";

@Component({
  selector: 'app-people',
  standalone: true,
    imports: [
        PrimeTemplate,
        TableModule,
        SearchbarComponent
    ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  people!: Person[];


  ngOnInit() {
    this.people = people;
  }

  searchBar(value: string) {
    this.table.filterGlobal(value, 'contains');
  }
}
