import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_TOKEN,
});

// Fetch a README from a specified repo from the GitHub API
// https://api.github.com/repos/{user}/{repo}/readme

async function getRepoREADME(repo) {
  const owner = 'thisbra';
  try {
    const response = await octokit.request(
      `GET /repos/${owner}/${repo}/readme`,
      {
        owner,
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );
    const decodedContent = atob(response.data.content);
    const { sha } = response.data;
    return { decodedContent, sha };
  } catch (error) {
    throw new Error(`Error getting README data: ${error.message}`);
  }
}

export default getRepoREADME;
