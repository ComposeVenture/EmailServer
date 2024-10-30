const SHEETLINKURLI='https://docs.google.com/spreadsheets/d/1nUPpLO_Q_LDzIlA4AnaAu2Y87nZ3MbPN14xQD6jBHR0/edit';

const AUTORUN=()=>{

    NETWORKED();

    LOGICPAGE();

}

const LOGICPAGE=()=>{

    CHECKER(localStorage.getItem('NetWork'),()=>{
        
        HIDER(2000,()=>{

            APPLOADUPDATER(NAME);

            DATABASESAVER(SHEETLINKURLI,'MovieLander','MovieLander','MovieLander',(data)=>{

                if (data === true ) {

                    console.log('Data Inserted');
                    
                } else {

                    DATABASEUPDATER(SHEETLINKURLI,'MovieLander','MovieLander','MovieLander');
                    
                };

            });
        
        });

    });


    if (localStorage.getItem('UserData')) {

        HOMEPAGE();
        
    } else {

        if (localStorage.getItem('UserVerification')) {

            ACCOUNTVERIFICATION();
            
        } else {

            LOGINPAGE();
            
        }
         
    }

}

const LOGINPAGE=()=>{

    DISPLAY('',`

        <img onclick='RELOADPAGE()'  class='AppLogo' src='${localStorage.getItem('AppIcon')}'/>

        <input class='Input' type='text' id='Email' placeholder='Enter Email'/>

        <input class='Input' type='password' id='Password' placeholder='Enter Password'/>

        <p class='ForgotPassword' >Forgot Password?</p>

        <button class='forestgreen'>Sign In</button>

        <button class='blue' onclick='CREATEACCOUNTPAGE()' >Create Account</button>
        
    `);

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    CLICKED('.forestgreen',()=>{

        DECLARATION('.forestgreen',(ELEMENT)=>{

            if (!Email.value) {

                TOAST('Enter User Email');
    
                return;
                
            };
    
            if (!Password.value) {
    
                TOAST('Enter User Password');
    
                return;
                
            };
            if (!localStorage.getItem('NetWork')) {

                TOAST('Check Your Internet Connection');
                
            }else{

                LOADER(ELEMENT);

                GETDATA(SHEETLINKURLI,'Users',(data)=>{

                    FINDER(data,'UserEmail',Email.value,(users)=>{

                        if (users.UserEmail === Email.value ) {

                            if (users.UserPassword === Password.value ) {

                                JSONIFICATION(users,(Mydata)=>{

                                    STORE('local','UserData',Mydata);

                                    HOMEPAGE();

                                });
                                
                            } else {

                                TOAST('Invalid Password');

                                ORIGIN(ELEMENT,'Sign In');
                                
                            }
                            
                        } else {

                           TOAST('User Account Not Found');

                           ORIGIN(ELEMENT,'Sign In');

                        }

                    });

                });

            };

        });

    });

};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img onclick='RELOADPAGE()'  class='AppLogo' src='${localStorage.getItem('AppIcon')}'/>

        <input class='Input' type='text' id='UserName' placeholder='Enter Name' />

        <input class='Input' type='text' id='Email' placeholder='Enter Email' />

        <input class='Input' type='password' id='Password' placeholder='Enter Password' />

        <button class='forestgreen' >Sign Up</button>

        <button class='blue' onclick='LOGINPAGE()' >Login </button>
        
    `);

    const UserName=document.querySelector('#UserName');

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    CLICKED('.forestgreen',()=>{

        DECLARATION('.forestgreen',(ELEMENT)=>{

            if (!UserName.value) {

                TOAST('Enter User Name');
    
                return;
                
            };

            if (!Email.value) {

                TOAST('Enter User Email');
    
                return;
                
            };
    
            if (!Password.value) {
    
                TOAST('Enter User Password');
    
                return;
                
            };
            if (!localStorage.getItem('NetWork')) {

                TOAST('Check Your Internet Connection');
                
            }else{

                LOADER(ELEMENT);

                GETDATA(SHEETLINKURLI,'Users',(data)=>{

                    FINDER(data,'UserEmail',Email.value,(users)=>{

                        if (users.UserEmail === Email.value ) {

                            TOAST('UserEmail Taken');

                            ORIGIN(ELEMENT,'Sign Up');
    
                        } else {

                            RANDOMCODE((code)=>{

                                const USERDATA={
                                    "UserName":UserName.value,
                                    "UserEmail":Email.value,
                                    "UserPassword":Password.value,
                                    "UserCode":code
                                }

                                POSTMAIL(Email.value,'Movie Lander Email Creation',`Dear ${UserName.value}\n Your Account Activation Code is ${code}`,(data)=>{

                                    JSONIFICATION(USERDATA,(UsersData)=>{

                                        STORE('local','UserDataOne',UsersData);

                                        STORE('local','UserVerification',code);

                                        ACCOUNTVERIFICATION();

                                    });

                                });
                            
                            });

                        };

                    });

                });

            };

        });

    });

}

const HOMEPAGE=()=>{

    MYACCOOUNT();

    DISPLAY('',`

        <div class='HomeDiv'></div>

        <footer class='RoundFooter'>

            <img onclick='CATERGORYPAGE()' src='${WHITELISTICON}'/>

            <img onclick='MOVIESPAGE()' src='${WHITEMOVIESICON}'/>

            <img onclick='USERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>
        
        </footer>
        
    `);

    HOMEPAGEDESIGN();

}

const HOMEPAGEDESIGN=()=>{

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <div id='LatestAnimation' class='HolderDivs'></div>

            <div class='HolderDivs'>

                <p class='LeftText'>Animations</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Animation' class='MovieHolder'></div>
            
            </div>

            <div class='HolderDivs'>

                <p class='LeftText'>Movies</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Movies' class='MovieHolder'></div>
            
            </div>

            <div class='HolderDivs' id='LatestMovies' ></div>

            <div class='HolderDivs'>

                <p class='LeftText'>Horrors</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Horrors' class='MovieHolder'></div>
            
            </div>

            <div class='HolderDivs'>

                <p class='LeftText'>Nigerian</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Nigerian' class='MovieHolder'></div>
            
            </div>

            <div id='LatestNigerian' class='HolderDivs'></div>

            <div class='HolderDivs'>

                <p class='LeftText'>Adventure</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Adventure' class='MovieHolder'></div>
            
            </div>

            <div class='HolderDivs'>

                <p class='LeftText'>Marathons</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Marathons' class='MovieHolder'></div>
            
            </div>

            <div id='LatestMarathons' class='HolderDivs'></div>

            <div class='HolderDivs'>

                <p class='LeftText'>Romance</p>

                <img class='MoreIcon' src='${WHITEBACKICON}'/>

                <div id='Romance' class='MovieHolder'></div>
            
            </div>

            <br><br><br>
            
        `);

    });

    HOMEPAGEFUNCTIONS('#LatestAnimation','Single','Animation');
    HOMEPAGEFUNCTIONS('#Animation','','Animation');
    HOMEPAGEFUNCTIONS('#Movies','','Action');
    HOMEPAGEFUNCTIONS('#LatestMovies','Single','Action');
    HOMEPAGEFUNCTIONS('#Horrors','','Action');
    HOMEPAGEFUNCTIONS('#Nigerian','','Action');
    HOMEPAGEFUNCTIONS('#LatestNigerian','Single','Action');
    HOMEPAGEFUNCTIONS('#Adventure','','Action');
    HOMEPAGEFUNCTIONS('#Marathons','','Action');
    HOMEPAGEFUNCTIONS('#LatestMarathons','Single','Action');
    HOMEPAGEFUNCTIONS('#Romance','','Romance');

}

