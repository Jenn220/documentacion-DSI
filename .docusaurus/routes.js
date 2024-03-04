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
    component: ComponentCreator('/documentacion-DSI/docs', '9d6'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', '9ec'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', '1ed'),
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
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Kiosko Configuracion Politicas',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Kiosko Configuracion Politicas', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Kiosko Creacion Usuario',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Kiosko Creacion Usuario', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Manual Configuracion Kioskos',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Manual Configuracion Kioskos', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Manual de Instalacion Turnero V2',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Kiosko/Manual de Instalacion Turnero V2', 'ef7'),
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
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Cambio Estados por Medio/Cambio Estados Medio',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Cambio Estados por Medio/Cambio Estados Medio', 'd48'),
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
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/CONFIGURACION DE PROVEEDOR DE GESTION DE MOTORIZADOS POR MEDIO Y RESTAURANTE 1 9 15',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/CONFIGURACION DE PROVEEDOR DE GESTION DE MOTORIZADOS POR MEDIO Y RESTAURANTE 1 9 15', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario ADMINISTRACION CLAVES WIFI',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario ADMINISTRACION CLAVES WIFI', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario Fidelizacion BACKEND',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario Fidelizacion BACKEND', '200'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario Fidelizacion FRONTEND',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/Manual de Usuario Fidelizacion FRONTEND', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/MANUAL DE USUARIO PARA LA CONFIGURACION DE GESTION MOTORIZADOS',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Fidelizacion/MANUAL DE USUARIO PARA LA CONFIGURACION DE GESTION MOTORIZADOS', '454'),
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
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista de Agregadores',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista de Agregadores', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Locales Transferencia',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Locales Transferencia', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Medios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Medios', 'eea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Motivos Transferencia Venta',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Lista Motivos Transferencia Venta', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Modulo Domicilio',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Modulo Domicilio', 'e54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Notificaciones',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual de Configuraciones_Domicilio/Manual Configuracion Notificaciones', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Manual del sistema Maxpoint BACKEND 003',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Manual del sistema Maxpoint BACKEND 003', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Configuracion Mercadito',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Configuracion Mercadito', 'db6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Configuracion URL Servicios Back20',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Configuracion URL Servicios Back20', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Usuario El Mercadito',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Manual de Usuario El Mercadito', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Paso a Produccion Mercadito',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Mercadito/Paso a Produccion Mercadito', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Movistar/Manual de KFC Cupones Movistar',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Movistar/Manual de KFC Cupones Movistar', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Configuracion Politicas Servicio API Impresion',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Configuracion Politicas Servicio API Impresion', '859'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Reimpresion Configuracion Boton',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Reimpresion Configuracion Boton', 'd93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Reimpresion- Configuracion Politicas',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/NETCORE/Manual Reimpresion- Configuracion Politicas', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Parte Validacion Email MXP/Parte validacion email',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Parte Validacion Email MXP/Parte validacion email', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuarcion de Fidelizacion Version de Servicio v2 Restaurante',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuarcion de Fidelizacion Version de Servicio v2 Restaurante', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuracion de Fidelizacion version de Servicio V2 Cadena',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuracion de Fidelizacion version de Servicio V2 Cadena', '7dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuracion de Nota de Credrito Fidelizacion de Servicio V2 Cadena',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual de Configuracion de Nota de Credrito Fidelizacion de Servicio V2 Cadena', 'd38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual Politicas Separacion de Presas',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Piloto/Manual Politicas Separacion de Presas', 'c50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Precios de Fantasia/Manual de Configuracion de Precio de Fantasia',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Precios de Fantasia/Manual de Configuracion de Precio de Fantasia', 'f80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Precios de Fantasia/Manual de politicas  PRECIO FANTASIA V3',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Precios de Fantasia/Manual de politicas  PRECIO FANTASIA V3', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Visualizar Cantidad de Productos con Precio 0',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Precios O/Visualizar Cantidad de Productos con Precio 0', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Preguntas Forzadas Agregadores/Manual de Menu y Preguntas Sugeridas',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Preguntas Forzadas Agregadores/Manual de Menu y Preguntas Sugeridas', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/MACROMATIX/TestCases/TEST CASES AZURE KFC CONNECT MACROMATIX',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/MACROMATIX/TestCases/TEST CASES AZURE KFC CONNECT MACROMATIX', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/MACROMATIX/TestCases/TEST CASES KFC CONNECT MACROMATIX',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/MACROMATIX/TestCases/TEST CASES KFC CONNECT MACROMATIX', 'fbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/MANUAL DE FUNCIONALIDADES INTEGRACION DE SIR QPM BACKOFFICE',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/MANUAL DE FUNCIONALIDADES INTEGRACION DE SIR QPM BACKOFFICE', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/Manual de usuario Integracion SIR QPM BackOffice',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/Manual de usuario Integracion SIR QPM BackOffice', '640'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/Manual Integracion con QPM Kitchen Brain',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/Manuales/Manual Integracion con QPM Kitchen Brain', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/TestCases/Test Case AdministracionArticulosQPM',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/TestCases/Test Case AdministracionArticulosQPM', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/TestCases/Test Case QPM Service',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/QPM/TestCases/Test Case QPM Service', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/RESTAURANTE/Manuales/MANUAL DE USUARIO PARA LA CONFIGURACION DE GESTION MOTORIZADOS',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/RESTAURANTE/Manuales/MANUAL DE USUARIO PARA LA CONFIGURACION DE GESTION MOTORIZADOS', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/QPM/RESTAURANTE/TestCase/TEST CASE CONFIGURACION DE PROVEEDOR DE GESTION DE MOTORIZADOS POR MEDIO Y RESTAURANTE',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/QPM/RESTAURANTE/TestCase/TEST CASE CONFIGURACION DE PROVEEDOR DE GESTION DE MOTORIZADOS POR MEDIO Y RESTAURANTE', '6cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Tipo de Venta/Manual Tipo de Venta',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Tipo de Venta/Manual Tipo de Venta', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual Configuracion Politicas Usuarios Tipo Canal',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual Configuracion Politicas Usuarios Tipo Canal', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual de Usuario Politica Concurrencia Menu',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual de Usuario Politica Concurrencia Menu', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual del sistema Maxpoint BACKEND ver 2',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Usuario/Manual del sistema Maxpoint BACKEND ver 2', '450'),
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
