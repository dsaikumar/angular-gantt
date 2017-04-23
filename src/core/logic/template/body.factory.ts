import {GanttBodyColumns} from './bodyColumns.factory';
import {GanttBodyRows} from './bodyRows.factory';
import {GanttBodyBackground} from './bodyBackground.factory';
import {GanttBodyForeground} from './bodyForeground.factory';

export class GanttBody {
  static GanttBodyColumns: { new(GanttBody): any };
  static GanttBodyRows: { new(GanttBody): any };
  static GanttBodyBackground: { new(GanttBody): any };
  static GanttBodyForeground: { new(GanttBody): any };

  private gantt: any;

  private background: GanttBodyBackground;
  private foreground: GanttBodyForeground;
  private columns: GanttBodyColumns;
  private rows: GanttBodyRows;

  constructor(gantt: any) {
    this.gantt = gantt;

    this.background = new GanttBody.GanttBodyBackground(this);
    this.foreground = new GanttBody.GanttBodyForeground(this);
    this.columns = new GanttBody.GanttBodyColumns(this);
    this.rows = new GanttBody.GanttBodyRows(this);
  };
}

export default function (GanttBodyColumns: { new(GanttBody): GanttBodyColumns },
                         GanttBodyRows: { new(GanttBody): GanttBodyRows },
                         GanttBodyBackground: { new(GanttBody): GanttBodyBackground },
                         GanttBodyForeground: { new(GanttBody): GanttBodyForeground }) {
  'ngInject';

  GanttBody.GanttBodyColumns = GanttBodyColumns;
  GanttBody.GanttBodyRows = GanttBodyRows;
  GanttBody.GanttBodyBackground = GanttBodyBackground;
  GanttBody.GanttBodyForeground = GanttBodyForeground;

  return GanttBody;
}
