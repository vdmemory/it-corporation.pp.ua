import * as React from 'react'

export const getFaq = (t: (key: string) => string) => ({
  title: t('faq.title'),
  // description: '',
  items: [
    {
      q: t('faq.q1'),
      a: <>{t('faq.a1')}</>,
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5'),
    },
    {
      q: t('faq.q6'),
      a: t('faq.a6'),
    },
  ],
})
