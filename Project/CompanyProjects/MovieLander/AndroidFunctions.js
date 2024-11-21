const ANDROIDLOGINUSER=()=>{

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    DECLARATION('#LoginUser',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!Email.value) {

                STYLED(Email,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(Email,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (!Password.value) {

                STYLED(Password,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(Password,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (localStorage.getItem("NetWork")) {

                LOADER(ELEMENT);

                STYLED(Email,'border','1px solid #cdcdcd20');

                STYLED(Password,'border','1px solid #cdcdcd20');

                MYACCOUNT(Email.value,(data)=>{

                    if (data === false) {

                        STYLED(Email,'border','1px solid red');

                        STYLED(Password,'border','1px solid red'); 
                        
                        ORIGIN(ELEMENT,`

                            <p class='leftText'>Sign In</p>

                            <img class='RightIcon' src='${WHITECHECKICON}'/>
                            
                        `);
                        
                    } else {

                        if (data.UserPassword === Password.value ) {

                            if (!data.UserCode) {

                                STYLED(Email,'border','1px solid red');

                                STYLED(Password,'border','1px solid red'); 
                                
                                ORIGIN(ELEMENT,`

                                    <p class='leftText'>Sign In</p>

                                    <img class='RightIcon' src='${WHITECHECKICON}'/>
                                    
                                `);
                                
                            }else{

                                JSONIFICATION(data,(users)=>{

                                    STORE('local','UserData',users);

                                    if (data.PremiumAccount) {

                                        ANDROIDHOMEPAGE();
                                        
                                    } else {
                                        
                                        ANDROIDPAYMENTPAGE();

                                    };

                                });

                            };

                        } else {
                            
                            STYLED(Password,'border','1px solid red'); 
                        
                            ORIGIN(ELEMENT,`
    
                                <p class='leftText'>Sign In</p>
    
                                <img class='RightIcon' src='${WHITECHECKICON}'/>
                                
                            `);

                        };
                         
                    };

                });
                
            } else {
                
                TOAST(INTERNETMESSAGE);

            };

        });

    });

};

const ANDROIDFORGOTUSERPASSWORD=()=>{

    const Email=document.querySelector('#Email');

    DECLARATION('#LoginUser',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!Email.value) {

                STYLED(Email,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(Email,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (localStorage.getItem("NetWork")) {

                LOADER(ELEMENT);

                STYLED(Email,'border','1px solid #cdcdcd20');

                MYACCOUNT(Email.value,(data)=>{

                    if (data === false) {

                        STYLED(Email,'border','1px solid red');
                        
                        ORIGIN(ELEMENT,`

                            <p class='leftText'>REcover</p>

                            <img class='RightIcon' src='${WHITECHECKICON}'/>
                            
                        `);
                        
                    } else {

                        APPPOSTMAIL(MOVIELANDEREMAILAPI,Email.value,'Movie Lander Account Recovery',`Dear ${data.UserName}\n Your Lander Account Password  is => ${data.UserPassword}\n If You did not try to Recover Your Account Just Ignore This Message`,(databack)=>{

                           
                            DISPLAY('',`

                                <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>
                                
                                <p class='Moto' >Your Home Cinema</p>
                        
                                <h4>An Email Was Sent To You <br><br> Check  Your Email Account For More Details</h4>
                        
                                <button onclick='ANDROIDLOGINPAGE()' class='BorderButton'>
                        
                                    <p class='leftText'>Cancel</p>
                        
                                    <img class='RightIcon' src='${WHITERIGHTBACKICON}'/>
                                
                                </button>
                        
                            `);  

                        });
                         
                    };

                });
                
            } else {
                
                TOAST(INTERNETMESSAGE);

            };

        });

    });

};

const ANDROIDCREATEUSER=()=>{

    const UserName=document.querySelector("#UserName");

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    DECLARATION('#LoginUser',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!UserName.value) {

                STYLED(UserName,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(UserName,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (!Email.value) {

                STYLED(Email,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(Email,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (!Password.value) {

                STYLED(Password,'border','1px solid red');

                HIDER(2000,()=>{

                    STYLED(Password,'border','1px solid #cdcdcd20');

                });

                return;
                
            };

            if (localStorage.getItem("NetWork")) {

                LOADER(ELEMENT);

                STYLED(Email,'border','1px solid #cdcdcd20');

                STYLED(Password,'border','1px solid #cdcdcd20');

                MYACCOUNT(Email.value,(data)=>{

                    if (data === false) {

                        RANDOMCODE((code)=>{

                            APPPOSTMAIL(MOVIELANDEREMAILAPI,Email.value,'Movie Lander Account Creation',`Dear ${UserName.value}\n Your Lander Account Verification Code is ${code}\n If You did Try to Create An Account Just Ignore This Message`,(databack)=>{

                                console.log(databack);

                                const MyDATA={
                                    "UserName":UserName.value,
                                    "UserEmail":Email.value,
                                    "UserPassword":Password.value,
                                    "UserCode":code
                                };

                                JSONIFICATION(MyDATA,(SavedData)=>{

                                    STORE('local','AccountActivation',true);

                                    STORE('local','MyData',SavedData);

                                    ANDROIDACCOUNTVERIFICATIONPAGE();

                                });

                            });

                        });

               
                    } else {

                        STYLED(Email,'border','1px solid red');

                        ORIGIN(ELEMENT,`

                            <p class='leftText'>Sign Up</p>

                            <img class='RightIcon' src='${WHITECHECKICON}'/>
                            
                        `);
                         
                    };

                });
                
            } else {
                
                TOAST(INTERNETMESSAGE);

            };

        });

    });

};

const ANDROIDACCOUNTVERIFICATION=()=>{

    const Email=document.querySelector("#Email");

    CLICKED("#VerificationButton",()=>{

        if (!Email.value) {

            STYLED(Email,'border','1px solid red');

            HIDER(2000,()=>{

                STYLED(Email,'border','1px solid #cdcdcd20');

            });
            
        };

        DECLARATION('#VerificationButton',(ELEMENT)=>{

            DEJSON('local','MyData',(data)=>{

                if (Email.value !== data.UserCode) {

                    STYLED(Email,'border','1px solid red');

                    HIDER(2000,()=>{

                        STYLED(Email,'border','1px solid #cdcdcd20');
        
                    });
                    
                }else{

                    if (localStorage.getItem('NetWork')) {

                        LOADER(ELEMENT);
    
                        MYACCOUNT(data.UserEmail,(datata)=>{
    
                            if (datata === false ) {
    
                                DEVICED((device)=>{
    
                                    const MYDATA=[data.UserName,data.UserEmail,data.UserPassword,data.UserCode,new Date(),device,'','','','','','','','','','','',new Date(),'','','','','','',''];
    
                                    NEWDATAINSERTATION(MYDATA,(datated)=>{
    
                                        DELETESTORAGE('local','AccountActivation');
    
                                        MYACCOUNT(data.UserEmail,(MyData)=>{
    
                                            if (MyData === false ) {
    
                                                TOAST('No User Account Found'); 
                                                
                                            }else{
    
                                                JSONIFICATION(MyData,(SavededData)=>{
    
                                                    STORE('local','UserData',SavededData);
    
                                                    HIDER(1000,()=>{
    
                                                        DELETESTORAGE("local",'MyData');
    
                                                        RELOADPAGE();
    
                                                    });
    
                                                });
    
                                            };
    
                                        });
        
                                    });
    
                                });
                                
                            } else {
                               
                                TOAST('User Account Exists'); 
                                
                            };
    
                        });
                        
                    } else {
                        
                        TOAST(INTERNETMESSAGE);
    
                    }

                }

            });

        });

    });

    CLICKED("#CancelVerification",()=>{

        DELETESTORAGE('local','AccountActivation');

        DELETESTORAGE("local",'MyData');

        RELOADPAGE();

    });

};

const ANDROIDPAYMENT=(data)=>{

    DECLARATION('#PaymentButton',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (sessionStorage.getItem("PaymentPlan")) {

                if (localStorage.getItem('NetWork')) {

                    LOADER(ELEMENT);

                    TOKENIZATION(data.UserEmail,data.UserName,'Movie Lander Subscription',sessionStorage.getItem('PaymentPlan'),PAYMENTLINK,(url)=>{

                        ANDROIDPAYMENTPROCESSINGPAGE(url);

                    });
                    
                } else {
                    
                    TOAST(INTERNETMESSAGE);

                };
            
            } else {

                TOAST(SUBSCRIPTIONMESSAGE);
                
            };

        });

    });

};

