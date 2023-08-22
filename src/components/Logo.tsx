import Icon from 'src/components/Icon';
import IntlLink from 'src/components/IntlLink';

const Logo = () => (
  <IntlLink href="/[lang]" className="inline-flex items-center" aria-label="LearnRegex">
    <Icon
      className="fill-regreen-400 block sm:hidden"
      icon="unlocked"
      removeInlineStyle
      size={20}
    />
    <img className="hidden sm:block" width={109} height={27} src="/logo2.svg" alt="LearnRegex" />
  </IntlLink>
);

export default Logo;
