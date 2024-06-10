import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  @Output() onFilter = new EventEmitter<string>();

  keyword: string = '';

  applyFilter() {
    this.onFilter.emit(this.keyword);
  }

}
