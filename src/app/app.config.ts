import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { extremeRoutes, fancyRoutes, normalRoutes } from './app.routes';

const theme: 'normal' | 'fancy' | 'extreme' = 'normal';

function appInitializer() {
  const router = inject(Router);
  switch (theme) {
    case 'fancy':
      router.resetConfig(fancyRoutes);
      break;
    case 'extreme':
      router.resetConfig(extremeRoutes);
      break;
    default:
      router.resetConfig(normalRoutes);
      break;
  }
  console.log(router);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAppInitializer(appInitializer),
    provideRouter([]),
  ],
};
