import { CanActivateFn, Router } from '@angular/router';
import { RegistrationService } from '../shared/service/registration.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const registerService = inject(RegistrationService);
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
