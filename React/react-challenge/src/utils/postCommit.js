import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_TOKEN,
});

async function postCommit(repo, sha, decodedContent) {
  const owner = 'thisbra';
  try {
    const response = await octokit.request(
      `PUT /repos/${owner}/${repo}/contents/README.md`,
      {
        owner,
        repo,
        path: 'README.md',
        message: 'Updating README.md from GitDocs',
        content: btoa(decodedContent),
        sha
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default postCommit;
