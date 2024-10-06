const DATABASELINK='https://docs.google.com/spreadsheets/d/1CaI9zBx3hOjwggAsTBZygUpe7zp7Cv1mUXJnDuqh2kk/edit';

const DATALINK='https://drive.google.com/uc?export=download&id=1y1hMLwnLHdK3V3m4P_P3ABqmz79VY3gu';

const AUTORUN=()=>{

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('Winksta');

        ITEMSDOWNLOAD();

    };

    if (localStorage.getItem('UserData')) {

        HOMEPAGE();

        return;

    }

    if (!localStorage.getItem('UserData')) {

        LOGINPAGE();

        return;

    }

    if (localStorage.getItem('MyData')) {

        EMAILVERIFICATION();

        return;
        
    };

};

const ITEMSDOWNLOAD=()=>{

    if (localStorage.getItem('NetWork')) {

        GETDATA(DATABASELINK,'Winksta',(data)=>{

            const STOR={
                "Name":"WinkastaItems",
                "Data":data
            };

            STOREINDEXED('WinkStaItem','Items',STOR,(reso)=>{

                if (reso === true ) {

                    STORE('local','UpdatedItems','Downloaded');

                    HOMEPAGE();
            
                    return;
                    
                } else {
                 
                    if (localStorage.getItem('UpdatedItems')) {

                        UPDATEINDEXED('WinkStaItem','Items',STOR);

                        return;
                        
                    } else {
                       
                        AUTORUN();

                        return;
                        
                    };
                    
                };

            });

        });
    
        return;
        
    };

};

const UPDATEUSERS=()=>{

    DEJSON('local','UserData',(datata)=>{

        GETDATA(DATABASELINK,'Users',(data)=>{

            FINDER(data,'UserEmail',datata.UserEmail,(users)=>{
    
                if (users.UserEmail === datata.UserEmail) {
    
                    JSONIFICATION(users,(MyData)=>{
    
                        STORE('local','UserData',MyData);
    
                        return;

                    });
                    
                }else{
    
                    DELETESTORAGE('local','UserData');

                    LOGINPAGE();
    
                    return;
    
                };
    
            });
    
        });
    
    });

};

const LOGINPAGE=()=>{

    DISPLAY('',`
        <br> <br> <br> <br> <br>
        <img class='logo' src='${localStorage.getItem('AppIcon')}'/>
        <br><br>
        <input type='email' id='LoginEmail' placeholder='Enter Email' />
        <input type='password' id='LoginPassword' placeholder='Enter Password' />
        <button class='forestgreen' id='LoginButton'>Sign In</button>
        <h1 class='ForgotPassword'>Forgot Password?</h1>
        <p class='CreateAccount'>I don't Have An Account, <b>Create Account?</b></p>
    `);

    CLICKED('.CreateAccount',()=>{CREATEACCOUNTPAGE();});

    CLICKED('.ForgotPassword',()=>{FORGOTPASSWORD();});

    CLICKED('.forestgreen',()=>{

        const UserEmail =document.querySelector('#LoginEmail');
        const UserPassword =document.querySelector('#LoginPassword');

        DECLARATION('.forestgreen',(ELEMENT)=>{

            if (!UserEmail.value) {

                TOAST('Enter User Email');

                return;

            };

            if (!UserPassword.value) {

                TOAST('Enter User Password');
            
                return;

            };

            LOADER(ELEMENT);

            GETDATA(DATABASELINK,'Users',(data)=>{

                FINDER(data,'UserEmail',UserEmail.value,(users)=>{

                    if (users.UserEmail === UserEmail.value ) {

                        if (users.UserPassword === UserPassword.value ) {

                            JSONIFICATION(users,(MyData)=>{

                                STORE('local','UserData',MyData);

                                HOMEPAGE();
            
                                return;

                            });

                        }else{

                            ORIGIN(ELEMENT,'SignIn');

                            TOAST('Wrong User Password ');
        
                            return;

                        };

                    }else{

                        ORIGIN(ELEMENT,'SignIn');

                        TOAST('User Account Doesnot Exist');
    
                        return;

                    };

                });

            });

        });

    });
    
};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`
        <br> <br> <br> <br> <br>
        <img class='logo' src='${localStorage.getItem('AppIcon')}'/>
        <br><br>
        <input type='text' id='UserName' placeholder='Enter User Name' />
        <input type='email' id='UserEmail' placeholder='Enter  User Email' />
        <input type='password' id='UserPassword' placeholder='Enter User Password' />
        <button class='forestgreen'>Sign Up</button>
        <p class='CreateAccount'>I already have Account <b>LogIn?</b> </p>      
    `);
    CLICKED('.CreateAccount',()=>{LOGINPAGE();});

    CLICKED('.forestgreen',()=>{

        const UserName=document.querySelector('#UserName');
        const UserEmail=document.querySelector('#UserEmail');
        const UserPassword=document.querySelector('#UserPassword');

        DECLARATION('.forestgreen',(ELEMENT)=>{

            if (!UserName.value) {

                TOAST('Enter User Name');

                return;

            };

            if (!UserEmail.value) {

                TOAST('Enter User Email');
            
                return;

            };

            if (!UserPassword.value) {

                TOAST('Enter User Password');

                return;
            };


            LOADER(ELEMENT);

            GETDATA(DATABASELINK,'Users',(data)=>{

                FINDER(data,'UserEmail',UserEmail.value,(users)=>{

                    if (users.UserEmail === UserEmail.value ) {

                        ORIGIN(ELEMENT,'SignUp');

                        TOAST('Email Already Taken');

                        return;

                    };

                    RANDOMCODE((code)=>{

                        const USERDATA={
                            "UserName":UserName.value,
                            "UserEmail":UserEmail.value,
                            "UserPassword":UserPassword.value,
                            "Code":code
                        }
    
                        POSTMAIL(UserEmail.value,'WinkstaAccountCreation',`Dear ${UserName.value} Your Winksta ActivationCode is ${code}.Thank You For Using Winksta to Buy Craft`,(dataa)=>{

                            JSONIFICATION(USERDATA,(Mydata)=>{

                                STORE('local','MyData',Mydata);

                                EMAILVERIFICATION();

                                return;

                            });

                        });

                    });
  
                });

            });

        });

    });

};

