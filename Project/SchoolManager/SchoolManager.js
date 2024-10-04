const AUTORUN=()=>{

    if (localStorage.getItem('UserData')) {

        HOMEPAGE();
        
    } else {

        LOGINPAGE();
        
    }

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('SchoolManager');

        return;
        
    }

}

const LOGINPAGE=()=>{

    DISPLAY('',`

        <img onclick='CREATACCOUNTPAGE()' class='RightedIcon' src='${WHITEBACKICON}'/>

        <img  onclick='RELOADPAGE()' class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>

        <h1> School Manager </h1>

        <input type='email' placeholder='Enter User Email'/>

        <button class='forestgreen' onclick='EMAILVERIFICATIONPAGE()' >Sign In</button>
        
    `);
   
}

const CREATACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='LeftedIcon'  onclick='LOGINPAGE()' src='${WHITEBACKICON}'/>

        <img onclick='RELOADPAGE()' class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>

        <h1> School Manager </h1>

        <input type='text' placeholder='Enter School Name'/>

        <input type='email' placeholder='Enter School Email'/>

        <input type='password' placeholder='Enter School Admin Password '/>

        <button class='forestgreen' onclick='EMAILVERIFICATIONPAGE()' >Sign Up</button>
        
    `);
   
}

const EMAILVERIFICATIONPAGE=()=>{

    DISPLAY('',`

        <img onclick='CREATACCOUNTPAGE()' class='LeftedIcon' src='${WHITEBACKICON}'/>

        <img  onclick='RELOADPAGE()' class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>

        <h1> School Manager </h1>

        <input type='tel'  maxlength='6' placeholder='Enter Verification Code'/>

        <button class='forestgreen' onclick='PAYMENTPAGE()' >Verify</button>
        
    `);
   
}

const PAYMENTPAGE=()=>{

    DISPLAY('',`

        <div class='PaymentDiv'>

            <div class='SlidedDiv'>

                <h1>Gold Package</h1>

                <img class='AppIconer' src='${WHITESUBSCRIPTIONICON}'/>

                <p> $ 600</p>

                <p>Get Full Access School Manager</p>

                <p>Payment System</p>

                <p>Unlimited Classes</p>

                <p>Teacher Monitoring</p>

                <p>Email Sender</p>

                <p>Unlimited Admins</p>

                <p>Auto Audit</p>

                <p>Year Planner</p>

                <p>Data Share</p>

                <p>School Chat Platform</p>

                <p>Unlimited Cloud Storage </p>

                <button class='forestgreen' onclick='PRIVACYPOLICYPAGE()' > Enroll Now</button>

            </div>

             <div class='SlidedDiv'>

                <h1>Silver Package</h1>

                <img class='AppIconer' src='${WHITESUBSCRIPTIONICON}'/>

                <p> $ 400</p>

                <p>Get Full Access School Manager</p>

                <p>Unlimited Classes</p>

                <p>Teacher Monitoring</p>

                <p>Unlimited Admins</p>

                <p>Year Planner</p>

                <button class='forestgreen' onclick='PRIVACYPOLICYPAGE()' > Enroll Now</button>

            </div>

            <div class='SlidedDiv'>

                <h1> Bronze Package</h1>

                <img class='AppIconer' src='${WHITESUBSCRIPTIONICON}'/>

                <p> $ 200</p>

                <p>Get Full Access School Manager</p>

                <p>Access To 100 Classes</p>

                <p>Teacher Monitoring</p>

                <p>Access To 3 Admins</p>

                <button class='forestgreen' onclick='PRIVACYPOLICYPAGE()' > Enroll Now</button>

            </div>
        
        </div>
        
    `);

}

const PRIVACYPOLICYPAGE=()=>{

    DISPLAY('',`

        <div class='PolicyDiv'>
        
            <p>Policy</p>

            <button class='forestgreen' onclick='CREATESCHOOLPAGE()'>I Agree</button>
        
        </div>
        
    `);

}

const CREATESCHOOLPAGE=()=>{

    DISPLAY('',`

        <div class='PolicyDiv'>

            <img  onclick='RELOADPAGE()' class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>

            <p>Create A School Page</p>

            <input type='text' placeholder='Enter School Name' />
        
            <button class='forestgreen' onclick='HOMEPAGE()'>Create Page</button>
        
        </div>
        
    `);

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='RELOADPAGE()' class='LeftIcon' src='${localStorage.getItem('AppIcon')}'/>

            <img class='RightIcon' src='${WHITEUSERICON}'/>
        
        </header>

        <div class='HomeDiv'>
        
            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

            <div class='Holders'></div>

        </div>
        
    `);

}