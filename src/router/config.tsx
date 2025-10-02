
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogPostPage = lazy(() => import('../pages/blog/[slug]/page'));
const HeatingServicesPage = lazy(() => import('../pages/services/heating/page'));
const CoolingServicesPage = lazy(() => import('../pages/services/cooling/page'));
const VentilationServicesPage = lazy(() => import('../pages/services/ventilation/page'));
const AirQualityServicesPage = lazy(() => import('../pages/services/air-quality/page'));
const PlumbingServicesPage = lazy(() => import('../pages/services/plumbing/page'));
const MaintenanceServicesPage = lazy(() => import('../pages/services/maintenance/page'));
const CommercialServicesPage = lazy(() => import('../pages/services/commercial/page'));
const EmergencyServicesPage = lazy(() => import('../pages/services/emergency/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/blog',
    element: <BlogPage />
  },
  {
    path: '/blog/:slug',
    element: <BlogPostPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicyPage />
  },
  {
    path: '/services/heating',
    element: <HeatingServicesPage />
  },
  {
    path: '/services/cooling',
    element: <CoolingServicesPage />
  },
  {
    path: '/services/ventilation',
    element: <VentilationServicesPage />
  },
  {
    path: '/services/air-quality',
    element: <AirQualityServicesPage />
  },
  {
    path: '/services/plumbing',
    element: <PlumbingServicesPage />
  },
  {
    path: '/services/maintenance',
    element: <MaintenanceServicesPage />
  },
  {
    path: '/services/commercial',
    element: <CommercialServicesPage />
  },
  {
    path: '/services/emergency',
    element: <EmergencyServicesPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