const FORGOTPASSWORD=()=>{

    DISPLAY('',`
        <br> <br> <br> <br> <br>
        <img class='logo' src='${localStorage.getItem('AppIcon')}'/>
        <br><br>
        <input type='text' id='UserCode' placeholder='Enter Email ' />
        <button class='forestgreen' >Recover</button>
        <p class='CreateAccount' id='Message'>I Remember My Password !!!,<b> Cancel?</b></p> 
    `);

    CLICKED('.CreateAccount',()=>{LOGINPAGE();});

    CLICKED('.forestgreen',()=>{

        DECLARATION('.forestgreen',(ELEMENT)=>{

            const UserName=document.querySelector('#UserCode');

            if (!UserName.value) {

                TOAST('Enter Email Address');

                return;
                
            };

            LOADER(ELEMENT);

            GETDATA(DATABASELINK,'Users',(datata)=>{

                FINDER(datata,'UserEmail',UserName.value,(users)=>{

                    if (users.UserEmail === UserName.value ) {

                        POSTMAIL(UserName.value,'PasswordRecovery',`Dear ${users.UserName},Your Winksta Password is ${users.UserPassword}.Don't Share Your Password,You Can Be Able to reset Your Password From the Settings Sections in the Sercuity Part.`,(dara)=>{

                            DISPLAY('',`
                                <br> <br> <br> <br> <br>
                                <img class='logo' src='${localStorage.getItem('AppIcon')}'/>
                                <br><br>
                                <p>User Password Sent to ${UserName.value},Check it to Login into Account</p>
                                <button class='forestgreen' onclick='FORGOTPASSWORD()' >Cancel</button>
                            `);
                        })

                        return;

                    }else{

                        ORIGIN(ELEMENT,'Recover');

                        TOAST('User Account Doesnot Exist');
    
                        return; 

                    }

                });

            });

        });

    });

}

const EMAILVERIFICATION=()=>{

    DISPLAY('',`
        <br> <br> <br> <br> <br>
        <img class='logo' src='${localStorage.getItem('AppIcon')}'/>
        <br><br>
        <input type='tel' maxlength='6' id='UserCode' placeholder='Enter Verification Code' />
        <button class='forestgreen' >Verification</button>
        <p class='CreateAccount' id='Message'>I don't Want to Verify,<b> Cancel?</b></p> 
    `);

    CLICKED('.forestgreen',()=>{

        DECLARATION('.forestgreen',(ELEMENT)=>{

            DEJSON('local','MyData',(data)=>{

                const UserName=document.querySelector('#UserCode');

                if (!UserName.value) {
    
                    TOAST('Enter Verification Code');
    
                    return;
                    
                };

                if (UserName.value !== data.Code ) {

                    TOAST('Enter Correct Verification Code');
    
                    return;
                    
                }

                LOADER(ELEMENT);

                GETDATA(DATABASELINK,'Users',(datata)=>{

                    FINDER(datata,'UserEmail',data.UserEmail,(users)=>{
    
                        if (users.UserEmail === data.UserEmail ) {
    
                            ORIGIN(ELEMENT,'SignUp');
    
                            TOAST('Email Already Taken');
    
                            return;
    
                        };
    
                        const HEADER=['UserName','UserEmail','UserPassword','CreatedOn','Device','Code'];

                        DEVICED((datadevice)=>{

                            const DATA=[data.UserName,data.UserEmail,data.UserPassword,new Date(),datadevice,data.Code];

                            INSERTDATA(DATABASELINK,'Users',HEADER,DATA,(response)=>{

                                GETDATA(DATABASELINK,'Users',(datate)=>{

                                    FINDER(datate,'UserEmail',data.UserEmail,(users)=>{
                    
                                        if (users.UserEmail === data.UserEmail) {
                        
                                           DELETESTORAGE('local','MyData');

                                           JSONIFICATION(users,(MyData)=>{

                                                STORE('local','UserData',MyData);

                                                HOMEPAGE();
                            
                                                return;

                                           });

                                        };
                    
                                    });
                    
                                });

                            });

                        });

                    });
    
                });
    
            });

        });

    });

}

