import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRepoREADME from '../utils/getRepoREADME';
import CodeBlock from '../components/CodeBlock';
import Button from '../components/Button';
import postCommit from '../utils/postCommit';
import Dialog from '../components/Dialog';
import Loading from '../components/Loading';

function Edit() {
  const { repositoryName } = useParams();
  const [readmeData, setReadmeData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showUpdateMessage, setShowUpdateMessage] = useState(false);
  const [readMeError, setReadMeError] = useState(false);

  useEffect(() => {
    getRepoREADME(repositoryName).then((data) => {
      setReadmeData(data);
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
      setReadMeError(true);
    });
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const content = document.getElementById('blank-paper-textarea').value;
      await postCommit(repositoryName, readmeData.sha, content);
      setIsLoading(false);
      setShowUpdateMessage(true);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setShowDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (readMeError) {
    return (
      <h1 style={{ marginTop: '12rem' }}>Yout don&apos;t have access to the README of this repository.</h1>
    );
  }

  return (
    <div>
      <h2>
        Edit
        <strong style={{ fontFamily: 'Consolas', margin: '0rem 0.5rem' }}>
          /
          {repositoryName}
        </strong>
        README:
      </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
      >
        <div style={{
          display: 'flex',
          margin: '1rem 0rem'
        }}
        >
          <Button variant="outlined" value="Save" onClick={handleSave} />
          {showUpdateMessage && (
          <div style={{ padding: '0.5rem 0rem 0rem 1rem', fontSize: '1rem', fontWeight: '600' }}>
            Your update was sent! Refresh the page in 1 minute to see the changes.
          </div>
          )}
        </div>
        <CodeBlock ReadmeContent={readmeData.decodedContent} id="content-area" />
      </div>
      <Dialog
        message="Something went wrong while trying to save your README."
        open={showDialog}
        onClose={handleCloseDialog}
      />
    </div>
  );
}

export default Edit;
