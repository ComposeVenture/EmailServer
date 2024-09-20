const SHEETURL='https://docs.google.com/spreadsheets/d/1IbSB2xrDMuUy56NvR7a7_nGScEP3iV_8LjNavN8EGHY/edit';

const AUTORUN=()=>{
   
    if (localStorage.getItem('UserData') && !localStorage.getItem('Verification') ) {
        
        HOMEPAGE();

        if (localStorage.getItem('NetWork')) {

            MOVIESDATA();

        }

        return;

    } else {

        if (localStorage.getItem('Verification')) {

            EMAILVERIFICATIONPAGE();

            return;
            
        }
        
        LOGINPAGE();

        return

    }
  
}

const LOGINPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='${APPLOGO}'/>

        <p>Your Home Cinema</p>

        <input type='email' id='UserEmail' class='Input' placeholder='Enter User Email' />

        <input type='password' id='UserPassword' class='Input' placeholder='Enter User Password' />

        <button class='SignInButton'>Sign In </button>

        <button onclick='CREATEACCOUNTPAGE()' class='SignUpButton'>Create Account </button>

    `);

    const UserEmail=document.querySelector('#UserEmail');

    const UserPassword=document.querySelector('#UserPassword');

    DECLARATION('.SignInButton',(ELEMENT)=>{

        CLICKED('.SignInButton',()=>{

            if (!UserEmail.value) {

                TOAST('Enter User Email');

                return;
                
            }

            if (!UserPassword.value) {

                TOAST('Enter User Password');

                return;
                
            }

            LOADER(ELEMENT);

            GETDATA(SHEETURL,'Users',(data)=>{

                FINDER(data,'UserEmail',UserEmail.value,(users)=>{

                    if (users.UserEmail === UserEmail.value) {

                        if (users.UserPassword === UserPassword.value ) {

                            JSONIFICATION(users,(ConvertedData)=>{
        
                                STORE('local','UserData',ConvertedData);

                                DELETESTORAGE('local','Verification');

                                HOMEPAGE();

                            })

                            return;
                            
                        } else {
                            
                            TOAST('Wrong User Password');

                            ORIGIN(ELEMENT,'Sign In');
    
                            return;

                        }
                        
                    }else{

                        TOAST('No User Account Found');

                        ORIGIN(ELEMENT,'Sign In');

                        return;

                    }

                });

            });

        })

    });

}

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='${APPLOGO}'/>

        <p>Your Home Cinema</p>

         <input type='text' id='UserName' class='Input' placeholder='Enter User Name' />

        <input type='email' id='UserEmail' class='Input' placeholder='Enter User Email' />

        <input type='password' id='UserPassword' class='Input' placeholder='Enter User Password' />

        <button class='SignInButton'>Sign Up </button>

        <button onclick='LOGINPAGE()' class='SignUpButton'>Log In </button>

    `);

    DECLARATION('.SignInButton',(ELEMENT)=>{

        const USERNAME=document.querySelector('#UserName');
        const USEREMAIL=document.querySelector('#UserEmail');
        const USERPASSWORD=document.querySelector('#UserPassword');

        CLICKED('.SignInButton',()=>{

            if (!USERNAME.value) {
                
                TOAST('Enter User Name');

                return;

            };

            if (!USEREMAIL.value) {
                
                TOAST('Enter User Email');

                return;

            };

            if (!USERPASSWORD.value) {
                
                TOAST('Enter User Password');

                return;

            };

            LOADER(ELEMENT);

            GETDATA(SHEETURL,'Users',(data)=>{

                FINDER(data,'UserEmail',USEREMAIL.value,(users)=>{

                    if (users.UserEmail === USEREMAIL.value) {
                        
                        TOAST('User With Email Found');

                        ORIGIN(ELEMENT,'Sign Up');

                        return;

                    }

                    RANDOMCODE((code)=>{

                        DEVICED((deviceData)=>{

                            const USERSDATA={
                                "UserName":USERNAME.value,
                                "UserEmail":USEREMAIL.value,
                                "UserPassword":USERPASSWORD.value,
                                "Code":code,
                                "ProfileImage":"",
                                "Device":deviceData,
                                "CreatedOn":new Date()
                            }
    
                            JSONIFICATION(USERSDATA,(ConvertedData)=>{
    
                                POSTMAIL(USEREMAIL.value,'Movie Lander Account Creation',`Dear ${USERNAME.value}\n Your Verification Code is ${code}`,(response)=>{

                                    STORE('local','UserData',ConvertedData);

                                    STORE('local','Verification','On');

                                    EMAILVERIFICATIONPAGE();

                                    return;

                                });
        
                            });

                        });

                    });

                });

            })

        });

    });

}

const EMAILVERIFICATIONPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <img class='AppLogo' src='${APPLOGO}'/>
    
            <p>Your Home Cinema</p>
    
            <input type='tel' maxlength='6'  id='UserEmail' class='Input' placeholder='Enter Verification Code' />
    
            <button class='SignInButton'>Verify</button>
    
            <button class='SignUpButton'>Cancel</button>
    
        `);

        const UserEmail=document.querySelector('#UserEmail');

        DECLARATION('.SignInButton',(ELEMENT)=>{

            CLICKED('.SignInButton',()=>{

                if (!UserEmail.value) {

                    TOAST('Enter Verification Code');

                    return;
                    
                }

                if ( UserEmail.value !== data.Code  ) {

                    TOAST('Enter Correct Verification Code');

                    return;
                    
                }

                LOADER(ELEMENT);

                const HEADER=["UserName","UserEmail","Device","UserPassword","Code","CreatedOn","ProfileImage"];

                const DATA=[data.UserName,data.UserEmail,data.Device,data.UserPassword,data.Code,data.CreatedOn,data.ProfileImage];

                GETDATA(SHEETURL,'Users',(MyData)=>{

                    FINDER(MyData,'UserEmail',data.UserEmail,(users)=>{

                        if (users.UserEmail === data.UserEmail ) {

                            TOAST('User With Email Found');

                            ORIGIN(ELEMENT,'Verify');
    
                            return;

                        }

                        INSERTDATA(SHEETURL,'Users',HEADER,DATA,(response)=>{

                            GETDATA(SHEETURL,'Users',(MyData)=>{
        
                                FINDER(MyData,'UserEmail',data.UserEmail,(users)=>{
        
                                    if (users.UserEmail === data.UserEmail ) {
        
                                        JSONIFICATION(users,(ConvertedData)=>{
        
                                            STORE('local','UserData',ConvertedData);
        
                                            DELETESTORAGE('local','Verification');
        
                                            HOMEPAGE();
    
                                        })

                                        return;
         
                                    }
        
                                    TOAST('Something Went Wrong ,Try Again');
        
                                    ORIGIN(ELEMENT,'Verify');
        
                                    return;
        
                                });
        
                            })
        
                        })

                    });

                })
                
            });

        });

        CLICKED('.SignUpButton',()=>{

            DELETESTORAGE('local','UserData');

            DELETESTORAGE('local','Verification');

            LOGINPAGE();

        });

    });

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <div id='TrendingMoviesDiv' class='AdvertDiv'></div>

            <header class='DataHeader'>

                <p class='Titles'>Animations</p>

                <img class='MoreIcon' id='MoreAnimations' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeAnimationDiv'  class='AdvertDiv'></div>

            <header class='DataHeader'>

                <p class='Titles'>Movies</p>

                <img class='MoreIcon' id='MoreMovies' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeMoviesDiv' class='AdvertDiv'></div>

            <div id='BestMoviesDiv' class='AdvertDiv'></div>
            
            <header class='DataHeader'>

                <p class='Titles'>Horrors</p>

                <img class='MoreIcon' id='MoreHorrors' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeHorrorDiv'  class='AdvertDiv'></div>

            <header class='DataHeader'>

                <p class='Titles'>Romance</p>

                <img class='MoreIcon' id='MoreRomance' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeRomanceDiv' class='AdvertDiv'></div>

            <div id='BestActionDiv'  class='AdvertDiv'></div>

            <header class='DataHeader'>

                <p class='Titles'>Nigerian</p>

                <img class='MoreIcon' id='MoreNigerian' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeNigerianDiv' class='AdvertDiv'></div>

            <header class='DataHeader'>

                <p class='Titles'>Adventure</p>

                <img class='MoreIcon' id='MoreAdventures' src='${WHITERIGHTBACKICON}'/>

            </header>

            <div id='HomeMarathonDiv' class='AdvertDiv'></div>

            <div id='BestMarathonDiv' class='AdvertDiv'></div>

            <br><br><br><br>
        
        </div>
        
        <footer id='RoundFooter' class='RoundFooter'>

            <img src='${WHITEGRIDICON}'/>

            <img src='${WHITESAVEDICON}'/>

            <img onclick='USERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>
        
        </footer>

    `);

    ADVERTSMOVIE();

    ALLMOVIES('#HomeAnimationDiv','Animation');

    ALLMOVIES('#HomeMoviesDiv','Action');

    ALLMOVIES('#HomeRomanceDiv','Action');

    ALLMOVIES('#HomeHorrorDiv','Action');

    ALLMOVIES('#HomeNigerianDiv','Action');

    ALLMOVIES('#HomeMarathonDiv','Action');

    SINGLEMOVIES('#BestMoviesDiv','Animation');

    SINGLEMOVIES('#BestMoviesDiv','Animation');

    SINGLEMOVIES('#BestActionDiv','Action');

    SINGLEMOVIES('#BestMarathonDiv','Animation');

    CLICKED('#MoreAnimations',()=>{

        MORESECTION('Animation');

    });

    CLICKED('#MoreMovies',()=>{

        MORESECTION('Action');

    });

    CLICKED('#MoreHorrors',()=>{

        MORESECTION('Action');

    });

    CLICKED('#MoreRomance',()=>{

        MORESECTION('Action');

    });

    CLICKED('#MoreNigerian',()=>{

        MORESECTION('Action');

    });

    CLICKED('#MoreAdventures',()=>{

        MORESECTION('Action');

    });

}

