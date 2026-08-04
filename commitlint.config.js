export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'test',
        'build',
        'ci',
        'perf',
        'refactor',
        'style',
        'breaking',
        'workflow',
        'types',
        'wip',
        'release',
        'deps',
        'other',
        'revert',
        'api',
        'db',
        'config',
        'middleware',
        'cache'
      ],
    ],
  },
};
