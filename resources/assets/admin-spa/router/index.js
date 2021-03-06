import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ 'pages/Dashboard')
const Account = () => import(/* webpackChunkName: "account" */ 'pages/Account')
const Orders = () => import(/* webpackChunkName: "orders" */ 'pages/orders/Orders')
const ProFormas = () => import(/* webpackChunkName: "pro-formas" */ 'pages/pro-formas/ProFormas')
const Quotes = () => import(/* webpackChunkName: "quotes" */ 'pages/quotes/Quotes')
const Estimates = () => import(/* webpackChunkName: "estimates" */ 'pages/estimates/Estimates')
const NewEstimate = () => import(/* webpackChunkName: "new-estimates" */ 'pages/estimates/NewEstimate')
const ViewEstimate = () => import(/* webpackChunkName: "view-estimates" */ 'pages/estimates/ViewEstimate')
const NewOrderStepOne = () => import(/* webpackChunkName: "orders" */ 'pages/orders/NewOrderStepOne')
const NewOrderStepTwo = () => import(/* webpackChunkName: "orders" */ 'pages/orders/NewOrderStepTwo')
const NewOrderStepThree = () => import(/* webpackChunkName: "orders" */ 'pages/orders/NewOrderStepThree')
const ViewOrder = () => import(/* webpackChunkName: "orders" */ 'pages/orders/ViewOrder')
const Collections = () => import(/* webpackChunkName: "collections" */ 'pages/collections/Collections')
const ViewCollection = () => import(/* webpackChunkName: "collections" */ 'pages/collections/ViewCollection')
const ViewCollectionType = () => import(/* webpackChunkName: "collectiontypes" */ 'pages/collection-types/ViewCollectionType')
const Products = () => import(/* webpackChunkName: "products" */ 'pages/products/Products')
const ViewProduct = () => import(/* webpackChunkName: "view-product" */ 'pages/products/ViewProduct')
const ViewProductCustomisations = () => import(/* webpackChunkName: "view-product-customisations" */ 'pages/products/ViewProductCustomisations')
const ViewProductImages = () => import(/* webpackChunkName: "view-product-images" */ 'pages/products/ViewProductImages.vue')
const ViewProductPricing = () => import(/* webpackChunkName: "view-product-pricing" */ 'pages/products/ViewProductPricing')
const ViewProductVariants = () => import(/* webpackChunkName: "view-product-variants" */ 'pages/products/ViewProductVariants')
const ViewProductOrdering = () => import(/* webpackChunkName: "view-product-ordering" */ 'pages/products/ViewProductOrdering')
const Galleries = () => import(/* webpackChunkName: "galleries" */ 'pages/galleries/Galleries')
const Pages = () => import(/* webpackChunkName: "pages" */ 'pages/pages/Pages')
const ViewPage = () => import(/* webpackChunkName: "pages" */ 'pages/pages/ViewPage')
const ViewUser = () => import(/* webpackChunkName: "view-user" */ 'pages/users/ViewUser')
const Users = () => import(/* webpackChunkName: "users" */ 'pages/users/Users')
const Customers = () => import(/* webpackChunkName: "customers" */ 'pages/customers/Customers')
const Config = () => import(/* webpackChunkName: "config" */ 'pages/config/Config')
const Forms = () => import(/* webpackChunkName: "forms" */ 'pages/forms/Forms')
const ViewForm = () => import(/* webpackChunkName: "view-form" */ 'pages/forms/ViewForm')
const Menus = () => import(/* webpackChunkName: "menus" */ 'pages/menus/Menus')
const ViewMenu = () => import(/* webpackChunkName: "view-menu" */ 'pages/menus/ViewMenu')
const NotFound = () => import(/* webpackChunkName: "not-found" */ 'pages/NotFound')
const ImportExport = () => import(/* webpackChunkName: "import-export" */ 'pages/reports/ImportExport')

