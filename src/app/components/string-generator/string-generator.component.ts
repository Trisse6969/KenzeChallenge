import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.scss'],
})
export class StringGeneratorComponent {
  @Input() public form!: FormControl;
  @Input() public list: string[] = [];

  @Output() public readonly generateStrings = new EventEmitter();
}
