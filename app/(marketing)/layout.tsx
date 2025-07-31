import { MarketingLayout } from '#components/layout'

export default function Layout(props: { children: React.ReactNode }) {
  const announcementBannerProps = {
    title: 'Welcome to Our Site',
    description: '<strong>Check out our latest features!</strong>',
    href: '#features',
  }

  return (
    <MarketingLayout announcementProps={announcementBannerProps}>
      {props.children}
    </MarketingLayout>
  )
}