const HOMEPAGE=()=>{

    DISPLAY('',`
        
        <div class='HomeDiv'></div>

        <footer class='RoundFooter'>

            <img  src='${WHITEHOMEICON}' onclick='CATERGRORYPAGE()'/>

            <img src='${WHITEUNHEARTICON}' onclick='LIKEDPAGES()'/>

            <img src='${WHITECARTICON}' onclick='SHOPPINGCART()'/>
            
        </footer>

    `);

    HOMEPAGEDESIGN();

    if (localStorage.getItem('NetWork')) {

        UPDATEUSERS();

        return;

    };

}

const HOMEPAGEDESIGN=()=>{

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <header class='Header'>

                <img class='LeftedIcon'  src='${WHITESEARCHICON}'/>

                <img class='AppIconed' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

                <img class='RightedIcon' onclick='USERACCOUNTPAGE()' src='${WHITEUSERICON}'/>
            
            </header>

            <header class='Headers'>

                <button id='HomeIconButton'>

                    <img  src='${WHITEHOMEICON}'/>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Cards</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Jewellery</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>KeyHolders</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Bracelets</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Bottle Decorations</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Air Pod Bags</p>
                
                </button>

                <button class='ButtonHolders' >

                    <p class='ButtonTitles'>Designed Fashions</p>
                
                </button>
            
            </header>

            <div id='AdsRecommeded' class='RecommendedDiv'>
                
                <div class='NameHolder'>

                    <p class='NameTitles'>Featured&nbsp&nbspItems</p>

                </div>

                <div id='FeaturedSection' class='SectionHolder'></div>

            </div>

            <h3 class='leftedText'>Recommended</h3>

            <div id='RecommendedDivs' class='RecommendedDivs'></div>

            <h3 class='leftedText'>More Items</h3>

            <div id='RecommendedDivas' class='RecommendedDivs'></div>

            <br><br><br><br>

        `);

        HOMEDATADISPLAY('#FeaturedSection','Keyholders');

        HOMEDATADISPLAYED('#RecommendedDivs');

        HOMEDATA('#RecommendedDivas','ProductCatergory','Jewellery');

    });
        
};

const HOMEDATA=(ELEMENTED,TYPE,ITEM)=>{

    const DIVER=document.querySelector(ELEMENTED);

    GETINDEXED('WinkStaItem','Items',(data)=>{

        CLEAR(DIVER)

        REDUX(data,(Element)=>{

            DATASINGLESHUFFLE(Element.Data,TYPE,ITEM,(info)=>{

                DISPLAY(DIVER,`

                    <img class='SectionImage' src='${info.ProductImage}'/>

                `);

                EVENT(DIVER,'click',()=>{

                    PRICEPAGE(info);

                })
            
            });

        });

    });

};

const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <header>
    
                <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
    
                <img class='RightedIcon' src='${WHITESETTINGICON}'/>
            
            </header>
    
            <div class='UserDiv'>
    
                <div class='UserAccountDiv'>

                    <img class='ImageHolder' src='${data.UserProfile || WHITEPROFILEICON}'/>
    
                    <div class='MyDetails'>

                        <p>${data.UserName}</p>

                        <p>${data.UserName}</p>

                        <p>${data.UserName}</p>
                    
                    </div>

                    <div class='BottomLevel'>

                        <img src='${WHITEPENCILICON}'/>

                        <img src='${WHITELOCATIONICON}'/>

                        <img src='${WHITEDELETEICON}'/>
                    
                    </div>
                
                </div>

                <p>App Preferences</p>

                <button class='forestgreen'>Sercuity</button>

                <button class='forestgreen'>Sercuity</button>

                <button class='forestgreen'>Sercuity</button>

                <button class='forestgreen' id='UpdateApp'>App Update</button>
            
            </div>
            
        `);

        CLICKED('#UpdateApp',()=>{
            WEBSITE(DATALINK);
        })

    });

}

