import { Inistate } from '../index';
test('Inistate', () => {
  expect(Inistate('World')).toBe('Hello World');
});