const ANDROIDHOMEPAGEDESIGN=()=>{

    DECLARATION('.AndroidHomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        REDUX(HOMEPAGESECTIONS,(element)=>{

            CREATEELEMENT("div",'HomeDivHolders',(ELEMENTS)=>{

                DISPLAY(ELEMENTS,`

                    <p class='HomeSectionName'>${element.name}</p>
                    
                `);

                if (element.Single === true ) {

                    CREATEELEMENT('div','HomeSingleDivHolders',(SINGLEELEMENT)=>{
    
                        ADD(ELEMENT,SINGLEELEMENT);
    
                        ANDROIDSINGLEHOMEDATAPAGE(SINGLEELEMENT,element.name);

                    });
                    
                };

                ADD(ELEMENT,ELEMENTS);

                CREATEELEMENT('img','HomeMoreIcon',(MOREICON)=>{

                    MOREICON.src=WHITEBACKICON;

                    ADD(ELEMENTS,MOREICON);

                });

                CREATEELEMENT('div','HomeMoviesHolder',(MOVIESHOLDER)=>{

                    ADD(ELEMENTS,MOVIESHOLDER);

                    ANDROIDHOMEDATAPAGE(MOVIESHOLDER,element.name);

                });

                if (element.ParentalControl === true  && localStorage.getItem('ParentalControl') ) {

                    STYLED(ELEMENTS,'display','none');
                    
                };

            });

        });

    });

};

