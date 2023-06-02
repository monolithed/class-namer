import * as assert from 'assert';
import toggler from '../';

describe('Toggler', () => {
    it('Combine class names', async () => {
        const actual = toggler({
            foo: true,
            bar: false,
            baz: true
        });

        assert.equal(actual, 'foo baz');
    });

    it('Empty object', async () => {
        const actual = toggler({});

        assert.equal(actual, '');
    });
});
