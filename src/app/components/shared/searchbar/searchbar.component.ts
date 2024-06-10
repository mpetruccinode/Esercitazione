import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  @Output() onFilter = new EventEmitter<string>();

  applyFilter(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target !== null) {
      const value = target.value;
      this.onFilter.emit(value);
    }
  }

}
