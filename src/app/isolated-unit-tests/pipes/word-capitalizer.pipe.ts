import {Pipe, PipeTransform} from '@angular/core';


/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-unit-tests
 */
@Pipe({name: 'wordCapitalizer'})
export class WordCapitalizerPipe implements PipeTransform {

  transform(input: string): string {
    if (!input ||  input.length === 0) {
      return '';
    }

    const transformed = input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));

    return transformed;
  }

}
