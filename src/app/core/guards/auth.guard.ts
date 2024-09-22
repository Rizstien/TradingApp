import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { UserService } from '../service/user/user.service';

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
