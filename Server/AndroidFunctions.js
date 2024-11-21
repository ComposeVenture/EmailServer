const ACCOUNTVERIFICATION=(TYPE)=>{

    if (TYPE) {

        if (TYPE === 'ForgotPassword' ) {

            const ForgotEmail=document.querySelector('.ForgotEmail');

            if (sessionStorage.getItem('ForgotUserEmail')) {

                ANDROIDHOMEPAGE();
                
            } else {
                
                STYLED(ForgotEmail,'border',' 1px solid red');
            
                HIDER(2000,()=>{
        
                    STYLED(ForgotEmail,'border',' 1px solid #cdcdcd50');
        
                });

            };

        } else {

            const LoginUserEmail=document.querySelector(".LoginUserEmail");

            const LoginUserPassword=document.querySelector(".LoginUserPassword");
        
            if (sessionStorage.getItem('UserEmail')) {
        
                if (sessionStorage.getItem('UserPassword')) {
        
                    const MYDATA={
                        "UserName":"",
                        "UserEmail":sessionStorage.getItem('UserEmail'),
                        "UserPassword":sessionStorage.getItem('UserPassword'),
                    };
        
                    JSONIFICATION(MYDATA,(MyData)=>{
        
                        STORE("local",'UserData',MyData);
        
                        ANDROIDDEVICE();
        
                    });
        
                } else {
                    
                    STYLED(LoginUserPassword,'border',' 1px solid red');
            
                    HIDER(2000,()=>{
            
                        STYLED(LoginUserPassword,'border',' 1px solid #cdcdcd50');
            
                    });
            
                };
                
            } else {
                
                STYLED(LoginUserEmail,'border',' 1px solid red');
        
                HIDER(2000,()=>{
        
                    STYLED(LoginUserEmail,'border',' 1px solid #cdcdcd50');
        
                });
        
            };
            
        };
 
    } else {

        const UserName=document.querySelector(".UserName");

        const CreateEmail=document.querySelector(".CreateEmail");

        const CreatePassword=document.querySelector(".CreatePassword");

        if (sessionStorage.getItem('CreateUserName')) {

                
        if (sessionStorage.getItem('CreateUserEmail')) {
    
            if (sessionStorage.getItem('CreateUserPassword')) {
    
                const MYDATA={
                    "UserName":sessionStorage.getItem('CreateUserName'),
                    "UserEmail":sessionStorage.getItem('CreateUserEmail'),
                    "UserPassword":sessionStorage.getItem('CreateUserPassword'),
                };
    
                JSONIFICATION(MYDATA,(MyData)=>{
    
                    STORE("local",'UserData',MyData);
    
                    ANDROIDDEVICE();
    
                });
    
            } else {
                
                STYLED(CreatePassword,'border',' 1px solid red');
        
                HIDER(2000,()=>{
        
                    STYLED(CreatePassword,'border',' 1px solid #cdcdcd50');
        
                });
        
            };
            
        } else {
            
            STYLED(CreateEmail,'border',' 1px solid red');
    
            HIDER(2000,()=>{
    
                STYLED(CreateEmail,'border',' 1px solid #cdcdcd50');
    
            });
    
        };
            
        } else {

            STYLED(UserName,'border',' 1px solid red');
        
            HIDER(2000,()=>{
    
                STYLED(UserName,'border',' 1px solid #cdcdcd50');
    
            });
            
        };

    };

};


