module.exports = {
  platform: 'github',
  branchPrefix: 'dependency-update/',
  semanticCommitScope: 'dependencies',
  commitMessageLowerCase: 'never',
  username: 'renovate-bot',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
  labels: ["Renovate"],
  repositories: [
    "erNail/erNail.github.io",
    "erNail/nail-renovate-config",
    "erNail/glpushrule"
  ],
};
