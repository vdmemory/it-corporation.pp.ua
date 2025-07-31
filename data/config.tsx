import { FiCheck } from 'react-icons/fi'

import { configCompany } from '#data/configCompany'

export const getSiteConfig = (t: (key: string) => string) => ({
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: t('nav.services'),
      },
      {
        id: 'pricing',
        label: t('nav.pricing'),
      },
      {
        id: 'faq',
        label: t('nav.faq'),
      },
      {
        label: t('nav.contact'),
        href: '#contact',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        {t('footer.copyright')}{' '}
        <strong style={{ color: 'white' }}>
          &#39;{configCompany.name}&#39;
        </strong>
        .{' '}
        <span>
          © {new Date().getFullYear()} {t('footer.rights')}
        </span>
      </>
    ),
    links: [
      {
        href: `mailto:${configCompany.email}`,
        label: t('footer.contact'),
      },
    ],
  },
})
