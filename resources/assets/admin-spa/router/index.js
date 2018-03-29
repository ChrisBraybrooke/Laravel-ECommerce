import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// Pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue');
const Account = () => import(/* webpackChunkName: "account" */ '../pages/Account.vue');
const Orders = () => import(/* webpackChunkName: "orders" */ '../pages/orders/Orders.vue');
const ViewOrder = () => import(/* webpackChunkName: "orders" */ '../pages/orders/ViewOrder.vue');
const Collections = () => import(/* webpackChunkName: "collections" */ '../pages/collections/Collections.vue');
const ViewCollection = () => import(/* webpackChunkName: "collections" */ '../pages/collections/ViewCollection.vue');
const ViewCollectionType = () => import(/* webpackChunkName: "collectiontypes" */ '../pages/collection-types/ViewCollectionType.vue');
const Products = () => import(/* webpackChunkName: "products" */ '../pages/products/Products.vue');
const ViewProduct = () => import(/* webpackChunkName: "products" */ '../pages/products/ViewProduct.vue');
const Galleries = () => import(/* webpackChunkName: "galleries" */ '../pages/galleries/Galleries.vue');
const Pages = () => import(/* webpackChunkName: "pages" */ '../pages/pages/Pages.vue');
const ViewPage = () => import(/* webpackChunkName: "pages" */ '../pages/pages/ViewPage.vue');
const Users = () => import(/* webpackChunkName: "users" */ '../pages/users/Users.vue');
const Config = () => import(/* webpackChunkName: "config" */ '../pages/config/Config.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../pages/NotFound.vue');
const ImportExport = () => import(/* webpackChunkName: "import-export" */ '../pages/reports/ImportExport.vue');

const router = new Router({
    mode: 'history',
    base: '/admin/',
    routes: [
        {
            path: '/',
            component: Dashboard,
            name: 'dashboard',
            meta: {title: 'Admin: Dashboard'}
        },
        {
            path: '/account',
            component: Account,
            name: 'user',
            meta: {title: 'Admin: Account'}
        },
        {
            path: '/orders',
            component: Orders,
            name: 'orders',
            meta: {title: 'Admin: Orders'}
        },
        {
            path: '/orders/:orderId',
            component: ViewOrder,
            props: true,
            name: 'orders.view',
            meta: {title: 'Admin: Orders'}
        },
        {
            path: '/collections',
            component: Collections,
            name: 'collections',
            meta: {title: 'Admin: Collections'}
        },
        {
            path: '/collections/:collectionId',
            component: ViewCollection,
            props: true,
            name: 'collections.view',
            meta: {title: 'Admin: Collection'}
        },
        {
            path: '/collections/:collectionId/types/:typeId',
            component: ViewCollectionType,
            props: true,
            name: 'collection.types.view',
            meta: {title: 'Admin: Collection Type'}
        },
        {
            path: '/products',
            component: Products,
            name: 'products',
            meta: {title: 'Admin: Products'}
        },
        {
            path: '/products/:productId',
            component: ViewProduct,
            props: true,
            name: 'products.view',
            meta: {title: 'Admin: Product'}
        },
        {
            path: '/galleries',
            component: Galleries,
            name: 'galleries',
            meta: {title: 'Admin: Galleries'}
        },
        {
            path: '/pages',
            component: Pages,
            name: 'pages',
            meta: {title: 'Admin: Pages'}
        },
        {
            path: '/pages/:pageId',
            component: ViewPage,
            props: true,
            name: 'pages.view',
            meta: {title: 'Admin: Page'}
        },
        {
            path: '/users',
            component: Users,
            name: 'users',
            meta: {title: 'Admin: Users'}
        },
        {
            path: '/config',
            component: Config,
            name: 'config',
            meta: {title: 'Admin: Config'}
        },
        {
            path: '/import-export',
            component: ImportExport,
            name: 'import-export',
            meta: {title: 'Admin: Import / Export'}
        },
        {
          path: '*',
          component: NotFound,
          name: 'not-found',
          meta: {title: 'Admin: Not Found'}
        }
    ],
});

router.beforeEach((to, from, next) => {
  next()
})

export default router;