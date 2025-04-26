import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    rootDir: './src',
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', {}],
    },
  };
};
