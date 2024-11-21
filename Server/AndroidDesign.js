const ANDROIDVERIFICATIONPAGES=()=>{

    CLEAR('');CLEARSTORAGE('');

    APPLOGO('');

    INPUT('','LoginUserEmail',' ','Enter User Email','email',(data)=>{

        STORE('','UserEmail',data);

    });

    INPUT('','LoginUserPassword',' ','Enter User Password','password',(data)=>{

        STORE('','UserPassword',data);

    });

    TEXT('','p','ForgotPassword','Forgot Password?',()=>{

        CLEAR('');CLEARSTORAGE('');

        APPLOGO('');

        INPUT('','ForgotEmail',' ','Enter User Email','email',(data)=>{

            STORE('','ForgotUserEmail',data);

        });

        IMAGEBUTTON('','forestgreen','Verify','#cdcdcd',' ','RigthBackIcon','White',()=>{
            ACCOUNTVERIFICATION('ForgotPassword');
        });

        TEXTBUTTON('','blue','Cancel','#cdcdcd',()=>{
            ANDROIDVERIFICATIONPAGES('');
        });

    });

    IMAGEBUTTON('','forestgreen','LogIn','#cdcdcd',' ','RigthBackIcon','White',()=>{
        ACCOUNTVERIFICATION(' ');  
    });

    TEXTBUTTON('','blue','Create Account','#cdcdcd',()=>{

        CLEAR('');CLEARSTORAGE('');

        APPLOGO('');

        INPUT('','UserName',' ','Enter User Name','',(data)=>{

            STORE('','CreateUserName',data);

        });

        INPUT('','CreateEmail',' ','Enter User Email','email',(data)=>{

            STORE('','CreateUserEmail',data);

        });

        INPUT('','CreatePassword',' ','Enter User Password','password',(data)=>{

            STORE('','CreateUserPassword',data);

        });

        IMAGEBUTTON('','forestgreen','Create Account','#cdcdcd',' ','RigthBackIcon','White',()=>{
            ACCOUNTVERIFICATION();
        });

        TEXTBUTTON('','blue','LogIn','#cdcdcd',()=>{
            ANDROIDVERIFICATIONPAGES('');
        });
        
    });

};

const ANDROIDHOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLDIV("",'HomeDiv',(ELEMENT)=>{

    });

    ROUNDFOOTER('','','#00000080',(ELEMENT)=>{

        CLEAR(ELEMENT);

        ICON(ELEMENT,'LibraryIcon','White','',()=>{

        });

        ICON(ELEMENT,'MoviesIcon','White','',()=>{

        });

        ICON(ELEMENT,'UserHolderIcon','White','',()=>{

            ANDROIDUSERACCOUNT();

        });

    });

};

const ANDROIDUSERACCOUNT=()=>{

    CLEAR('');
   
    HEADER('','','',(ELEMENT)=>{

        ICON(ELEMENT,'BackIcon','White','BackIcon',()=>{

            ANDROIDHOMEPAGE();

        });

    })

};