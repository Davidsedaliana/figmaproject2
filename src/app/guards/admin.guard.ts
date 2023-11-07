import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router)
  if(token){
    return true;
  }
  router.navigate(['auth'])
  return false;

};