const ADVERTSMOVIE=()=>{

    const TrendingMoviesDiv=document.querySelector('#TrendingMoviesDiv');

    GETINDEXED('ComposeMovies','Movies',(data)=>{

        REDUX(data,(Element)=>{

            SINGLESHUFFLE(Element.Data,(element)=>{

                DISPLAY(TrendingMoviesDiv,`

                    <img class='AdsImage' src='${element.Image}'/>

                    <img class='AdDownloadIcon' src='${WHITEDOWNLOADICON}'/>

                    <p class='AdsMovieName'>${element.MovieName}</p>
       
                `);

                EVENT(TrendingMoviesDiv,'click',()=>{

                    MOVIESPAGE(element);

                })

            });

        });

    });

}

const MOVIESDATA=()=>{

    GETDATA(SHEETURL,'Movies',(data)=>{

        const DATA={
            "Name":"MovieLander",
            "Data":data
        };

        STOREINDEXED('ComposeMovies','Movies',DATA,(response)=>{

            if (response === true ) {

                STORE('local','Updated','On');

                HOMEPAGE();
                
                return;

            }

            if (response === false  ) {

                if (localStorage.getItem('Updated')) {

                    UPDATEDATA('ComposeMovies','Movies',DATA);

                    return;
                    
                } else {

                    AUTORUN();

                    return;
                    
                }
                
            }

        })

    })

}

const ALLMOVIES=(DIVS,SECTION)=>{

    const TrendingMoviesDiv=document.querySelector(DIVS);

    GETINDEXED('ComposeMovies','Movies',(data)=>{

        CLEAR(TrendingMoviesDiv);

        REDUX(data,(Element)=>{

            REDUX(Element.Data,(element)=>{

                if (element.Catergory === SECTION ) {

                    CREATEELEMENT('div','HomeMiniDivs',(ELEMENT)=>{

                        DISPLAY(ELEMENT,`

                            <img class='MiniImage' src='${element.Image}'/>
                            
                        `);

                        ADD(TrendingMoviesDiv,ELEMENT);

                        EVENT(ELEMENT,'click',()=>{

                            MOVIESPAGE(element);

                        })

                        return;

                    });
                    
                }

            });

        });

    });

}

