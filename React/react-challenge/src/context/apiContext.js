import React, {
  useContext, useState, useEffect, createContext
} from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/fetchData';

const APIContext = createContext();

// Fetch all thisbra's repositories from the GitHub API
// https://api.github.com/users/{user}/repos

export function APIProvider({ children }) {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const url = `${process.env.REACT_APP_GITHUB_API_URL}/user/repos`;
    fetchData(url, process.env.REACT_APP_GITHUB_API_TOKEN)
      .then((data) => {
        setGithubData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <APIContext.Provider value={githubData}>{children}</APIContext.Provider>
  );
}

APIProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function getAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('getAPI must be used within an APIProvider');
  }
  return context;
}
