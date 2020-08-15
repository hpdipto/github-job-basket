import React, { useState } from 'react';

import FetchJobs from './FetchJobs';
import JobCard from './JobCard';
import SearchForm from './SearchForm';
import JobPagination from './JobPagination';

function GitHubJobs() {

  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }

  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  // console.log({ jobs: jobs, loading: loading, error: error, hasNextPage: hasNextPage });


  // const Job = {
  //     "id": "8adad5b0-2e02-494c-aa69-376d33c93fa2",
  //     "type": "Full Time",
  //     "url": "https://jobs.github.com/positions/8adad5b0-2e02-494c-aa69-376d33c93fa2",
  //     "created_at": "Thu Aug 13 10:30:18 UTC 2020",
  //     "company": "brandung GmbH & Co. KG",
  //     "company_url": "https://www.agentur-brandung.de/karriere/jobs/php-developer-typo3-berlin/jetzt-bewerben/?_pc=34250",
  //     "location": "Berlin",
  //     "title": "PHP Developer TYPO3 (w/m/d)",
  //     "description": "<p><strong>_ HELLO ERSTMAL</strong></p>\n<p><strong>Du machst unsere nächste Software zur Brand. Du gibst deinem Code den Style, den er verdient hat.</strong> Du hast das Multitalent, das alle wollen. In enger Verzahnung mit UX, IT &amp; Beratung entwickelst du next level Frontend-Lösungen. Im Alltag bedeutet das für dich, neue Geschäftsmodelle oder Produkte in ein digitales Erlebnis zu übersetzen, intuitive Webanwendungen zu entwickeln oder neue Ansätze im Bereich der Datenvisualisierung zu erfinden.</p>\n<p><strong>Du bist Vordenker:in und Umsetzer:in von revolutionären User Interfaces und dich begeistert es, neue Technologien zu entdecken.</strong> Du übersetzt unseren Stack und Infrastruktur im engen Austausch mit deinen Kolleg:innen aus dem Techteam regelmäßig in Richtung Zukunft und bist mutig genug, bereits gelernte Vorgehensweisen zu disruptieren.</p>\n<p><strong>Aufgrund deiner agilen Arbeitsweise interagierst du regelmäßig mit deinen Teams aus den Bereichen Innovation, Brand, Marketing, IT und Data Science und führst deine eigenen Projekte.</strong> Durch deine enge Verzahnung mit den Teams und der User Experience bist du bereits in der frühen Phase einer kreativen Produktentwicklung involviert. Bei dir treffen Bedürfnisse vom Markt auf potenzielle User Stories und technologische Lösungswege, die du allesamt bewerten und weiterentwickeln kannst.</p>\n<p><strong>GAME CHANGING UI</strong></p>\n<p>Du bist der Translator eines erfolgreichen UIs. Das unterstreichst du mit einem sehr guten Skills im Bereich der Frontend-Entwicklung (ReactJS, HTML5, CSS, SASS) und mit Visualisierungen in d3, WebGL, und Plotly. Klar, dass du dich ebenfalls mit Programmen der Adobe Creative Cloud und Figma, Sketch, FramerX, o. ä. auskennst. Das Ganze ergänzt du mit Erfahrungen aus den Bereich Motion Design, Chatbots, VR / AR und After Effects.</p>\n<p><strong>DATA DRIVEN UX</strong></p>\n<p>Unser Anspruch: Start with state of the art. Unsere Datenbanken findest du bei MongoDB, MySQL, PostgreSQL, Elasticsearch. Du hast Erfahrungen mit dem JS Backbone (JavaScript, NodeJS) gesammelt und kennst dich mit Testing bzw. Review Prozessen in Puppeteer, Jasmine, Needle, Cypress aus. Das Deployment läuft über Skaffold, Helm Charts, CI/CD GitLab, Docker, Kubernetes. And last but not least: We love Python.</p>\n<p><strong>#NOFILTER</strong></p>\n<p>Du hast keinen Bock, deine eigenen Ideen erst durch zehn Etagen zu jagen, damit sie am Ende jemand anders mit Powerpoint Template präsentiert. Bei uns bekommst du deine verdiente Bühne und die Möglichkeit als Intrapreneur:in zu wirken. Wir leben die strukturierte Wildheit, die alles möglich macht.</p>\n<p>Du bist Frontend Developer:in bei WAYS.</p>\n<p><strong>STANDARD</strong></p>\n<p>Neben Deutsch sprichst und schreibst du fließend Englisch.\nSehr gute Frontend-Skills: ReactJS, HTM5L, CSS, SASS (Siehe oben für weitere Anforderungen)\nKenntnisse in Prototyping/ Wireframing mit Adobe Creative Cloud und Figma, Sketch, FramerX, etc.\nDu bist immer auf dem neuesten Stand: wissenschaftliche UX-Ansätze &amp; aktuelle Trends\nDu hast dein Studium in den Bereichen IT, Design, o. ä. bereits abgeschlossen.\nMit Kommunikationstools wie bspw. GitLab, Asana, Slack oder G-Suite bist du bestens vertraut.\n1-2 Jahre praktische Erfahrung in der täglichen Entwicklungsarbeit und Zusammenarbeit mit Designer:innen / Data Scientists – bevorzugt aus dem Agentur-, Tech- oder Startup-Umfeld.\nDeine strukturierte Wildheit fängt bei der Bewerbung an: Wir kaufen nicht die Katze im Sack. Uns bist du als kreativer Mensch hinter der Bewerbungsmappe wichtig.</p>\n<p>Wir möchten nicht nur deinen Lebenslauf sehen, sondern auch deinen Charakter und dein Talent. Du weißt, wie du uns begeisterst.</p>\n<p><strong>_ THE WAY YOU WORK (at) WAYS:</strong></p>\n<p>WAYS ist eine junge Innovation Factory aus Dortmund. Bei uns arbeitest du im Penthouse-Office mit Blick auf den Phoenix See. Wir bieten dir alles, was du brauchst, um dich kreativ auszuleben: Flexible Arbeitszeiten, Family Spirit und einen modernen Arbeitsplatz. Bei uns steht deine Entwicklung im Fokus. Wir haben Lust zu wachsen und suchen Mitspieler:innen, die mitgestalten wollen. Dafür geben wir dir den nötigen Raum für deine Ideen und deine favourite Arbeitsweise.</p>\n<p>Wir denken groß und haben Lust auf Zukunft: Als Unternehmen der Unternehmerkraft® Group begleiten wir mit unseren Schwestern brandneo und Fritz-Effekt international agierende Unternehmen gesamtheitlich in ihrer digitalen Transformation.</p>\n<p><strong>Wir warten auf deine Bewerbung!</strong></p>\n<p><strong>Ansprechpartner:</strong> Ruben Dahmen, CEO &amp; Co-Founder</p>\n<p><strong>Weitere Infos:</strong> Remote Work &amp; Freelance ist auch möglich.</p>\n",
  //     "how_to_apply": "<p><a href=\"https://www.miele-x.com/jobs/head-of-ecommerce-product-websites/?utm_source=GitHub%20Jobs&amp;utm_medium=Referral&amp;utm_campaign=EN_MX_headofecommerceproduct&amp;utm_term=&amp;utm_content=\">Apply here</a></p>\n",
  //     "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHVJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8a2e610ff2674b569698195dcb8f60a7a4a73b6/brandund-logo-eck.png"
  //   }


  return (
    <div className="container">
    
      <div className="mt-3">
        <SearchForm params={params} onParamChange={handleParamChange} />
      </div>

      <div className="mt-1">
        <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>

      {
        loading ? 
          <h4>Loading...</h4>
                :
          null
      }

      {
        error ? 
          <h4>Error! Try Refreshing.</h4>
              :
          null
      }

      {
        jobs.map((job, index) => 
          <JobCard key={index} job={job} />
        )
      }

      <div className="mt-3">
        <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>

    </div>
  );

}


export default GitHubJobs;