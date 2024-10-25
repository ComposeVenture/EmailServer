const AUTORUN=()=>{

    NETWORKED();

    HOMEPAGE();

    APPLOGIC();

};

const APPLOGIC=()=>{

    HIDER(2000,()=>{

        CHECKER(localStorage.getItem('NetWork',()=>{
            APPLOADUPDATER(NAME);
        }));
        
    });

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <p>No Images Saved</p>
        
        </div>

        <button class='FloatButton'>

            <img src='${WHITEPOSTICON}'/>
        
        </button>
        
    `);

}