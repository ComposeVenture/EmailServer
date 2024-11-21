const AUTORUN=()=>{

     CLOUDDATADOWNLOADER();
 
     if (localStorage.getItem("Environment") ==='Test') {
          
          ANDROIDLOGICPAGE();

     } else {
          
          DESKTOPHOMEPAGE();

     };
     
};

const ANDROIDLOGICPAGE=()=>{

     if (localStorage.getItem("UserData")) {

          DEJSON("local",'UserData',(data)=>{

               if (data.PremiumAccount) {

                    ANDROIDHOMEPAGE();
                    
               } else {
                  
                    ANDROIDPAYMENTPAGE();
               };

          });
         
     } else {

          if (localStorage.getItem("AccountActivation")) {

               ANDROIDACCOUNTVERIFICATIONPAGE();
               
          } else {
              
               ANDROIDLOGINPAGE();
               
          };
         
     };
 
};
