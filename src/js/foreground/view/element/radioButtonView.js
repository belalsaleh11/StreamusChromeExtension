﻿import {LayoutView} from 'marionette';
import radioButtonTemplate from 'template/element/radioButton.hbs!';

var RadioButtonView = LayoutView.extend({
  tagName: 'radio-button',
  template: radioButtonTemplate,

  events: {
    'click': '_onClick'
  },

  modelEvents: {
    'change:checked': '_onChangeChecked'
  },

  onRender: function() {
    this._setCheckedState(this.model.get('checked'));
  },

  _onClick: function() {
    this.model.set('checked', true);
  },

  _onChangeChecked: function(model, checked) {
    this._setCheckedState(checked);
  },

  _setCheckedState: function(checked) {
    this.$el.toggleClass('is-checked', checked);
    this.$el.toggleClass('is-unchecked', !checked);
  }
});

export default RadioButtonView;