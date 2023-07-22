import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

import Icon from 'src/components/Icon';

import packageInfo from 'package.json';

const ReportPlayground = () => {
  const [body, setBody] = useState('');
  const { query } = useRouter();
  const { lang } = query;

  const title = encodeURI('[Playground]: Type the title here...');

  useEffect(() => {
    setBody(
      encodeURI(`
**Page:** \`Playground\`
**Language:** \`${lang}\`
**Version:** \`v${packageInfo.version}\`

**User Agent:** 
\`${window.navigator.userAgent.replace(/;/g, ',')}\`

---

**What is the problem you are experiencing?**
    
    
    `),
    );
  }, [lang]);

  return (
    <a
      className="inline-flex items-center text-xs p-2 text-neutral-400 hover:text-neutral-300 transition-colors h-4"
      href={`https://github.com/theriverman/LearnRegex/issues/new?title=${title}&body=${body}`}
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon="chat-bubble" size={16} className="mr-1" />
      <FormattedMessage id="general.reportStep" />
    </a>
  );
};

export default ReportPlayground;
