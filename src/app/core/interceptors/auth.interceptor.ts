import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url == 'https://freeapi.miniprojectideas.com/api/JWT/GetAllUsers'){
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
  }
  else if(req.url == 'https://api.apicalls.io/v1/markets/insider-trades')
  {
      const clonerequest = req.clone({  
        setHeaders:{
            Authorization: `Bearer 804|75IeTsDQvrF0Fm5XPUV4qYvbVmVMfqZ4ickRKemh`
        }
      });
      return next(clonerequest);
  }
  else
  {
    return next(req);
  }
  return next(req);
};
