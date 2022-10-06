import { greeting } from '@/utils'

describe(greeting.name, () => {
  it('should return "Hello World"', () => {
    expect(greeting()).toBe('Hello World')
  })
})
