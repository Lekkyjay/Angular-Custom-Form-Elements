import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() label!: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder!: string;

  constructor() { }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }

}
