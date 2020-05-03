import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/fullcomponent',
    title: 'Dashboard',
    icon: 'mdi mdi-home',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },

  // {
  //   path: '/fullcomponent/component/alert',
  //   title: 'Current Readings',
  //   icon: 'mdi mdi-message-bulleted',
  //   class: '',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/fullcomponent/component/accordion',
  //       title: 'Water Levels',
  //       icon: 'mdi mdi-equal',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/fullcomponent/component/accordion',
  //       title: 'Pressure',
  //       icon: 'mdi mdi-equal',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //   ]
  // },

  // {
  //   path: '/fullcomponent/component/accordion',
  //   title: 'Statistics',
  //   icon: 'mdi mdi-equal',
  //   class: '',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/fullcomponent/component/accordion',
  //       title: 'Water Levels',
  //       icon: 'mdi mdi-equal',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/fullcomponent/component/accordion',
  //       title: 'Pressure',
  //       icon: 'mdi mdi-equal',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //   ]
  // },

  // {
  //   path: '/fullcomponent/component/accordion',
  //   title: 'System Parameters',
  //   icon: 'mdi mdi-equal',
  //   class: '',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/fullcomponent/component/accordion',
  //       title: 'Locations',
  //       icon: 'mdi mdi-home',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //   ]
  // },

  {
    path: '',
    title: 'Current Readings',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },

  {
    path: '/full/readings',
    title: 'Water Levels',
    icon: 'mdi mdi-bus',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/full/readings',
    title: 'Pressure',
    icon: 'mdi mdi-bus',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },

  {
    path: '',
    title: 'Statistics',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },

  {
    path: '/full/statistics',
    title: 'Water Levels',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/full/statistics',
    title: 'Pressure',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/fullcomponent/component/accordion',
    title: 'System Parameters',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },

  {
    path: '/full/locations',
    title: 'Locations',
    icon: 'mdi mdi-home',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  
];
