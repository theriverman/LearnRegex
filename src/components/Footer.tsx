import Social from 'src/components/Social';

import packageInfo from 'package.json';

const Footer = () => (
  <footer className="flex items-center justify-center flex-col h-20 mt-8 w-full">
    <div className="flex items-center">
      <Social />
    </div>
    <span className="text-xs mt-1 text-neutral-400 mb-8">v{packageInfo.version}</span>
  </footer>
);

export default Footer;
