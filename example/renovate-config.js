module.exports = {
  platform: 'azure',
  endpoint: 'https://dev.azure.com/keerthanakt94/',
  token: process.env.TOKEN,
  hostRules: [
    {           
      "azureAutoApprove": true,
      "automerge": true
    },
  ],
  repositories: ['Main/dummy-packages-codeql-dependabot-'], // list of repos that should be watched by renovate bot
};



