const DESKTOPHOMEPAGE=()=>{

    DELETESTORAGE('','ProjectImage');

    DISPLAY('',`

        <div class='Holder' >

            <h2>Lander Manager</h2>

            <button class='PremiumButton'>

                <p class='Package'>Users</p>

                <img class='Imagers' src='${WHITEGROUPICON}'/>
                        
            </button>

            <button class='PremiumButton'>

                <p class='Package'>App Movies</p>

                <img class='Imagers' src='${WHITEMOVIESICON}'/>
                        
            </button>

            <button class='PremiumButton'>

                <p class='Package'>Movies Catergory</p>

                <img class='Imagers' src='${WHITELIBRARYICON}'/>
                        
            </button>

            <button class='PremiumButton'>

                <p class='Package'>Deleted Users</p>

                <img class='Imagers' src='${WHITEDELETEICON}'/>
                        
            </button>

            <button class='PremiumButton'>

                <p class='Package'>Deleted Movies</p>

                <img class='Imagers' src='${WHITEDELETEICON}'/>
                        
            </button>
  
            <button onclick='RELOADPAGE()' class='PremiumButton'>

                <p class='Package'>Sync Manager</p>

                <img class='Imagers' src='${WHITRETRYICON}'/>
                        
            </button>
        
        </div>

        <div class='ProjectHolder'></div>
        
    `);


}