const router = new Router({
  mode: 'history',
  base: '/admin/',
  routes: [
    {
      path: '/',
      component: Dashboard,
      name: 'dashboard',
      meta: { title: 'Admin: Dashboard' }
    },
    {
      path: '/account',
      component: Account,
      name: 'user',
      meta: { title: 'Admin: Account' }
    },
    {
      path: '/orders',
      component: Orders,
      name: 'orders',
      meta: { title: 'Admin: Orders' }
    },
    {
      path: '/pro-formas',
      component: ProFormas,
      name: 'pro-formas',
      meta: { title: 'Admin: ProFormas' }
    },
    {
      path: '/orders/new',
      component: NewOrderStepOne,
      name: 'orders.step1',
      meta: { title: 'Admin: New Order - Step 1' }
    },
    {
      path: '/orders/new/products',
      component: NewOrderStepTwo,
      name: 'orders.step2',
      meta: { title: 'Admin: New Order - Step 2' }
    },
    {
      path: '/orders/new/payment',
      component: NewOrderStepThree,
      name: 'orders.step3',
      meta: { title: 'Admin: New Order - Step 3' }
    },
    {
      path: '/orders/:orderId',
      component: ViewOrder,
      props: true,
      name: 'orders.view',
      meta: { title: 'Admin: Orders' }
    },
    {
      path: '/quotes',
      component: Quotes,
      name: 'quotes',
      meta: { title: 'Admin: Quotes' }
    },
    {
      path: '/estimates',
      component: Estimates,
      name: 'estimates',
      meta: { title: 'Admin: Estimates' }
    },
    {
      path: '/new-estimate',
      component: NewEstimate,
      props: true,
      name: 'estimates.new',
      meta: { title: 'Admin: New Estimate' }
    },
    {
      path: '/estimates/:estimateId',
      component: ViewEstimate,
      props: true,
      name: 'estimates.view',
      meta: { title: 'Admin: Estimate' }
    },
    {
      path: '/collections',
      component: Collections,
      name: 'collections',
      meta: { title: 'Admin: Collections' }
    },
    {
      path: '/collections/:collectionId',
      component: ViewCollection,
      props: true,
      name: 'collections.view',
      meta: { title: 'Admin: Collection' }
    },
    {
      path: '/collections/:collectionId/types/:typeId',
      component: ViewCollectionType,
      props: true,
      name: 'collection.types.view',
      meta: { title: 'Admin: Collection Type' }
    },
    {
      path: '/products',
      component: Products,
      name: 'products',
      meta: { title: 'Admin: Products' }
    },
    {
      path: '/products/:productId',
      component: ViewProduct,
      props: true,
      name: 'products.view',
      meta: { title: 'Admin: Product' }
    },
    {
      path: '/products/:productId/pricing',
      component: ViewProductPricing,
      props: true,
      name: 'products.view.pricing',
      meta: { title: 'Admin: Product Pricing' }
    },
    {
      path: '/products/:productId/images',
      component: ViewProductImages,
      props: true,
      name: 'products.view.images',
      meta: { title: 'Admin: Product Images' }
    },
    {
      path: '/products/:productId/customisations',
      component: ViewProductCustomisations,
      props: true,
      name: 'products.view.customisations',
      meta: { title: 'Admin: Product Customisations' }
    },
    {
      path: '/products/:productId/variants',
      component: ViewProductVariants,
      props: true,
      name: 'products.view.variants',
      meta: { title: 'Admin: Product Variants' }
    },
    {
      path: '/products/:productId/ordering',
      component: ViewProductOrdering,
      props: true,
      name: 'products.view.ordering',
      meta: { title: 'Admin: Product Ordering' }
    },
    {
      path: '/galleries',
      component: Galleries,
      name: 'galleries',
      meta: { title: 'Admin: Galleries' }
    },
    {
      path: '/pages',
      component: Pages,
      name: 'pages',
      meta: { title: 'Admin: Pages' }
    },
    {
      path: '/pages/:pageId',
      component: ViewPage,
      props: true,
      name: 'pages.view',
      meta: { title: 'Admin: Page' }
    },
    {
      path: '/users',
      component: Users,
      name: 'users',
      meta: { title: 'Admin: Users' }
    },
    {
      path: '/users/:userId',
      component: ViewUser,
      props: true,
      name: 'users.view',
      meta: { title: 'Admin: Users' }
    },
    {
      path: '/customers',
      component: Customers,
      name: 'customers',
      meta: { title: 'Admin: Customers' }
    },
    {
      path: '/forms',
      component: Forms,
      name: 'forms',
      meta: { title: 'Admin: Forms' }
    },
    {
      path: '/forms/:formId',
      component: ViewForm,
      props: true,
      name: 'forms.view',
      meta: { title: 'Admin: Forms' }
    },
    {
      path: '/menus',
      component: Menus,
      name: 'menus',
      meta: { title: 'Admin: Menus' }
    },
    {
      path: '/menus/:menuId',
      component: ViewMenu,
      props: true,
      name: 'menus.view',
      meta: { title: 'Admin: Menus' }
    },
    {
      path: '/config',
      component: Config,
      name: 'config',
      meta: { title: 'Admin: Config' }
    },
    {
      path: '/import-export',
      component: ImportExport,
      name: 'import-export',
      meta: { title: 'Admin: Import / Export' }
    },
    {
      path: '*',
      component: NotFound,
      name: 'not-found',
      meta: { title: 'Admin: Not Found' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
