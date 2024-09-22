import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let UserData =  localStorage.getItem('userInfo');
  if(UserData != null)
  {
    let data = JSON.parse(UserData!);
    const clonerequest = req.clone({  
      setHeaders:{
          Authorization: `Bearer ${data.token}`
      }
    });
    return next(clonerequest);
  }
  return next(req);
};
