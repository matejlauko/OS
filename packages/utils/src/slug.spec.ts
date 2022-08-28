import { toSlug } from './slug'

describe('slug', () => {
  test('should return a slug', () => {
    expect(toSlug('Hello World')).toBe('hello-world')
  })
})
