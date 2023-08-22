import { GetStaticPaths, GetStaticProps } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';

import { defaultLocale, locales } from 'src/localization';

import Icon from 'src/components/Icon';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Section from 'src/components/Section';
import IntlLink from 'src/components/IntlLink';
import HighlightedText from 'src/components/HighlightedText';
import Button, { ButtonVariants } from 'src/components/Button';

import globalIntl from 'src/utils/globalIntl';

const PageHome = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="container">
      <Header />
      <div className="w-full flex items-center min-h-screen relative -top-12">
        <div className="w-full md:w-7/10">
          <h1 className="text-3xl font-bold sm:leading-snug mb-3 font-sans lg:text-[45px] text-white">
            <FormattedMessage id="landing.title" />
          </h1>
          <HighlightedText
            element="p"
            className="md:text-lg md:leading-8 my-1 text-neutral-200/80"
            text={formatMessage({ id: 'landing.description' })}
          />
          <IntlLink href="/[lang]/learn" tabIndex={-1}>
            <Button variant={ButtonVariants.Primary} className="mt-4">
              <FormattedMessage id="general.startLearning" />
            </Button>
          </IntlLink>
        </div>
        <div className="w-full md:w-3/10 hidden sm:flex justify-end">
          <img
            className="w-80 h-80 lg:w-[500px] lg:h-[500px] drop-shadow-xl"
            src="/Done.webp"
            alt={formatMessage({ id: 'landing.imageAltText' })}
          />
        </div>
      </div>

      <Section
        title="section.learn.title"
        description="section.learn.content"
        image="/Learn.webp"
        imageAltText="section.learn.imageAltText"
        link="/[lang]/learn"
        buttonText="general.startLearning"
        reverse
      />
      <Section
        title="section.cheatsheet.title"
        description="section.cheatsheet.content"
        image="/Cheatsheet.webp"
        imageAltText="section.cheatsheet.imageAltText"
        link="/[lang]/cheatsheet"
        buttonText="section.cheatsheet.button"
      />
      <Section
        title="section.playground.title"
        description="section.playground.content"
        image="/Playground.webp"
        link="/[lang]/playground"
        buttonText="section.cheatsheet.button"
        imageAltText="section.playground.imageAltText"
        reverse
      />
      <Section
        title="section.practice.title"
        description="section.practice.content"
        image="/Practise.webp"
        imageAltText="section.practice.imageAltText"
      />
      <Section
        title="section.opensource.title"
        description="section.opensource.content"
        image="/Open Source.webp"
        imageAltText="section.opensource.imageAltText"
        link="https://github.com/aykutkardas/regexlearn.com"
        reverse
      />
      <Footer />
    </div>
  );
};

export default PageHome;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params.lang || defaultLocale;
  const messages = require(`src/localization/${lang}/`)?.default;
  const intl = globalIntl(lang, messages);

  return {
    props: {
      lang,
      messages,
      metadata: {
        title: intl.formatMessage({ id: 'page.landing.title' }),
        description: intl.formatMessage({ id: 'page.landing.description' }),
        hrefLang: '',
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: locales.map(lang => ({
      params: {
        lang,
      },
    })),
  };
};
