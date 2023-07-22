import { GetStaticPaths, GetStaticProps } from 'next';

import Header from 'src/components/Header';
import PlaygroundEditor from 'src/components/PlaygroundEditor';
import PlaygroundSidebar from 'src/components/PlaygroundSidebar';
import { defaultLocale, locales } from 'src/localization';
import ReportPlayground from 'src/components/ReportPlayground';
import globalIntl from 'src/utils/globalIntl';

const PagePlayground = () => (
  <div className="container-full flex flex-col h-screen items-between flex-1 bg-neutral-800">
    <Header page="playground" />
    <div className="flex flex-1 flex-col h-[calc(100vh-5rem)] items-center justify-center sm:flex-row ">
      <div className="w-full  overflow-y-scroll p-4">
        <PlaygroundEditor />
      </div>
      <div className="hidden sm:flex flex-col w-[400px] h-full border-l border-neutral-700">
        <PlaygroundSidebar />
        <div className="h-44 min-h-[100px] border-t py-2 flex flex-col items-center justify-between border-neutral-700 sticky bottom-0">
          <ReportPlayground />
        </div>
      </div>
    </div>
  </div>
);

export default PagePlayground;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params.lang || defaultLocale;
  const messages = require(`src/localization/${lang}/`)?.default;
  const intl = globalIntl(lang, messages);

  return {
    props: {
      lang,
      messages,
      metadata: {
        title: intl.formatMessage({ id: 'page.playground.title' }),
        description: intl.formatMessage({ id: 'page.playground.description' }),
        hrefLang: 'playground',
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
