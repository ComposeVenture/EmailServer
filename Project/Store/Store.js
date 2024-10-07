const DATABASEURL='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit';

const AUTORUN=()=>{

    HOMEPAGE();

    ONLINEUPDATER();

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'></div>

        <footer>

            <img onclick='PAGES()' src='${WHITEAPPICON}'/>

            <img onclick='PAGES()' src='${WHITEGAMESICON}'/>

            <img onclick='USERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>

        </footer>
        
    `);

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER('ComposeStore','App',(data)=>{

            CREATEELEMENT('div','AppDivs',(ELEMENTS)=>{

                DISPLAY(ELEMENTS,`

                    <img class='AppImages' src='${data.AppImage}'/>
                    
                `);

                ADD(ELEMENT,ELEMENTS);

                EVENT(ELEMENTS,'click',()=>{

                    WEBSITE(data.AppLink);

                });

            });

            console.log(data);
        
        });

    });

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <div class='UserAccountDiv'></div>

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='Profile'> Profile </p>

        </header>
        
    `);

};

const PAGES=()=>{

    DISPLAY('',`

        <div class='UserAccountDiv'></div>

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <input type='search' class='SearchInput' placeholder='Search' />

        </header>
        
    `);
    
};

const ONLINEUPDATER=()=>{

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('Store');

        if (localStorage.getItem('DataBaseUpdated')) {

            DATABASEUPDATER(DATABASEURL,'store','ComposeStore','App');

            return;
 
        } else {

            DATABASESAVER(DATABASEURL,'store','ComposeStore','App',(data)=>{

                if (data === true) {
    
                    TIMENOW((time)=>{
    
                        STORE('local','DataBaseUpdated',time);
    
                        HOMEPAGE();
    
                        return;
    
                    });
    
                };
    
            });
            
        };

    };

};