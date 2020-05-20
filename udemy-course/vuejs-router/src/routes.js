import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue';
import Product from './Product.vue';
import ProductReviews from './ProductReviews.vue';

export const routes = [
     { path: '', component: ProductList },
     { path: '/cart', component: Cart },
     { path: '/products/:productId', name: 'product',  props: true, component: Product, children:[
       { path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
       { path: 'reviews', name: 'productReviews', props: true, component: ProductReviews }
     ] },
     { path: '*', component:{ template: '<h1> Page not found! </h1>'}}
 ];