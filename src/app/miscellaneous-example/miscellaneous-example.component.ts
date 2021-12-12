import { Component } from '@angular/core';

@Component({
  selector: 'app-miscellaneous-example',
  templateUrl: './miscellaneous-example.component.html',
  styleUrls: ['./miscellaneous-example.component.scss']
})
export class MiscellaneousExampleComponent {
  itemQuantity = 0;
  selectedGender = "male";
  caseSpecificKey = 'caseSpecificKey';
}