const SINGLEMOVIES=(DIV,SECTION)=>{

    const TrendingMoviesDiv=document.querySelector(DIV);

    GETINDEXED('ComposeMovies','Movies',(data)=>{

        REDUX(data,(Element)=>{

            DATASINGLESHUFFLE(Element.Data,'Catergory',SECTION,(element)=>{

                DISPLAY(TrendingMoviesDiv,`

                    <img class='AdsImage' src='${element.Image}'/>

                    <img class='AdDownloadIcon' src='${WHITEDOWNLOADICON}'/>

                    <p class='AdsMovieName'>${element.MovieName}</p>
       
                `);

                EVENT(TrendingMoviesDiv,'click',()=>{

                    MOVIESPAGE(element);

                })

                return;

            });

        });

    });

}

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <h3 class='ProfileHouse' >My Profile</h3>
        
        </header>

    `);

}

const MORESECTION=(SECTION)=>{

    DISPLAY('',`

        <div class='MoreDivs'></div>

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <h3 class='ProfileHouse' >${SECTION}</h3>
        
        </header>
        
    `);

    DECLARATION('.MoreDivs',(ELEMENT)=>{

        GETINDEXED('ComposeMovies','Movies',(data)=>{

            CLEAR(ELEMENT);
    
            REDUX(data,(Element)=>{
    
                REDUX(Element.Data,(element)=>{
    
                    if (element.Catergory === SECTION ) {
    
                        CREATEELEMENT('div','MoreMiniDivs',(ELEMENTED)=>{
    
                            DISPLAY(ELEMENTED,`
    
                                <img class='MiniImage' src='${element.Image}'/>
                                
                            `);
    
                            ADD(ELEMENT,ELEMENTED);

                            EVENT(ELEMENTED,'click',()=>{

                                MOVIESPAGE(element,SECTION);
            
                            })
    
                            return;
    
                        });
                        
                    }
    
                });
    
            });
    
        });

    })

}

const MOVIESPAGE=(data,SECTION)=>{

    DISPLAY('',`

        <header>

            <img  class='BackIcon' src='${WHITEBACKICON}'/>

            <h3 class='ProfileHouse' >${data.MovieName}</h3>
        
        </header>

        <div class='MoreDivs'>

            <div class='DetailsHolder'>

                <img  class='MoviesPageImage' src='${data.Image}'/>

                <img class='PlayIcon' src='${WHITEPLAYICON}'/>

                <div class='DataHolder'>

                    <h1 class='MoviePageCatergory' >${data.Catergory}</h1>

                    <img class='PaidImage' src='${WHITELOCKICON}'/>

                </div>
            
            </div>

            <div class='MovieDataImages'>

                <img class='MoviePageImages' src='${data.Image}'/>

                <img class='MoviePageImages' src='${data.Image}'/>

                <img class='MoviePageImages' src='${data.Image}'/>
            
            </div>

            <div class='MovieDetails'></div>

            <button class='WatchButton'>Watch</button>
        
        </div>

    `);

    CLICKED('.BackIcon',()=>{

        if (!SECTION) {

            HOMEPAGE();

        } else {

            MORESECTION(SECTION,SECTION); 

        }

    });

    CLICKED('.PlayIcon',()=>{

        TRAILORPAGE(data,SECTION)

    })

}

const TRAILORPAGE=(data,SECTION)=>{

    console.log(data)

    DISPLAY('',`

        <header>

            <img  class='BackIcon' src='${WHITEBACKICON}'/>

            <h3 class='ProfileHouse' >${data.MovieName}</h3>
        
        </header>

        <video class='TrailorPlayer' autoplay controls src=${data.TrailorVideo}></video>
        
    `);

    CLICKED('.BackIcon',()=>{

        MOVIESPAGE(data,SECTION);

    });

}