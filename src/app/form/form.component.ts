import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    link: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required])
  })

  submit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  check() {
    if(this.form.invalid) this.submit = true
    else {
      this.submit = false
    }
  }

}
