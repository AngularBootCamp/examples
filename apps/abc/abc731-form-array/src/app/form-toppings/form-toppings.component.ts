import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-toppings',
  templateUrl: './form-toppings.component.html',
  styleUrls: ['./form-toppings.component.scss']
})
export class FormToppingsComponent {
  @Input() toppings?: FormArray;

  get toppingControls() {
    return (this.toppings?.controls ?? []) as FormControl[];
  }

  constructor(private fb: FormBuilder) {}

  addNewTopping() {
    this.toppings?.push(this.fb.control(''));
  }

  removeTopping(toppingIndex: number) {
    this.toppings?.removeAt(toppingIndex);
  }
}
