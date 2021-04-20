import { useState } from 'react';
import LinkForm from './components/LinkForm';

const App = () => {
  const [shortLink, setShortLink] = useState('');

  return (
    <div className='container'>
      <div className='link-card'>
        <h1>DevProjects Link Shortener</h1>

        <LinkForm setShortLink={setShortLink} />
      </div>
    </div>
  );
};

export default App;
