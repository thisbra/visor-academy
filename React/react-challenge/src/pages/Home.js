import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Cards/Card';
import { getAPI } from '../context/apiContext';
import Loading from '../components/Loading'; // eslint-disable-line
import Dialog from '../components/Dialog';

const SearchBar = styled.input`
  width: 15rem;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin: 1rem 0rem;
`;

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const githubData = getAPI();

  useEffect(() => {
    if (githubData === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [githubData]);

  // filter the data based on the search query
  const filteredData = githubData
    ? githubData.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())) // eslint-disable-line
    : [];

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Dialog
        message="Data from GitHub could not be fetched."
        open={showDialog}
        onClose={handleCloseDialog}
      />
      <SearchBar
        type="text"
        placeholder="Search repository by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'start',
        margin: '2rem 8rem'
      }}
      >
        {/* Show cards cased of the search query and sort them alphabetically */}
        {filteredData.length > 0 ? (
          filteredData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((repo) => (
              <Card key={repo.id} cardTitle={repo.name} isPrivate={repo.private} />
            ))
        ) : (
          <h2>
            No repositories with &quot;
            {searchQuery}
            &quot; found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Home;
