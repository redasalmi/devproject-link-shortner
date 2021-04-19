import { useState } from 'react';

const App = () => {
  const [link, setLink] = useState('');
  const [invalidLink, setInvalidLink] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formFieldClassname = `form-field ${invalidLink ? 'error' : ''}`.trim();

  const linkVerification = (link) => {
    const urlRegex = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    const isValidLink = link.match(urlRegex) !== null && link !== '';

    setInvalidLink(!isValidLink);

    return isValidLink;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setLink(value);

    if (invalidLink) {
      linkVerification(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const isValidLink = linkVerification(link);

    if (isValidLink) {
      console.log(link);
    }

    setIsSubmitting(false);
  };

  return (
    <div className='container'>
      <div className='link-card'>
        <h1>DevProjects Link Shortener</h1>

        <form onSubmit={handleSubmit} className='form'>
          <div className={formFieldClassname}>
            <label htmlFor='link'>Link to Shorten</label>
            <input type='text' id='link' value={link} onChange={handleChange} />
            {invalidLink && <p>Please input a valid Url</p>}
          </div>

          <div className='action-buttons'>
            <button type='button' disabled={isSubmitting}>
              Copy
            </button>

            <button type='submit' disabled={isSubmitting}>
              Shorten
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
