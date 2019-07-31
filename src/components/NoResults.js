import React from 'react';

// Shows if there are no results for the search
const NoResults = () => {
  return (
    <div className="noResults">
      <h1>No Results Found!</h1>
      <p>The search did not return any results. Please try again</p>
    </div>
  );
}

export default NoResults;