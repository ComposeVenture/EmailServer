const AUTORUN=()=>{


    APPLOGIC();

};

const APPSDOWNLOAD=()=>{

    NETWORKED();

    setTimeout(() => {

        if (localStorage.getItem('NetWork')) {

            APPLOADUPDATER(NAME);
    
        };

    }, 1000);

};

const APPLOGIC=()=>{

    requestLocation();

    APPSDOWNLOAD();

    if (localStorage.getItem('UserData')) {

       HOMEPAGE();

        
    } else {
        
        LOGINPAGE();

    }
    
}

const LOGINPAGE=()=>{

    const LOGINLINK='https://demo.naweriindustries.com/mobile-endpoints/login-endpoint.php';

    DISPLAY('',`

        <img class='AppLogoImage' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

        <p id='TopOne' class='Lefttext'>Agent Email</p>

        <input type='email' id='UserEmail' class='Inputed' placeholder=''  />

        <p class='Lefttext'>Password</p>
            
        <input type='password' id='UserPassword' class='Inputed' placeholder='*******' />

        <button id='LoginButton' class='blue'>Log In</button>
        
    `);


    CLICKED('.blue',()=>{

        const UserEmail=document.querySelector('#UserEmail');

        const UserPassword=document.querySelector('#UserPassword');

        if (!UserEmail.value) {
        
            TOAST('Enter Agent Email');

            return;

        };
        
        if (!UserPassword.value) {
        
            TOAST('Enter Password');

            return;

        };

        if (!localStorage.getItem('NetWork')) {

            TOAST('Check Your Internet Connection');

            return;
            
        };

        DECLARATION('.blue',(ELEMENT)=>{

            LOADER(ELEMENT);

            const USERDATA={
                "agent93720Login":"",
                "email":UserEmail.value,
                "password":UserPassword.value
            }

            HOMEPAGE()

        });

    });

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header class='HomeHeder'>

            <img id='MenuIcon' class='LeftIcon' src='${WHITEMENUICON}'/>
        
        </header>

        <div class='HomeDiv'></div>

        
        
    `);

}   