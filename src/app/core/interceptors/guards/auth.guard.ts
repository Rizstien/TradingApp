import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../../shared/service/registration/registration.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const registerService = inject(UserService);
  const router = inject(Router); 
if(registerService.loginCheck)
{
  return true;
}

  else {
    router.navigate(['/login']); 
    return false;
  }
};
