const NETWORKCHECKER=()=>{

    setInterval(() => {
        
        NETWORKED();

    }, 1000);

};

const APPUPDATER=()=>{

    if (localStorage.getItem('NetWork')) {

        APPLOADUPDATER(NAME);
        
    };

};

const STOREDATAAPPSUPDATER=()=>{

    if (localStorage.getItem('NetWork')) {

        HIDER(1000,()=>{

            DATABASESAVER(DATABASECONNECTION,'Store','Store','Apps',(data)=>{

                if (data === true ) {

                    HIDER(3000,()=>{

                        HOMEPAGE();

                    });

                } else {

                    DATABASEUPDATER(DATABASECONNECTION,'Store','Store','Apps');
                    
                }

            });

        });
        
    };

};