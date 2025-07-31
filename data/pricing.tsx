import { HStack, Text } from '@chakra-ui/react'

export const getPricing = (t: (key: string) => string) => ({
  title: t('pricing.title'),
  description: t('pricing.description'),
  plans: [
    {
      id: 'basic',
      title: t('pricing.basic.title'),
      description: t('pricing.basic.desc'),
      price: t('pricing.basic.price'),
      features: [
        {
          title: 'Landing page or corporate website',
        },
        {
          title: 'Responsive design',
        },
        {
          title: 'SEO optimization',
        },
        {
          title: 'Basic analytics',
        },
        {
          title: 'SSL certificate',
        },
        {
          title: '3 months support',
        },
        {
          title: 'Administration training',
        },
      ],
      action: {
        href: '#contact',
      },
    },
    {
      id: 'professional',
      title: t('pricing.professional.title'),
      description: t('pricing.professional.desc'),
      price: t('pricing.professional.price'),
      isRecommended: true,
      features: [
        {
          title: 'Web application with CMS',
        },
        {
          title: 'External API integration',
        },
        {
          title: 'User management system',
        },
        {
          title: 'Advanced analytics',
        },
        {
          title: 'Automatic backup',
        },
        {
          title: 'Security audit',
        },
        {
          title: '6 months support',
        },
        null,
        {
          title: 'Priority support',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#contact',
      },
    },
    {
      id: 'enterprise',
      title: t('pricing.enterprise.title'),
      description: t('pricing.enterprise.desc'),
      price: (
        <HStack>
          <Text>{t('pricing.enterprise.price')}</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Enterprise systems',
        },
        {
          title: 'Microservice architecture',
        },
        {
          title: 'DevOps and CI/CD',
        },
        {
          title: 'Comprehensive security',
        },
        {
          title: 'Cloud infrastructure',
        },
        {
          title: '24/7 monitoring',
        },
        {
          title: '12 months support',
        },
        null,
        {
          title: 'Dedicated team',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#contact',
      },
    },
  ],
})