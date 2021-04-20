import { useState } from 'react';

const App = () => {
  const [link, setLink] = useState('');
  const [linkError, setLinkError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formFieldClassname = `form-field ${linkError ? 'error' : ''}`.trim();

  const verifyLink = (link) => {
    let linkError = '';

    if (link === '') {
      linkError = 'Required field';
    } else {
      const urlRegex = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
      const validUrl = link.match(urlRegex) !== null;

      linkError = validUrl ? '' : 'Please input a valid Url';
    }

    setLinkError(linkError);
    const isValidLink = linkError === '';

    return isValidLink;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setLink(value);

    if (linkError) {
      verifyLink(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const isValidLink = verifyLink(link);

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
            {linkError ? <p>{linkError}</p> : undefined}
          </div>

          <div className='submit-btn'>
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
