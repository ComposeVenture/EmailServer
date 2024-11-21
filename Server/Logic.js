const AUTORUN=()=>{

    ENVIRONMENTCHECKER(ANDROIDDEVICE);
   
};

const ANDROIDDEVICE=()=>{

    if (localStorage.getItem('UserData')) {
        
        ANDROIDHOMEPAGE();

    } else {
        
        ANDROIDVERIFICATIONPAGES();

    };

};

const DESKTOPDEVICE=()=>{

    if (localStorage.getItem('UserData')) {
        
    } else {
        
    }

};

const WEBDEVICE=()=>{

    if (localStorage.getItem('UserData')) {
        
    } else {
        
    }

};