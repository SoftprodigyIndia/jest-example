import * as func1  from '../foo'; 
import * as func2 from '../foofoo';

xdescribe('Testing 1', () => {
    test('get the foo value', () => {
        func2.foofoo = jest.fn().mockReturnValue(2);
        expect(func1.foo(1,5,5)).toBe(2);
    });
})