const HOMEPAGEFUNCTIONS=(Element,Action,Type)=>{

    DECLARATION(Element,(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER('MovieLander','MovieLander',(data)=>{

            if (Action === 'Single') {
                
                SINGLEDISPLAY(ELEMENT,data,Type);
    
            } else {
                
                MULTIPLEDISPLAY(ELEMENT,data,Type);

            }

        });

    });

}

const SINGLEDISPLAY=(ELEMENT,data,Type)=>{

    DATASINGLESHUFFLE([data],'Catergory',Type,(res)=>{

        CREATEELEMENT('div','LatestAnimation',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`

                <img class='LatestAnimationImage'  src='${res.Image}'/>
                
            `);

            ADD(ELEMENT,ELEMENTS);

            EVENT(ELEMENTS,'click',()=>{
                
                MOVIEDETAILSPAGE(res);

            });

        });

    })

}

const MULTIPLEDISPLAY=(ELEMENT,data,Type)=>{

    if (data.Catergory === Type ) {

        CREATEELEMENT('div','AnimationDiv',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`
    
                <img class='LatestAnimationImage'  src='${data.Image}'/>
                
            `);
    
            ADD(ELEMENT,ELEMENTS);

            EVENT(ELEMENTS,'click',()=>{
                
                MOVIEDETAILSPAGE(data);

            });
    
        });
        
    };

}

const MOVIEDETAILSPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            
            <p class='RightText' >${data.MovieName}</p>
        
        </header>

        <div class='HolderDiv'>

            <div id='DetailsHodler' class='HolderDivs'>

                <img class='LatestAnimationImage'  src='${data.Image}'/>

                <div class='PlayIcon' >

                    <img src='${WHITEPLAYICON}'/>
                
                </div>

            </div>

            <div class='Header' >

                <p id='Catergory' class='Titles'>${data.Catergory}</p>

               <img class='ParentalIcon'  src='${WHITEPARENTALCONTROLICON}'/>

                <p id='Rating' class='Titles'>Rated:${data.MovieRating}</p>
            
            </div>

            <button class='brown'>Watch</button>

            <div class='Header' >

                <p id='PaymentTitle' class='Titles'>${data.Premium||'Free'}</p>

                <p id='Comments' class='Titles'>Comment</p>

               <img class='ParentalIcon' id='Payment'  src='${WHITEUNHEARTICON}'/>
            
            </div>

            <div class='MovieDetailsHolder'><p class='MovieDetails' >${data.Details}</p></div>

            <footer class='RoundFooter' >

                <img src='${WHITESAVEICON}'/>

                <img  src='${WHITEHELPICON}'/>

                <img  src='${WHITESHAREICON}'/>

            </footer>

        </div>
        
    `);

    CLICKED('.brown',()=>{
        DEJSON('local','UserData',(datata)=>{

            if (datata.Premium) {

                DISPLAY('',`

                    <header>
        
                        <img id='BackIconOne' class='BackIcon' src='${WHITEBACKICON}'/>
        
                        
                        <p class='RightText' >${data.MovieName}</p>
                    
                    </header>
        
                    <iframe class='TrailorPlayer' src='${data.Link}'/></iframe>
                    
                `);
        
                CLICKED('#BackIconOne',()=>{

                    MOVIEDETAILSPAGE(data);

                });
                
            } else {

                DISPLAY('',`

                    <header>
        
                        <img id='BackIconTwo' class='BackIcon' src='${WHITEBACKICON}'/>
        
                        
                        <p class='RightText' >${data.MovieName}</p>
                    
                    </header>
        
                    <div class='HolderDiv' >

                        <p>Subscribe Your Package To Watch</p>

                        <button  class='PremiumButton'>

                            <p class='Package'>Daily</p>

                            <p class='Packager'>1 USD</p>
                        
                        </button>

                        <button  class='PremiumButton'>

                            <p class='Package'>Weekly</p>

                            <p class='Packager'>5 USD</p>
                        
                        </button>

                        <button  class='PremiumButton'>

                            <p class='Package'>Monthly</p>

                            <p class='Packager'>10 USD</p>
                        
                        </button>

                        <button  class='PremiumButton'>

                            <p class='Package'>Yearly</p>

                            <p class='Packager'>100 USD</p>
                        
                        </button>

                    </div>
                    
                `);

                CLICKED('#BackIconTwo',()=>{

                    MOVIEDETAILSPAGE(data);
            
                });
                
            }

        })

    })

    DECLARATION('.ParentalIcon',(ELEMENT)=>{

        colorChange(ELEMENT);

    });

    DECLARATION('.ParentalIcon',(ELEMENT)=>{

        if (data.ParentalControl) {

            ELEMENT.src=WHITEPRIVACYPOLICYICON;
            
        }

    });

    DECLARATION('#Payment',(ELEMENT)=>{

        CLICKED('#Payment',()=>{

            ELEMENT.src=WHITEHEARTICON;

        });

    });

    CLICKED('.PlayIcon',()=>{

        DISPLAY('',`

            <header>

                <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

                
                <p class='RightText' >${data.MovieName}</p>
            
            </header>

            <iframe class='TrailorPlayer' src='${data.Link}'/></iframe>
            
        `);

    });

}

const MYACCOOUNT=()=>{

    if (localStorage.getItem('NetWork')) {

        GETDATA(SHEETLINKURLI,'Users',(data)=>{

            DEJSON('local','UserData',(Mydata)=>{
    
                FINDER(data,'UserEmail',Mydata.UserEmail,(users)=>{
    
                    if (users.UserEmail === Mydata.UserEmail ) {
        
                        JSONIFICATION(users,(Mydata)=>{
        
                            STORE('local','UserData',Mydata);
    
                        });
                        
                    } else {
        
                        DELETESTORAGE('local','UserData');
    
                        RELOADPAGE();
        
                    }
        
                });
    
            });
    
        });
            
    }
    
}

const ACCOUNTVERIFICATION=()=>{

    DISPLAY('',`

        <img onclick='RELOADPAGE()'  class='AppLogo' src='${localStorage.getItem('AppIcon')}'/>

        <p>Verification Code Sent To Email</p>

        <input class='Input' type='tel' maxlength='6' id='UserName' placeholder='Enter Verification Code' />

        <button class='forestgreen' >Verify</button>

        <button class='blue'>Cancel</button>
        
    `);

    const UserName=document.querySelector('#UserName');

    CLICKED('.forestgreen',()=>{

       DECLARATION('.forestgreen',(ELEMENT)=>{
        
            if (!UserName.value) {

                TOAST('Enter Verification Code');
        
                return;
                
            } 

            if (UserName.value !== localStorage.getItem('UserVerification') ) {

                TOAST('Invalid Verification Code');
        
                return;
                
            } 

            if (!localStorage.getItem('NetWork')) {

                TOAST('Check Your Internet Connection');
                
            } else {

                LOADER(ELEMENT);

                DEJSON('local','UserDataOne',(data)=>{

                    const HEADER=['UserName','UserEmail','UserPassword','UserCode','CreatedOn','Device'];

                    DEVICED((device)=>{

                        const MYDATA=[data.UserName,data.UserEmail,data.UserPassword,data.UserCode,new Date(),device]

                        INSERTDATA(SHEETLINKURLI,'Users',HEADER,MYDATA,(MyData)=>{

                            DELETESTORAGE('local','UserVerification');

                            STORE('local','UserData',data);
    
                            HOMEPAGE();
    
                        });

                    });

                });
                
            }

        });

    });
 

    CLICKED('.blue',()=>{

        DELETESTORAGE('local','UserVerification');

        RELOADPAGE();

    });
 
}

const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <header>

                <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

                <img onclick='RELOADPAGE()' class='RightIcon' src='${WHITRETRYICON}'/>
            
            </header>

            <div class='HolderDiv'>

                <div class='HolderDivs'>

                    <img class='UserProfilePhoto' src='${BLACKIMAGEICON}'/>

                    <div class='UserDetailsHolder'>

                        <p class='Package'>${data.UserName}</p>

                        <p class='Package'>Account Type :${data.Premium||'Basic'} </p>

                        <div class='UserLocationHolder'>

                            <img class='UserLocationImage' src='${WHITELOCATIONICON}'/>

                            <p class='UserLocation'>${data.Country||'No Location Added'} </p>
                        
                        </div>
                    
                        <footer class='RoundFooter' >

                            <img src='${WHITEPENCILICON}'/>

                            <img  src='${WHITEHELPICON}'/>

                            <img  src='${WHITESHAREICON}'/>

                        </footer>
                    
                    </div>
                
                </div>
            
            </div>
            
        `);

    })


}

const MOVIESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightText' >Free Cinema</p>
        
        </header>

        <div class='HolderDiv'></div>
        
    `);

}

const CATERGORYPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RightText' >Catergory</p>
        
        </header>

        <div class='HolderDiv'></div>
        
    `);

}