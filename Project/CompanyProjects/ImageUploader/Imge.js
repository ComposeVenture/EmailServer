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

        <button onclick='UPLOADIMAGESPAGE()' id='Single' class='FloatButton'>

            <img src='${WHITEPOSTICON}'/>
        
        </button>
        
        <button onclick='CREATEALBUMPAGE()' id='Multiple' class='FloatButton'>

            <img src='${WHITELIBRARYICON}'/>
        
        </button>
        
    `);

}

const UPLOADIMAGESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img  onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
        </header>

        <div class='HomeDiv'>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <button class='teal'>Save Memory</button>

        </div>
        
    `);

}

const CREATEALBUMPAGE=()=>{

    DISPLAY('',`

        <header>

            <img  onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightedText' >Create Albums</p>
        
        </header>

        <div class='HomeDiv'>

            <input type='text' class='Input' placeholder='Name Your Album' />

            <textarea placeholder='Describe Your Album' ></textarea>

            <p>Add Photos To Complete Album</p>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <img class='ImagesHolder' src='${BLACKIMAGEICON}'/>

            <button class='teal'>Create Album </button>

        </div>
        
    `);

}

TOKENIZATION('erou@gmail.com','example.com/payemnt',1)