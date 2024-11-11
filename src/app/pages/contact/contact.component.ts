import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form!: FormGroup
  fb = inject(FormBuilder)

  public get name () {
    return this.form.get('name') as FormControl
  }

  public get email () {
    return this.form.get('email') as FormControl
  }

  public get message () {
    return this.form.get('message') as FormControl
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: '',
      email: '',
      message: ''
    })
  }
}
