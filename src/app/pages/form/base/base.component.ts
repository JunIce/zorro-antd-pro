import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  label = 8;
  control = 16;

  options = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];

  listOfOption = [];


  ngOnInit() {
    this.genChild();

    this.validateForm = this.fb.group({
      email: [123, [Validators.email, Validators.required]],
      range: [null, [Validators.required]],
      checkbox: [this.options, [Validators.required]],
      radio: [null, [Validators.required]],
      textarea: [null, [Validators.required]],
      rate: [4, [Validators.required]],
      select: [['e14', 'g13'], [Validators.required]]
    });

    console.log(this.validateForm);

  }

  genChild() {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  _submitForm() {

  }

}
