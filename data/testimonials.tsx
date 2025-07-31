export const getTestimonials = (t: (key: string) => string) => ({
  title: t('testimonials.title'),
  items: [
    {
      name: 'Alexander Petrov',
      description: 'CEO, TechStart',
      avatar: '/static/images/avatar.jpg',
      children: <>{t('testimonials.item1.comment')}</>,
    },
    {
      name: 'Maria Ivanova',
      description: 'CTO, FinanceApp',
      avatar: '/static/images/avatar2.jpg',
      children: <>{t('testimonials.item2.comment')}</>,
    },
    {
      name: 'Dmitry Kozlov',
      description: 'Founder, E-commerce Plus',
      avatar: '/static/images/avatar3.jpg',
      children: <>{t('testimonials.item3.comment')}</>,
    },
  ],
})
