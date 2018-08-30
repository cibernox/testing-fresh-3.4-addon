import Component from '@ember/component';
import layout from '../templates/components/my-component';
import $ from 'jquery';

export default Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    $(this.element).html('Some content!!');
  }
});
