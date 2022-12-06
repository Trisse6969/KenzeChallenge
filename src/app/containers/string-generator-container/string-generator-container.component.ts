import { Component } from '@angular/core';
import { StringService } from 'src/app/services/string.service';

@Component({
  selector: 'app-string-generator-container',
  templateUrl: './string-generator-container.component.html',
  styleUrls: ['./string-generator-container.component.scss'],
})
export class StringGeneratorContainerComponent {
  constructor(public readonly stringService: StringService) {}
}
