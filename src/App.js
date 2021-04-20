import { useState } from 'react';

import LinkForm from './components/LinkForm';
import ShortLink from './components/ShortLink';

const App = () => {
  const [shortLink, setShortLink] = useState('');

  return (
    <div className='container'>
      <div className='link-card'>
        <h1>DevProjects Link Shortener</h1>

        <LinkForm setShortLink={setShortLink} />
        <ShortLink shortLink={shortLink} />
      </div>
    </div>
  );
};

export default App;
