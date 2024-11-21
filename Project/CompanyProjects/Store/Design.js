const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='Home_Div'>

            <header class='RoundHeader'>${HOMEHEADERDATA}</header>

            <div class='HomeDiv'></div>

            <br><br>
        
        </div>

        <footer class='RoundFooter' id='HomeFooter'>

            <img src='${WHITEAPPICON}'/>
             
            <img src='${WHITEGAMESICON}'/>

            <img onclick='USERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>
        
        </footer>
        
    `);

    HOMEPAGEDESIGN();

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header class='RoundHeader'>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <img class='RightIcon' onclick='RELOADPAGE()' src='${WHITRETRYICON}'/>
        
        </header>
        
    `);

};

const APPDETAILSPAGE=(data)=>{

    console.log(data);

    DISPLAY('',`

        <header class='RoundHeader'>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightText'>${data.AppName}</p>
            
        </header>

        <div class='HomeHolder'>

            <img class='AppImager' src='${data.AppImage}'/>

            <h1>${data.AppName}</h1>

            <p>${data.AppDetails}</p>

            <header id='DetailsDiver' class='RoundHeader'>

                <p class='HomeTitles'>${data.AppType}</p>

                <p class='HomeTitles'>${data.AppRatings||'No Ratings'}</p>

                <p class='HomeTitles'>Insight</p>
                
            </header>

            <div class='ImageHolder'>
            
                <img class='Images' src='${data.AppImage}'/>

                <img class='Images' src='${data.AppImage}'/>

                <img class='Images' src='${data.AppImage}'/>

            </div>

            <button class='forestgreen'>Install</button>
        
        </div>
        
    `);

    CLICKED('.forestgreen',()=>{

        WEBSITE(data.AppLink);

    });

}