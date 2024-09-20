const SHEETURL = 'https://docs.google.com/spreadsheets/d/1IbSB2xrDMuUy56NvR7a7_nGScEP3iV_8LjNavN8EGHY/edit';

const AUTORUN = () => {
    HOMEPAGE();
    DOWNLOADMOVIES();
}

const DOWNLOADMOVIES = () => {

    GETDATA(SHEETURL, 'Movies', (data) => {

        const DATA={
            "Name":"Movies",
            "Data":data
        }

        STOREINDEXED('MovieLander','Movies',DATA,(data)=>{

            console.log(data)

            if (data === true) {
              
                GETMOVIES();

                STORE('local','Updated','ON');

                return;
                
            }else{

                if (localStorage.getItem('Updated')) {

                    UPDATEINDEXED('MovieLander','Movies',DATA)

                    return;
                    
                } else{

                        
                    AUTORUN();

                    return;

                }

            }

        })

    });
}

const HOMEPAGE = () => {
    DISPLAY('', `
        <div class='HomeDiv'></div>
        <button onclick='POSTMOVIESPAGE()' id='FixedButton' class='forestgreen'>
            <img src='${WHITEPOSTICON}'/>
        </button>
    `);

    const HomeDiv = document.querySelector('.HomeDiv');
    LOADER(HomeDiv, 'HomeLoader');

    GETMOVIES();

}

const GETMOVIES = () => {

    DECLARATION('.HomeDiv', (ELEMENT) => {

        GETINDEXED('MovieLander','Movies',(data)=>{

            CLEAR(ELEMENT);

            REDUX(data,(element)=>{

                REDUX(element.Data,(elsse)=>{

                    CREATEELEMENT('div', 'MovieDivs', (ELEMENTED) => {
                        DISPLAY(ELEMENTED, `
                            <img class='MovieImage' src='${elsse.Image}'/>
                            <p class='MovieName'>${elsse.MovieName}</p>
                        `);
                        ADD(ELEMENT, ELEMENTED);
                    })

                });

            });

        })

    });
}

const POSTMOVIESPAGE = () => {
    DELETESTORAGE('', 'Parental');
    DELETESTORAGE('', 'Premium');
    DELETESTORAGE('', 'Image');

    DISPLAY('', `
        <header>
            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
            <p class='MoviesSections'>Movies Upload</p>
        </header>
        <div class='UploadDiv'>
            <input type='text' id='MovieName' class='Input' placeholder='Enter Movie Name' />
            <input type='text' id='MovieCatergory' class='Input' placeholder='Enter Movie Category' />
            <input type='text' id='MovieLink' class='Input' placeholder='Enter Movie Link' />
            <textarea class='AboutMovie' placeholder='About Movie'></textarea>
            <p class='colorteal'>Add Movie Image</p>
            <img class='Imaged'/>
            <button class='gray'>Parental Controlled</button>
            <button class='blue'>Paid</button>
            <button class='forestgreen'>Upload Movie</button>
        </div>
    `);

    const MovieName = document.querySelector('#MovieName');
    const MovieCatergory = document.querySelector('#MovieCatergory');
    const MovieLink = document.querySelector('#MovieLink');
    const AboutMovie = document.querySelector('.AboutMovie');

    var IMAGEDATA;

    CLICKED('.colorteal', () => {
        IMAGEPICKER('.Imaged', (data) => {
            IMAGEDATA=data;
            STORE('', 'Image', data);
        });
    });

    CLICKED('.gray', () => {
        DECLARATION('.gray', (ELEMENT) => {
            if (localStorage.getItem('Parental')) {
                STYLED(ELEMENT, 'background', 'grey');
                DELETESTORAGE('', 'Parental');
            } else {
                STYLED(ELEMENT, 'background', 'teal');
                STORE('', 'Parental', 'True');
            }
        });
    });

    CLICKED('.blue', () => {
        DECLARATION('.blue', (ELEMENT) => {
            if (localStorage.getItem('Premium')) {
                STYLED(ELEMENT, 'background', 'blue');
                DELETESTORAGE('', 'Premium');
            } else {
                STYLED(ELEMENT, 'background', 'red');
                STORE('', 'Premium', 'True');
            }
        });
    });

    const HEADERS = ["MovieName", "Catergory", "Link", "Details", "Image", "ParentalControl", "Premium", "DateCreated"];

    CLICKED('.forestgreen', () => {
        const DATA = [
            MovieName.value,MovieCatergory.value,MovieLink.value,AboutMovie.value,IMAGEDATA,localStorage.getItem('Parental'),localStorage.getItem('Premium'),new Date()
        ];

        DECLARATION('.forestgreen', (ELEMENT) => {
            if (!MovieName.value) {
                TOAST('Enter Movie Name');
                return;
            }

            if (!MovieLink.value) {
                TOAST('Add Movie Link');
                return;
            }

            if (!sessionStorage.getItem('Image')) {
                TOAST('Add Movie Image');
                return;
            }

            LOADER(ELEMENT);

            INSERTDATA(SHEETURL, 'Movies', HEADERS, DATA, (data) => {
            
                GETDATA(SHEETURL, 'Movies', (data) => {

                    const DATA={
                        "Name":"Movies",
                        "Data":data
                    }
            
                    STOREINDEXED('MovieLander','Movies',DATA,(data)=>{
            
                        console.log(data)
            
                        if (data === true) {
                          
                            HOMEPAGE();
            
                            STORE('local','Updated','ON');
            
                            return;
                            
                        }else{
            
                            if (localStorage.getItem('Updated')) {
            
                                UPDATEINDEXED('MovieLander','Movies',DATA);

                                HOMEPAGE();
            
                                return;
                                
                            } else{

                                AUTORUN();
            
                                return;

                            }
            
                        }
            
                    })
            
                });
            
            });
        });
    });
}
