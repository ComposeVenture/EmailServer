const AUTORUN=()=>{

    LOGICPAGE();

}

const LOGICPAGE=()=>{

    if (localStorage.getItem('UserData')) {

        HOMEPAGE();

        return;
        
    }

    LOGINPAGE();

}

const HOMEPAGE=()=>{

}

const LOGINPAGE=()=>{

    DISPLAY('',`
        
        <img class='AppLogo' src='${localStorage.getItem('AppIcon')}'/>

        <p>Your Home Cinema</p>

        <input type='email' id='UserEmail' class='Input' placeholder='Enter Your Email' >

        <input type='password' id='UserPassword' class='Input' placeholder='********' >

        <p class='ForgotPassword'>Forgot My Password?</p>

        <button class='forestgreen'>Login</button>

        <p class='CreateMessage' >I don't have an Account! <b class='colorforestgreen' >Create Account?<b></p>

    `);

    CLICKED('.forestgreen',()=>{

        DECLARATION('.forestgreen',(ELEMENT)=>{

            DECLARATION('#UserEmail',(USEREMAIL)=>{

                CHECKER(USEREMAIL.value,()=>{

                    STORE('','UserEmail',USEREMAIL.value);

                    return;

                });

                STYLED(USEREMAIL,'border','1px solid red');
    
                HIDER(1000,()=>{

                    STYLED(USEREMAIL,'border','1px solid #cdcdcd20');

                });

            });
    
            DECLARATION('#UserPassword',(USERPASSWORD)=>{
    
                CHECKER(USERPASSWORD.value,()=>{

                    STORE('','UserPassword',USERPASSWORD.value);

                    return;
    
                });

                STYLED(USERPASSWORD,'border','1px solid red');
    
                HIDER(1000,()=>{
    
                    STYLED(USERPASSWORD,'border','1px solid #cdcdcd20');
    
                });

            });

        });

    });

}