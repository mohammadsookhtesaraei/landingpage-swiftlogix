import type { ReactElement, SVGProps } from 'react';

import MingcuteDocumentsFill from '@/icons/MingcuteDocumentsFill';
import MingcuteFolder3Line from '@/icons/MingcuteFolder3Line';
import MingcuteTimeFill from '@/icons/MingcuteTimeFill';

export interface ServicesCard {
  id: number;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  title: string;
  description: string;
}

export const dataCard: ServicesCard[] = [
  {
    id: 1,
    title: 'Track Every Shipment in Real Time',
    Icon: MingcuteTimeFill,
    description:
      'Stay updated on your cargo’s exact location with instant tracking notifications',
  },
  {
    id: 2,
    title: 'Automate Route Optimization',
    Icon: MingcuteFolder3Line,
    description:
      'Cut costs and time by letting our AI-driven system optimize delivery routes.',
  },
  {
    id: 3,
    title: 'Detailed Analytics and Reporting',
    Icon: MingcuteDocumentsFill,
    description:
      'Make data-driven decisions with comprehensive logistics reports at your fingertips.',
  },
];
