module.exports = {
  platform: 'azure',
  endpoint: 'https://dev.azure.com/keerthanakt94/',
  token: process.env.TOKEN,
  hostRules: [
    {
      hostType: 'npm',
      matchHost: 'pkgs.dev.azure.com',
      username: 'keerthanakt94',
      password: process.env.TOKEN,
    },
  ],
  repositories: ['Main/dummy-packages-codeql-dependabot-'],
};
