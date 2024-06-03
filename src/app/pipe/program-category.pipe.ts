import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'programCategory',
  standalone: true,
})
export class ProgramCategoryPipe implements PipeTransform {
  transform(programCategory: string): string {
    return programCategory.substring(0, 23);
  }
}
