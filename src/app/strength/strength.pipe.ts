import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 10) {
      return value + " (weak)";
    } else if(value >= 10 && value < 20) {
      return value + " (strong)";
    } else {
      return value + " (unbelievable)";
    }
  }
}

// Pipes are used in the template file of a component
// {{ variable | strength }}
// 9 -> "9 (weak)""
// 15 -> "15 (strong)"
// 25 -> "25 (unbelievable)"
