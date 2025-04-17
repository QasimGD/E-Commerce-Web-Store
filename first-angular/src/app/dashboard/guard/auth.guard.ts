import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = async(route, state) => {
  const router = inject(Router);
  const auth : Auth = inject(Auth)
  const identity = true
  
  await auth.authStateReady()
  
  if (identity) {
    return identity;
  }
  router.navigate(['/dashboard/auth']);

  return false;
};
