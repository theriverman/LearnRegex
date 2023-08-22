import { FormattedMessage } from 'react-intl';
import cx from 'clsx';
import axios from 'axios';

import Icon from 'src/components/Icon';
import Logo from 'src/components/Logo';
import IntlLink from 'src/components/IntlLink';

import packageInfo from 'package.json';

let BaseAleidoUrl: string = process.env.ALEIDO_BASE_URL;

interface Props {
  page?: 'home' | 'learn' | 'learn-detail' | 'cheatsheet' | 'playground' | 'login';
}

const Header = ({ page }: Props) => {
  const isLoginPage = page === 'login';
  const isLearnDetail = page === 'learn-detail';
  const isPlaygroundPage = page === 'playground';

  console.log("isLoginPage", isLoginPage);
  console.log("isLearnDetail", isLearnDetail);
  console.log("isPlaygroundPage", isPlaygroundPage);

  return (
    <header
      className={cx('relative z-40 h-20', {
        'bg-neutral-800 px-4 border-b border-neutral-700': isPlaygroundPage,
      })}
    >
      <div className="flex items-center justify-center h-20">
        <div className="flex-1 inline-flex items-baseline">
          <Logo />
          {isPlaygroundPage && (
            <span className="text-xs ml-1 relative bottom-1 text-neutral-500 sm:flex hidden">
              v{packageInfo.version}
            </span>
          )}
        </div>
        {isLearnDetail && <div id="ProgressArea" className="flex justify-center flex-1" />}
        <div className="flex flex-1 items-center text-sm justify-end gap-2 sm:gap-4">
        <IntlLink className="hidden md:block" navLink href="/[lang]/login">
            <FormattedMessage id="general.login" />
          </IntlLink>
          <IntlLink className="hidden md:block" navLink href="/[lang]/learn">
            <FormattedMessage id="general.learn" />
          </IntlLink>
          <IntlLink className="hidden md:block" navLink href="/[lang]/cheatsheet">
            <FormattedMessage id="general.cheatsheet" />
          </IntlLink>
          <IntlLink className="hidden md:block" navLink href="/[lang]/playground">
            <FormattedMessage id="general.playground" />
          </IntlLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
