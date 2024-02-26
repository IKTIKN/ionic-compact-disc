import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatArray(array: string[]): string {
    return array.join(' / ');
  }
  
  upperCase(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  
  formatLabel(text: string): string {
    return text.replace(' / ', ' ');
  }

}
