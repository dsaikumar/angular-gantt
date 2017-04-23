import {IAugmentedJQuery} from 'angular';

export class GanttSide {
  private $element: IAugmentedJQuery;

  private gantt: any;

  constructor(gantt: any) {
    this.gantt = gantt;
  };

  getWidth() {
    if (this.gantt.options.value('showSide')) {
      let width = this.gantt.options.value('sideWidth');
      if (width === undefined && this.$element !== undefined) {
        if (this.$element.css('width') !== undefined) {
          this.$element.css('width', '');
        }
      }
      if (this.$element !== undefined) {
        width = this.$element[0].offsetWidth;
      }
      if (width !== undefined) {
        return width;
      }
    }
    return 0;
  };

  show(value) {
    if (this.$element !== undefined) {
      this.$element.toggleClass('ng-hide', !value);
    }
  };

  isShown() {
    if (this.$element !== undefined) {
      return !this.$element.hasClass('ng-hide');
    }
  };
}

export default function () {
  'ngInject';

  return GanttSide;
}
