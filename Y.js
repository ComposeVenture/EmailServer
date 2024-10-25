const AUTORUN=()=>{

    HOMEPAGE();

    APPLOGIC();

};

const APPLOGIC=()=>{

    NETWORKED();

    HIDER(2000,()=>{
        
        if (localStorage.getItem('NetWork')) {
            
            APPLOADUPDATER(NAME);

        };
        
    });

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <p onclick='RELOADPAGE()'>No Images Saved</p>
        
        </div>
        
        <button onclick='UPLOADIMAGESPAGE()' class='FloatButton'>

            <img src='${WHITEPOSTICON}'/>
        
        </button>
        
    `);

}

const UPLOADIMAGESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img  onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
        </header>
        
        <button class='FloatButton'>

            <img src='${WHITEPOSTICON}'/>
        
        </button>
        
    `);

}