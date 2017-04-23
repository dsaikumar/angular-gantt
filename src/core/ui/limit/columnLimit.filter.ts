import GanttBinarySearch from '../../logic/util/binarySearch.service';
import {GanttColumn} from '../../logic/column/column.factory';

export interface IFilterGanttColumnLimit {
  (array: GanttColumn[], gantt: any): GanttColumn[];
}

export default function (ganttBinarySearch: GanttBinarySearch) {
  'ngInject';

  // Returns only the columns which are visible on the screen
  let leftComparator = function (c) {
    return c.left;
  };

  return function (input: GanttColumn[], gantt: any): GanttColumn[] { // TODO: type
    let scrollLeft = gantt.scroll.getScrollLeft();
    let scrollContainerWidth = gantt.getWidth() - gantt.side.getWidth();

    if (scrollContainerWidth > 0) {
      let start = ganttBinarySearch.getIndicesOnly(input, scrollLeft, leftComparator)[0];
      let end = ganttBinarySearch.getIndicesOnly(input, scrollLeft + scrollContainerWidth, leftComparator)[1];
      return input.slice(start, end);
    } else {
      return input.slice();
    }
  };
}