const SHOPPINGCART=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
        
        </header>
        
    `);

}

const LIKEDPAGES=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
        
        </header>
        
    `);

}

const CATERGRORYPAGE=()=>{
 
    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
        
        </header>
        
    `);
    
}

const PRICEPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>

            <p class='ProductName'>${data.ProductName}</p>
        
        </header>

        <div class='UserDiv'>

            <div class='ImagesHolder'>

                <img class='Images' src='${data.ProductImage}'/>

                <img class='Images' src='${data.ProductImageOne}'/>

                <img class='Images' src='${data.ProductImageTwo}'/>
                
                <img class='Images' src='${data.ProductImageThree}'/>
            
                <img class='Images' src='${data.ProductImageFour}'/>

            </div>

            <div class='OptonsHolders'>

                <h1 class='LeftTitle'>${data.ProductName}</h1>

                <h3 class='LeftedTitle'>$ ${data.ProductPrice}</h3>

                <p class='ProductDescription'>${data.ProductDescription}</p>

                <img class='LikeIcon' src='${WHITEUNHEARTICON}'/>

                <h2 class='LeftTitle'>SIZE</h2>

                 <header class='Headers'>

                    <button class='ButtonHolders' >

                        <p class='ButtonTitles'>13mm</p>
                    
                    </button>

                    <button class='ButtonHolders' >

                        <p class='ButtonTitles'>25mm</p>
                    
                    </button>

                    <button class='ButtonHolders' >

                        <p class='ButtonTitles'>12mm</p>
                    
                    </button>

                    <button class='ButtonHolders' >

                        <p class='ButtonTitles'>15mm</p>
                    
                    </button>

                </header>

                <footer class='RoundFooter'>

                    <button id='AddCartButton'>

                        <img  src='${WHITECARTICON}'/>
                        <p id='add2cartTitle'>Add to cart</p>
                
                    </button>

                    <button id='BuyNowButton' class='BuyNowButton' >

                       <p class='ButtonTitles'>Buy</p>
                
                    </button>
                
                </footer>    
            
            </div>

        </div>
        
    `);

    CLICKED('#BuyNowButton',()=>{

        DECLARATION('#BuyNowButton',(ELEMENT)=>{

            LOADER(ELEMENT);

            DEJSON('local','UserData',(info)=>{

                TOKENIZATION(info.UserEmail,'https://composeventure.github.io/Compose-Pay/',data.ProductPrice,(PayLink)=>{
                    
                    DISPLAY('',`

                        <header>

                            <img class='BackIcon' id='closeBack'  src='${WHITEBACKICON}'/>

                            <p class='ProductName'>${data.ProductName}</p>
                        
                        </header>

                        <div class='UserDiv'>

                            <iframe src='${PayLink}' ></iframe>
                        
                        </div>
                        
                    `);

                    CLICKED('#closeBack',()=>{PRICEPAGE(data)})

                });

            });

        });

    });
};

const HOMEDATADISPLAY=(ELEMENTED,ITEM)=>{

    const DIVER=document.querySelector(ELEMENTED);

    GETINDEXED('WinkStaItem','Items',(data)=>{

        CLEAR(DIVER)

        REDUX(data,(Element)=>{

            REDUX(Element.Data,(info)=>{

                if (info.ProductCatergory === ITEM ) {

                    CREATEELEMENT('div','Section',(ELEMENTS)=>{

                        DISPLAY(ELEMENTS,`$ ${info.ProductPrice}`);
    
                        DISPLAY(ELEMENTS,`
    
                            <img class='SectionImage' src='${info.ProductImage}'/>
        
                        `);
    
                        ADD(DIVER,ELEMENTS);

                        EVENT(ELEMENTS,'click',()=>{
    
                            PRICEPAGE(info);
    
                        });

                    });
                    
                }

            })

        });

    });

};

const HOMEDATADISPLAYED=(ELEMENTED)=>{

    const DIVER=document.querySelector(ELEMENTED);

    GETINDEXED('WinkStaItem','Items',(data)=>{

        CLEAR(DIVER)

        REDUX(data,(Element)=>{

            REDUX(Element.Data,(info)=>{

                CREATEELEMENT('div','RecommendedDivis',(ELEMENTS)=>{

                    DISPLAY(ELEMENTS,`$ ${info.ProductPrice}`);

                    DISPLAY(ELEMENTS,`

                        <img class='SectionImage' src='${info.ProductImage}'/>
    
                    `);

                    ADD(DIVER,ELEMENTS);

                    EVENT(ELEMENTS,'click',()=>{
    
                        PRICEPAGE(info);

                    });

                });

            })

        });

    });

};