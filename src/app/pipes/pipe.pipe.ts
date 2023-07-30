import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class PipePipe extends DatePipe implements PipeTransform {

  override transform(value: any, ...args: any[]): any {
    return super.transform(value, "")
  }

}
