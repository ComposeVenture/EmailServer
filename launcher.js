const APPSTART=()=>{
            
    if (localStorage.getItem('Updates')) {

        AUTORUN();

    }else{

        DISPLAY('',`

            <br>

            <h1>Wallet</h1>

            <p>Cloud Banking Platform</p>
    
            <h4>Sync Device to Start Using the App</h4>

            <img class='AppLogo' src='${WHITESYNCICON}'/>

            <p>
                To Access Most Features On the App.

                <br><br>

                To Fix Any Bug Fixs On the App.
            
            <p>
    
            <button onclick='Synce()' id='SyncApp' class='forestgreen'>Sync Device</button>

        `);

    };

    const SYNCBUTTON=document.querySelector('#SyncApp');

    Synce=()=>{

        if (localStorage.getItem('NetWork')) {

            LOADER(SYNCBUTTON);

            const DATA={

                "sheetName":"Connections"

            };

            POSTPACKAGE(GETAPI,'',DATA,(data)=>{

                REDUX(data,(element)=>{

                    STORE('local',element.Name,element.Link);

                    STORE('local','Updates','Updated');

                    setTimeout(() => {

                        RELOADPAGE();
                        
                    }, 1000);

                });

            });
 
        } else {

            TOAST('Check Your Internet Connection');
            
        };

    };
    
};
