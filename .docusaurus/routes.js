import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentacion-DSI/__docusaurus/debug',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug', 'ff8'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/config',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/config', '81e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/content',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/content', '439'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/globalData', '0e5'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/metadata', '021'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/registry',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/registry', '9aa'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/routes',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/routes', '425'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog',
    component: ComponentCreator('/documentacion-DSI/blog', '8f6'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/archive',
    component: ComponentCreator('/documentacion-DSI/blog/archive', '0d3'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/first-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/first-blog-post', '15e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/long-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/long-blog-post', '317'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/mdx-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/mdx-blog-post', 'd7b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags',
    component: ComponentCreator('/documentacion-DSI/blog/tags', '25b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/docusaurus',
    component: ComponentCreator('/documentacion-DSI/blog/tags/docusaurus', 'cf3'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/facebook',
    component: ComponentCreator('/documentacion-DSI/blog/tags/facebook', '48f'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hello',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hello', 'f0d'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hola',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hola', '57f'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/welcome',
    component: ComponentCreator('/documentacion-DSI/blog/welcome', 'aa6'),
    exact: true
  },
  {
    path: '/documentacion-DSI/markdown-page',
    component: ComponentCreator('/documentacion-DSI/markdown-page', 'e73'),
    exact: true
  },
  {
    path: '/documentacion-DSI/docs',
    component: ComponentCreator('/documentacion-DSI/docs', '6e5'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', '50c'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', '6ea'),
            routes: [
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica-1', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/kioskos',
                component: ComponentCreator('/documentacion-DSI/docs/category/kioskos', 'e8f'),
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
                path: '/documentacion-DSI/docs/category/productos',
                component: ComponentCreator('/documentacion-DSI/docs/category/productos', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/productos-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/productos-1', '9c5'),
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
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Maxpoint', 'f0f'),
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
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Descargar Productos y Precios', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/AGREGADORES',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/AGREGADORES', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Config-Agregadores',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Config-Agregadores', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Config-Proceso_UBER',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Config-Proceso_UBER', 'cea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Manual_Usua-UBER',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Agregadores_Uber/Manual_Usua-UBER', '9da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Descargar Productos y Precios', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/DUNA',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/DUNA', '518'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Formas de Pago',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Formas de Pago', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Go_Trade/Manual - URL Go Trade',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Go_Trade/Manual - URL Go Trade', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Go_Trade/Texto go trade',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Go_Trade/Texto go trade', '187'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/Descargar Productos y Precios', '0fb'),
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
    component: ComponentCreator('/documentacion-DSI/', 'ed1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
