import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import inputJSON from '../../assets/input.json';

@Injectable({
  providedIn: 'root',
})
export class StringService {
  public input: string[] = inputJSON;
  public targetList: string[] = [];
  public targetLength: number = 6;
  public partialList: string[] = [];
  public outputList: string[] = [];
  public form = new FormControl<string>('6', Validators.required);

  private init() {
    this.input = this.remove_duplicates(this.input);
    this.targetList = this.input.filter((x) => x.length === this.targetLength);
    this.partialList = this.input.filter((x) => x.length < this.targetLength);
  }

  private remove_duplicates(list: string[]) {
    return list.filter((item, index) => list.indexOf(item) === index);
  }

  public sortStrings() {
    this.outputList = [];
    this.partialList.forEach((x) => {
      this.partialList.forEach((y) => {
        if (
          x.length + y.length === this.targetLength &&
          this.targetList.find((z) => z === x + y)
        ) {
          this.outputList.push(x + '+' + y + '=' + (x + y));
        }
      });
    });
  }

  constructor() {
    this.form.valueChanges.subscribe((x) => {
      if (x) {
        this.targetLength = parseInt(x!);
        this.init();
      }
    });
    this.init();
  }
}
