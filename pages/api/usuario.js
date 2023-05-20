import React from 'react';
import GithubProvider from './GithubProvider';
import ProjectList from './ProjectList';

const App = () => {
  const githubUsername = 'Williamfallasg'; 

  return (
    <GithubProvider username={githubUsername}>
      <ProjectList />
    </GithubProvider>
  );
};

export default App;
