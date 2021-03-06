import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'random', loadChildren: () => import('./components/randomrecipe/randomrecipe.module').then(m => m.RandomrecipeModule) },
  { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'category', loadChildren: () => import('./components/category/category.module').then(m => m.CategoryModule) },
  { path: 'recipe', loadChildren: () => import('./components/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'recipelist', loadChildren: () => import('./components/recipelist/recipelist.module').then(m => m.RecipelistModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'logout', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'profile', loadChildren: () => import('./auth/profile/profile.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
