import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(list: Student[], filterBy: string) {
    if(filterBy.toLowerCase() === 'all' || filterBy === '' || filterBy.length === 0){
      return list
    } else{
      return list.filter((std)=> {
        return std.gender.toLowerCase() === filterBy.toLowerCase();
      })
    }
  }

}
