import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentacion-DSI/__docusaurus/debug',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug', '8db'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/config',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/config', '754'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/content',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/content', 'a6b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/globalData', '034'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/metadata', 'f50'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/registry',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/registry', 'bf7'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/routes',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/routes', 'c1d'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog',
    component: ComponentCreator('/documentacion-DSI/blog', '80f'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/archive',
    component: ComponentCreator('/documentacion-DSI/blog/archive', 'f1d'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/first-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/first-blog-post', 'd60'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/long-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/long-blog-post', '802'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/mdx-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/mdx-blog-post', 'b4b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags',
    component: ComponentCreator('/documentacion-DSI/blog/tags', 'c29'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/docusaurus',
    component: ComponentCreator('/documentacion-DSI/blog/tags/docusaurus', 'b8c'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/facebook',
    component: ComponentCreator('/documentacion-DSI/blog/tags/facebook', 'fb8'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hello',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hello', '86e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hola',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hola', 'd94'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/welcome',
    component: ComponentCreator('/documentacion-DSI/blog/welcome', 'd6b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/markdown-page',
    component: ComponentCreator('/documentacion-DSI/markdown-page', '2d3'),
    exact: true
  },
  {
    path: '/documentacion-DSI/docs',
    component: ComponentCreator('/documentacion-DSI/docs', '680'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', '499'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', 'c4a'),
            routes: [
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/Canales Digitales',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/Canales Digitales', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/congratulations', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/create-a-blog-post', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/create-a-document', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/create-a-page', '1b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/deploy-your-site', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Canales-Digitales/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/Canales-Digitales/markdown-features', '5a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/canales-digitales',
                component: ComponentCreator('/documentacion-DSI/docs/category/canales-digitales', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/maxpoint', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/sir',
                component: ComponentCreator('/documentacion-DSI/docs/category/sir', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---basics',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---basics', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---extras',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---extras', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/congratulations', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/create-a-blog-post', '4e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/create-a-document', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/create-a-page', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/deploy-your-site', '65e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/Facturacion Electronica',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/Facturacion Electronica', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion-Electronica/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion-Electronica/markdown-features', '343'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/intro',
                component: ComponentCreator('/documentacion-DSI/docs/intro', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/congratulations', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-blog-post', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-document', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/create-a-page', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/deploy-your-site', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/markdown-features', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/congratulations', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/create-a-blog-post', '8dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/create-a-document', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/create-a-page', '466'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/deploy-your-site', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/markdown-features', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/SIR/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/SIR/Maxpoint', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/congratulations', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-blog-post', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-document', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-page', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/deploy-your-site', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/markdown-features', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/manage-docs-versions', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/translate-your-site', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentacion-DSI/',
    component: ComponentCreator('/documentacion-DSI/', 'c2c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