const ANDROIDHOMEDATAPAGE=(MOVIESHOLDER,name)=>{

    CLEAR(MOVIESHOLDER);

    DATAGETTER(BASENAME,BASENAME,(data)=>{

        if (data.Catergory === name ) {

            CREATEELEMENT('img','HomeMoviesImages',(MOREICON)=>{

                MOREICON.src=data.Image||BLACKIMAGEICON;

                ADD(MOVIESHOLDER,MOREICON);

                EVENT(MOREICON,'click',()=>{

                    ANDROIDMOVIESPAGE(data);

                });

            });

        };

    });

};

const ANDROIDSINGLEHOMEDATAPAGE=(MOVIESHOLDER,name)=>{

    CLEAR(MOVIESHOLDER);

    DATAGETTER(BASENAME,BASENAME,(data)=>{

        if (data.Catergory === name ) {

            CREATEELEMENT('img','SingleMovieImages',(MOREICON)=>{

                MOREICON.src=data.Image||BLACKIMAGEICON;

                ADD(MOVIESHOLDER,MOREICON);

                EVENT(MOREICON,'click',()=>{

                    ANDROIDMOVIESPAGE(data);

                });

            });

        };

    });

};

const ANDROIDUPDATEPROFILE=()=>{

    const Name=document.querySelector("#Name");
    const AboutMe=document.querySelector("#AboutMe");
  
    CLICKED(".UpdateProfile",()=>{

        IMAGEPICKER('.UpdateProfile',(data)=>{

            STORE("",'Image',data);

        });

    });

    CLICKED("#UpdateUser",()=>{

        DECLARATION('#UpdateUser',(ELEMENT)=>{

            if (Name.value || AboutMe.value || sessionStorage.getItem("Location") || sessionStorage.getItem('Image') ) {

                if (localStorage.getItem('NetWork')) {

                    LOADER(ELEMENT);

                    DEJSON('local','UserData',(lol)=>{

                        const DATA=[Name.value||lol.UserName,lol.UserEmail,lol.UserPassword,lol.UserCode,lol.CreatedOn,lol.Device,sessionStorage.getItem('Image')||lol.UserPhoto,lol.MyDetails,lol.MyLikedMovies,lol.MySavedMovies,lol.AppLockPin,lol.ParentalControlPin,lol.PremiumAccount,lol.ConnectionCode,lol.ConnectedDevice,sessionStorage.getItem("Location")||lol.AndroidActivity,sessionStorage.getItem("Locationer")||lol.DesktopActivity,lol.AndroidOpenedOn,lol.DesktopOpenedOn,lol.Notifications,lol.AndroidShare,lol.DesktopShare,lol.CommunitiesJoined,lol.AndroidSpent,lol.DesktopSpent];

                        CURRENTUSERDATAUPDATING(DATA,(data)=>{

                            MYACCOUNT(lol.UserEmail,(info)=>{

                                JSONIFICATION(info,(MyData)=>{

                                    STORE('local','UserData',MyData);
    
                                    HIDER(2000,()=>{
    
                                        ANDROIDUSERACCOUNTPAGE();
    
                                    });
    
                                });

                            });

                        });

                    });
                    
                } else {
                    TOAST(INTERNETMESSAGE);
                }
    
            }else{

               TOAST('Nothing to Update');

            };

        });

    });

};

