module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
