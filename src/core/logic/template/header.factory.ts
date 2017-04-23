import {IAugmentedJQuery} from 'angular';
import {GanttHeaderColumns} from './headerColumns.factory';

export class GanttHeader {
  static GanttHeaderColumns: { new(gantt: any): GanttHeaderColumns };

  gantt: any;
  columns: GanttHeaderColumns;

  $element: IAugmentedJQuery;

  constructor(gantt: any) {
    this.gantt = gantt;

    this.columns = new GanttHeader.GanttHeaderColumns(this);
  };

  getHeight() {
    return this.$element[0].offsetHeight;
  };
}

export default function (GanttHeaderColumns: { new(gantt: any): GanttHeaderColumns }) {
  'ngInject';

  GanttHeader.GanttHeaderColumns = GanttHeaderColumns;
  return GanttHeader;
}