const ANDROIDCATERGORIES=()=>{

    DECLARATION('.ProfileHolder',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER(CATERGORY,CATERGORY,(data)=>{

            CREATEELEMENT('div','CatergoryHolders',(ELEMENT1)=>{

                DISPLAY(ELEMENT1,`

                    <img class='CatergoryImage' src='${data.Image||BLACKIMAGEICON}'/>
                    
                `);

                ADD(ELEMENT,ELEMENT1);

                if (data.ParentalControl === true  && localStorage.getItem('ParentalControl') ) {

                    STYLED(ELEMENT1,'display','none');
                    
                };

            });

        });

    });

};

const ANDROIDFREEMOVIES=()=>{

    DECLARATION('.ProfileHolder',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER(CATERGORY,CATERGORY,(data)=>{

            CREATEELEMENT('div','CatergoryHolders',(ELEMENT1)=>{

                DISPLAY(ELEMENT1,`

                    <img class='CatergoryImage' src='${data.Image||BLACKIMAGEICON}'/>
                    
                `);

                ADD(ELEMENT,ELEMENT1);

                if (data.ParentalControl === true  && localStorage.getItem('ParentalControl') ) {

                    STYLED(ELEMENT1,'display','none');
                    
                };

            });

        });

    });

};

const ANDROIDUSERLOCATION=()=>{

    CLICKED("#locationButton",()=>{

        DECLARATION('.CountriesDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','block');

            DECLARATION('#CountryDiv',(ELEMENTS)=>{

                CLEAR(ELEMENTS);

                REDUX(COUNTRYDATA,(data)=>{

                    CREATEELEMENT('button','BorderButton',(ELEME)=>{

                        DISPLAY(ELEME,`

                            <p class='leftText'>${data.name}</p>

                            <img class='RightIcon' src='${WHITELOCATIONICON}'/>
                            
                        `);

                        ADD(ELEMENTS,ELEME);

                        EVENT(ELEME,'click',()=>{

                            STORE('','Location',data.name);

                            STYLED(ELEMENT,'display','none');

                            DECLARATION('#CountryName',(NAME)=>{

                                DISPLAY(NAME,data.name);

                            });

                        });

                    });

                });
    
            });

        });

    });

    CLICKED("#CountryBack",()=>{

        DECLARATION('.CountriesDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

    });

};

const MOVIEDETAILSPAGE=(data)=>{

    CLICKED(".PlayIcon",()=>{

        if (localStorage.getItem("NetWork")) {

            DISPLAY('',`

                <header>
        
                    <img  class='BackIcon' src='${WHITEBACKICON}'/>
                    
                    <p class='RightText'>${data.MovieName}</p>
        
                </header>
    
                <iframe class='TubePlayer' src='${YOUTUBEPLAYER+data.Link}' ></iframe>
                
            `);
    
            CLICKED('.BackIcon',()=>{
    
                ANDROIDMOVIESPAGE(data);
    
            });

        } else {

            TOAST(INTERNETMESSAGE);

        };

    });

};