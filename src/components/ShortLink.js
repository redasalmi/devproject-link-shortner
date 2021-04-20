import { useState } from 'react';
import ClipboardJS from 'clipboard';

const ShortLink = ({ shortLink }) => {
  const [copied, setCopied] = useState(false);

  if (!shortLink) {
    return null;
  }

  const handleClick = () => {
    const clipboard = new ClipboardJS('.copy-btn');

    clipboard.on('success', () => {
      setCopied(true);
    });

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className='short-link'>
      <h4>Shortened Link :</h4>

      <div>
        <a
          id='short-link'
          target='_blank'
          href={shortLink}
          rel='noopener noreferrer'
        >
          {shortLink}
        </a>

        <button
          className='copy-btn'
          onClick={handleClick}
          data-clipboard-action='copy'
          data-clipboard-target='#short-link'
        >
          Copy
          {copied && <div className='copied-msg'>Copied!</div>}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
