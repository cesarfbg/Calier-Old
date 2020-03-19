import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byCategory'
})
export class ByCategoryPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    
    if(items !== undefined){

      if(args == undefined){
        return items;
      }
      
      return items.filter((item) => item.category == args);
    }
    
  }

}
