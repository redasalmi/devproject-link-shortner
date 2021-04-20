import { useState } from 'react';

import Loading from './Loading';
import fetchShortLink from '../utils/fetchShortLink';

const LinkForm = ({ setShortLink }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const isValidLink = verifyLink(link);

    if (isValidLink) {
      const shortLink = await fetchShortLink(link);
      setShortLink(shortLink);
    } else {
      setShortLink('');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className={formFieldClassname}>
        <label htmlFor='link'>Link to Shorten</label>
        <input type='text' id='link' value={link} onChange={handleChange} />
        {linkError ? <p>{linkError}</p> : undefined}
      </div>

      <div className='submit-btn'>
        <button type='submit' disabled={isSubmitting}>
          Shorten
          {isSubmitting && (
            <div>
              <Loading />
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default LinkForm;
