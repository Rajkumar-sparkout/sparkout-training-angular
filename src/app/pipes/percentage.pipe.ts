import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, total: number, decimal: number) {
    return (value / total * 100).toFixed(decimal) + '%';
  }

}

// Component

// <td> {{ std.marks | percentage: totalMarks: 2 }} </td>

// o/p:
//   86.67


// parameter value - std.marks 520
// parameter total - totalMarks 600
// parameter decimal - 2 
// percentage - pipe name



