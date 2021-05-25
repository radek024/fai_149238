import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string;
  id_mag: number;
  email: string;
  address: Address;
  contains: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Magazyn Lublin';
    this.id_mag = 16;
    this.address = {
      street: 'Plac Litewski',
      houseNo: '10',
      flatNo: '',
      postalCode: '20-708 ',
      city: 'Lublin'
    };
    this.email = 'magazyn@lublin.pl';
    this.contains = ['Płyty chodnikowe', 'Krawężniki'];
  }

  addTask(item): void {
    item.length <1 ? alert("Nie można dodać pustego zasobu!") : this.contains.push(item);
  }

  deleteTask(item): void {
    for (let i = 0; i < this.contains.length; i++) {
      if (this.contains[i] === item) {
        this.contains.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

}

interface Address {
  street: string;
  houseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}
