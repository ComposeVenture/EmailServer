const DATABASEURL='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit';

const AUTORUN=()=>{

    HOMEPAGE();

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('Store');

        APPDATADOWNLOAD();

        return;
        
    }

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

}

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

const APPDATADOWNLOAD=()=>{

    GETDATA(DATABASEURL,'Store',(data)=>{

        console.log(data);

    });

};