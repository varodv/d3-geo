import { select } from 'd3-selection';

export class ProportionalAreaMap {
  constructor(element: HTMLDivElement) {
    select(element).text('ProportionalAreaMap');
  }
}
