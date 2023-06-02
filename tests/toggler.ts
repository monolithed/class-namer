import * as assert from 'assert';
import cn from '../';

describe('@monolithed/class-namer', () => {
    it('Combine class names', async () => {
        const actual = cn({
            foo: true,
            bar: false,
            baz: true
        });

        assert.equal(actual, 'foo baz');
    });

    it('Empty object', async () => {
        const actual = cn({});

        assert.equal(actual, '');
    });
});
