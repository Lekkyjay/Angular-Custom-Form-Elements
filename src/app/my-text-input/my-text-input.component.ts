import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-text-input',
  templateUrl: './my-text-input.component.html',
  styleUrls: ['./my-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyTextInputComponent),
      multi: true,
    },
  ]
})

export class MyTextInputComponent implements OnInit, ControlValueAccessor {
  @Input() label!: string
  @Input() type: 'text' | 'password' | 'email' = 'text'
  @Input() placeholder!: string
  @Input() control!: FormControl

  field!: string

  id = Math.random()

  errors = {
    minlength: 'Min length error',
    required: 'Field is required',
    email: 'Email is invalid'
  } 

  constructor() { }

  ngOnInit(): void {
  }

  // Function to call when change
  onChange = (value: any) => {}

  writeValue(obj: any): void {
    this.field = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  } 

  getErrors(): { type: string; message: string; }[] {

    if (!this.control.errors) {
      return []
    }

    return Object.keys(this.control.errors).map(errorType  => {
        return {
          type: errorType,
          message: this.errors[errorType]
        }
      }
    )
  }

}
