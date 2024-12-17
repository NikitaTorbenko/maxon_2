import { createWebHistory, createRouter } from "vue-router";

import { HomePage } from "pages/home";
import { ProductPage } from "pages/product";
import { ProfilePage } from "pages/profile";
import { OrderPage } from "pages/orders";
import { AdressPage } from "pages/adress";
import { ConditionPage } from "pages/condition";
import { searchPage } from "pages/search";
import { BasketPage } from "pages/basket";
import { FavouritesPage } from "pages/favourites";
import  StataPage  from "pages/stata/ui/stata-page.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/product/:id", name: "Product", component: ProductPage },
  { path: "/profile", name: "Profile", component: ProfilePage },
  { path: "/orders", name: "Order", component: OrderPage },
  { path: "/adress", name: "Adress", component: AdressPage },
  { path: "/condition", name: "Condition", component: ConditionPage },
  { path: "/search", name: "Search", component: searchPage },
  { path: "/basket", name: "Basket", component: BasketPage },
  { path: "/favourites", name: "Favourites", component: FavouritesPage },
  { path: "/stata", name: "Stata", component: StataPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
