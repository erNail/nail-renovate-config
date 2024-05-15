module.exports = {
  extends: [':semanticPrefixFixDepsChoreOthers'],
  platform: 'github',
  branchPrefix: 'dependency-update/',
  rangeStrategy: 'pin',
  semanticCommitScope: 'dependencies',
  commitMessageLowerCase: 'never',
  "pre-commit": {
    enabled: true
  },
  username: 'renovate-bot',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
  labels: ["Renovate"],
  repositories: [
    'erNail/erNail.github.io',
    'erNail/nail-renovate-config',
    'erNail/glpushrule',
    'erNail/grafaml'
  ],
};
