import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import BreadCrumbs from '@/components/misc/BreadCrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import IngotIMG from '@/public/assets/img/ingot-ai-1.webp';
import LogoBlack from '@/public/assets/img/logo-black.png';
import PAAVariables from '@/public/assets/img/paa-variables.webp';

function PureAluminumInnots() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('page-pure-aluminum-innots.meta.title')}
        description={t('page-pure-aluminum-innots.meta.description')}
      />
      <Navbar />
      <main className="flex w-full flex-wrap items-start justify-center font-theme">
        <BreadCrumbs
          paths={[
            {
              name: 'page-home.meta.title',
              path: '/',
            },
            {
              name: 'page-pure-aluminum-innots.meta.title',
              path: '/our-products/pure-aluminum-innots',
            },
          ]}
        />
        <section className="flex w-full flex-wrap items-center justify-center">
          <section className="m-0 flex w-full max-w-theme flex-col gap-0 px-5 py-10">
            <section
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${IngotIMG.src})`,
              }}
              className="relative mb-10 grid h-auto min-h-[400px] w-full grid-cols-1 self-center rounded-sm border border-black p-0 lg:mb-0"
            >
              <section className="flex w-full flex-col items-center justify-center p-5">
                <p className="max-w-fit self-center whitespace-pre-wrap rounded-sm bg-black/80 p-5 text-center text-xl font-semibold text-white shadow-xl">
                  {t('page-pure-aluminum-innots.text-0')}
                </p>
              </section>
              <img
                className="absolute bottom-0 right-1/2 w-full max-w-[200px] translate-y-full translate-x-1/2 place-self-end self-center justify-self-end bg-white/80 p-3 invert lg:right-0 lg:translate-y-0 lg:translate-x-0"
                src={LogoBlack.src}
                alt="Logo"
              />
            </section>
            <p className="my-20 max-w-2xl self-center text-center text-base text-zinc-800">
              {t('page-pure-aluminum-innots.text-1')}
            </p>
            <img
              className="mb-20 w-full self-center rounded-sm border border-black p-5 shadow-xl"
              src={PAAVariables.src}
              alt="Saf Alüminyum Külçe Değerleri"
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PureAluminumInnots;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
