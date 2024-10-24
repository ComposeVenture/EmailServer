const DATABASELINKURL='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit';

const UPDATELINK='https://composeventure.github.io/SERVER/Store/compose_store.apk';

const AUTORUN=()=>{

    APPLOGIC();

    APPSDOWNLOAD();

};

const APPSDOWNLOAD=()=>{

    NETWORKED();

    setTimeout(() => {

        if (localStorage.getItem('NetWork')) {

            APPLOADUPDATER(NAME);
    
            DATABASESAVER(DATABASELINKURL,'Store','ComposeStore','Apps',(data)=>{
    
                if (data === false ) {
        
                    DATABASEUPDATER(DATABASELINKURL,'Store','ComposeStore','Apps');
                    
                } else {
        
                    HOMEPAGE();
                    
                };
        
            });
    
        };

    }, 1000);

};

const APPLOGIC=()=>{

    HOMEPAGE();

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'></div>

        <footer>

            <img onclick='APPSPAGE()' src='${WHITESEARCHICON}'/>

            <img onclick='USERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>

        </footer>
        
    `);

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        LOADER(ELEMENT,'HomeLoader');

        CLEAR(ELEMENT);

        DATAGETTER('ComposeStore','Apps',(data)=>{

            CREATEELEMENT('div','HomeMiniAppDiv',(ELEMENTE)=>{

                DISPLAY(ELEMENTE,`

                    <img class='AppImage' src='${data.AppImage}'/>
                    
                `);

                CREATEELEMENT('button','DownloadButton',(BUTTON)=>{

                    DISPLAY(BUTTON,'Get');
                    
                    ADD(ELEMENTE,BUTTON);

                    EVENT(BUTTON,'click',()=>{

                        WEBSITE(data.AppLink);

                    });

                });

                CREATEELEMENT('p','AppName',(BUTTON)=>{

                    DISPLAY(BUTTON,data.AppName);
                    
                    ADD(ELEMENTE,BUTTON);

                    EVENT(BUTTON,'click',()=>{

                        APPDETAILSPAGE(data);

                    });

                });

                ADD(ELEMENT,ELEMENTE);

            });
    
        });

    });

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <img onclick='SETTINGSPAGE()' class='RightIcon' src='${WHITESETTINGICON}'/>
        
        </header>
        
    `)

};

const APPSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <img onclick='HOMEPAGE()' class='RightIcon' src='${WHITEAPPICON}'/>
        
        </header>
        
    `);

};

const APPDETAILSPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightText'>${data.AppName}</p>
        
        </header>

        <div class='UserDetailsDIv'>

            <div class='HomeMiniAppDiv'>

                <img class='AppImage' src='${data.AppImage}'/>
            
            </div>

            <button class='forestgreen'>Download</button>

            <p class='AppDetails'>${data.AppDetails}</p>
        
        </div>
        
    `);

    CLICKED('.forestgreen',()=>{

        WEBSITE(data.AppLink);

    });

}

const SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightText'>Preference</p>
        
        </header>

        <div class='SettingsDiv'>

            <button id='UpdateApp' class='forestgreen'>Update App</button>
        
        </div>
        
    `);

    CLICKED('#UpdateApp',()=>{

        WEBSITE(UPDATELINK);

    });

}