import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progName',
  standalone: true,
})
export class ProgNamePipe implements PipeTransform {
  transform(progName: string): string {
    return progName.split(' ').slice(0, 3).join(' ');
  }
}
