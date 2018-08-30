import { module, test } from 'qunit';
import { setupRenderingTest } from "ember-qunit";

import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('my-component', 'Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{my-component}}`);

    assert.equal(this.element.textContent.trim(), 'Some content!!');
  });
});

