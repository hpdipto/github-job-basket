import React, { useState } from 'react';

import FetchJobs from './FetchJobs';

function GitHubJobs() {

  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});

  // const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);


  const Job = {
      "id": "8adad5b0-2e02-494c-aa69-376d33c93fa2",
      "type": "Full Time",
      "url": "https://jobs.github.com/positions/8adad5b0-2e02-494c-aa69-376d33c93fa2",
      "created_at": "Thu Aug 13 10:30:18 UTC 2020",
      "company": "brandung GmbH & Co. KG",
      "company_url": "https://www.agentur-brandung.de/karriere/jobs/php-developer-typo3-berlin/jetzt-bewerben/?_pc=34250",
      "location": "Berlin",
      "title": "PHP Developer TYPO3 (w/m/d)",
      "description": "Nimm Anlauf und spring in die brandung! ",
      "how_to_apply": "https://brandung.join.com/jobs/1298426-php-developer-typo3-w-m-d-berlin?pid=357a3b4531918760973f&utm_source=github_jobs&utm_medium=paid&utm_campaign=single%2Bposting&utm_content=php%2Bdeveloper%2Btypo3%2Bw%2Bm%2Bd%2B-%2Bberlin",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHVJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8a2e610ff2674b569698195dcb8f60a7a4a73b6/brandund-logo-eck.png"
    }


  return (
    <div>
      
    </div>
  );

}


export default GitHubJobs;