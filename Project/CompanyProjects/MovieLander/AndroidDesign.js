const ANDROIDHOMEPAGE=()=>{

    DISPLAY('',`

        <div class='AndroidHomeDiv'></div>

        <footer class='RoundFooter'>

            <img onclick='ANDROIDCATERGORYMOVIESPAGE()' src='${WHITELISTICON}'/>

            <img onclick='ANDROIDFREEMOVIESPAGE()' src='${WHITEMOVIESICON}'/>

            <img onclick='ANDROIDUSERACCOUNTPAGE()' src='${WHITEUSERHOLDERICON}'/>
        
        </footer>
        
    `);

    ACCOUNTCHECKER();

    ANDROIDHOMEPAGEDESIGN();

};

const ANDROIDLOGINPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>
        
        <p class='Moto' >Your Home Cinema</p>

        <input type='text' id='Email' class='Input' placeholder='******@gmail.com'/>

        <input type='password' id='Password' class='Input' placeholder='******'/>

        <p id='ForgotPassword' onclick='ANDROIDFORGOTACCOUNTPAGE()' class='RightText'>Forgot Password?</p>

        <button id='LoginUser' class='BorderButton'>

            <p class='leftText'>Sign In</p>

            <img class='RightIcon' src='${WHITECHECKICON}'/>

        </button>

        <button onclick='ANDROIDCREATEACCOUNTPAGE()' class='BorderButton'>

            <p class='leftText'>Create Account</p>

            <img class='RightIcon' src='${WHITERIGHTBACKICON}'/>
        
        </button>

    `);

    ANDROIDLOGINUSER();

};

const ANDROIDFORGOTACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>
        
        <p class='Moto' >Your Home Cinema</p>

        <input type='text' id='Email' class='Input' placeholder='******@gmail.com'/>

        <button id='LoginUser' class='BorderButton'>

            <p class='leftText'>Recover</p>

            <img class='RightIcon' src='${WHITECHECKICON}'/>

        </button>

        <button onclick='ANDROIDLOGINPAGE()' class='BorderButton'>

            <p class='leftText'>Cancel</p>

            <img class='RightIcon' src='${WHITERIGHTBACKICON}'/>
        
        </button>

    `);

    ANDROIDFORGOTUSERPASSWORD();

};

const ANDROIDACCOUNTVERIFICATIONPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>
        
        <p class='Moto' >Verification Code Sent To Email</p>

        <input type='tel' maxlength='6' id='Email' class='Input' placeholder='******'/>

        <button id='VerificationButton' class='BorderButton'>

            <p class='leftText'>Verify</p>

            <img class='RightIcon' src='${WHITECHECKICON}'/>

        </button>

        <button id='CancelVerification' class='BorderButton'>

            <p class='leftText'>Cancel</p>

            <img class='RightIcon' src='${WHITERIGHTBACKICON}'/>
        
        </button>

    `);

    ANDROIDACCOUNTVERIFICATION();

};

const ANDROIDCREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>
        
        <p class='Moto' >Your Home Cinema</p>

        <input type='text' id='UserName' class='Input' placeholder='User Name'/>

        <input type='text' id='Email' class='Input' placeholder='******@gmail.com'/>

        <input type='password' id='Password' class='Input' placeholder='******'/>

        <button id='LoginUser' class='BorderButton'>

            <p class='leftText'>Sign Up</p>

            <img class='RightIcon' src='${WHITECHECKICON}'/>

        </button>

        <button onclick='ANDROIDLOGINPAGE()' class='BorderButton'>

            <p class='leftText'>Log In</p>

            <img class='RightIcon' src='${WHITERIGHTBACKICON}'/>
        
        </button>

    `);

    ANDROIDCREATEUSER();

};

const ANDROIDPAYMENTPAGE=()=>{

    DELETESTORAGE("",'PaymentPlan');

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <p id='NotMyAccount' class='RightText'>Not My Account?</p>

            <img id='Paymentphoto' class='AppLogo' src='${data.UserPhoto||BLACKIMAGEICON}'/>

            <p>Dear ${data.UserName}<br><br>Please Choose a Subscription Package To Get Started</p>

            <div class='PaymentPackageHolders'>

                <div id='Daily' class='PaymentSections' ></div>

                <div id='Weekly' class='PaymentSections' ></div>

                <div id='Monthly' class='PaymentSections' ></div>

                <div id='Yearly' class='PaymentSections' ></div>
            
            </div>

            <button id='PaymentButton' class='BorderButton'>

                <p class='leftText'>Pay Now</p>

                <img class='RightIcon' src='${WHITESUBSCRIPTIONICON}'/>
        
            </button>
            
        `);

        CLICKED("#NotMyAccount",()=>{DELETESTORAGE("local",'UserData'),RELOADPAGE()})

        CLICKED('#Daily',()=>{STORE("",'PaymentPlan',DAILYPAYMENT)});
        CLICKED('#Weekly',()=>{STORE("",'PaymentPlan',WEEKLYPAYMENT)});
        CLICKED('#Monthly',()=>{STORE("",'PaymentPlan',MONTHLYPAYMENT)});
        CLICKED('#Yearly',()=>{STORE("",'PaymentPlan',YEARLYPAYMENT)});

        ANDROIDPAYMENT(data);
    
    });

    ACCOUNTCHECKER();

};

const ANDROIDPAYMENTPROCESSINGPAGE=(data)=>{

    DISPLAY("",`

        <header>

            <img onclick='ANDROIDPAYMENTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>

            <p class='RighText'>Payment</p>

        </header>

        <iframe class='PaymentIframe' src='${data}'/></iframe>
    
    `);

};

const ANDROIDUSERACCOUNTPAGE=()=>{

    DEJSON("local",'UserData',(data)=>{

        DISPLAY('',`

            <header>
    
                <img onclick='ANDROIDHOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
            
                <p class='RightText'>My Profile</p>
    
            </header>
    
            <div class='ProfileHolder'>
    
                <div class='UserDataHolder'>

                    <img class='MyProfileImage' src='${data.UserPhoto||BLACKIMAGEICON}'/>
                
                    <div class='MyDetailsDiv' >

                        <h1>Current User</h1>

                        <button id='DetailsButton' class='BorderButton'>
        
                            <img class='LeftIcon' src='${WHITEUSERHOLDERICON}'/>
        
                            <p class='LeftedText'>${data.UserName}</p>

                        </button>

                        <button id='DetailsButton'  class='BorderButton'>
        
                            <img class='LeftIcon' src='${WHITELOCATIONICON}'/>
        
                            <p class='LeftedText'>${data.AndroidActivity||'Add Location'}</p>

                        </button>

                        <button id='DetailsButton'  class='BorderButton'>
        
                            <img class='LeftIcon' src='${WHITESUBSCRIPTIONICON}'/>
        
                            <p class='LeftedText'>${data.PremiumAccount||'Add Subscription'}</p>

                        </button>

                        <div class='UserDetailsDiv'>

                            <img onclick='ANDROIDDETAILSUPDATEPAGE()' src='${WHITEPENCILICON}'/>

                            <img src='${WHITESETTINGICON}'/>

                            <img onclick='ANDROIDUSERDETAILSPAGE()' src='${WHITEHELPICON}'/>
                        
                        </div>
                    
                    </div>

                </div>
    
                <div class='UserDetailsHolders'>
    
                    <button onclick='ANDROIDNOTIFICATIONSPAGE()'class='BorderButton'>
    
                        <p class='leftText'>Notifications</p>
    
                        <img class='RightIcon' src='${WHITENOTIFICATONICON}'/>
    
                    </button>
    
                    <button class='BorderButton'>
    
                        <p class='leftText'>Saved Movies</p>
    
                        <img class='RightIcon' src='${WHITESAVEDICON}'/>
    
                    </button>
    
                    <button onclick='ANDROIDSETTINGSPAGE()' class='BorderButton'>
    
                        <p class='leftText'>Settings</p>
    
                        <img class='RightIcon' src='${WHITESETTINGICON}'/>
    
                    </button>
    
                    <button onclick='ANDROIDCONTACTPAGE()' class='BorderButton'>
    
                        <p class='leftText'>Contact Us</p>
    
                        <img class='RightIcon' src='${WHITEPHONEICON}'/>
    
                    </button>
    
                </div>
            
            </div>
            
        `);

    });

};

const ANDROIDSETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDUSERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>App Preferences</p>

        </header>

        <div class='ProfileHolder'>

            <button class='BorderButton'>

                <p class='leftText'>App Lock</p>

                <img class='RightIcon' src='${WHITELOCKICON}'/>

            </button>

            <button class='BorderButton'>

                <p class='leftText'>Connected Devices</p>

                <img class='RightIcon' src='${WHITEDEVICEICON}'/>

            </button>

            <button class='BorderButton'>

                <p class='leftText'>Delete My Account</p>

                <img class='RightIcon' src='${WHITEDELETEICON}'/>

            </button>

            <button id='LogOut' class='BorderButton'>

                <p class='leftText'>Log Out Account</p>

                <img class='RightIcon' src='${WHITELOGOUT}'/>

            </button>

            <button onclick='ANDROIDPARENTALCONTROLPAGE()' class='BorderButton'>

                <p class='leftText'>Parental Control</p>

                <img class='RightIcon' src='${WHITEPARENTALCONTROLICON}'/>

            </button>

            <button onclick='ANDROIDPOLICIESPAGE()' class='BorderButton'>

                <p class='leftText'>Privacy Policy</p>

                <img class='RightIcon' src='${WHITEPRIVACYPOLICYICON}'/>

            </button>

            <button onclick='RELOADPAGE()' class='BorderButton'>

                <p class='leftText'>Sync App</p>

                <img class='RightIcon' src='${WHITESYNCICON}'/>

            </button>

            <button onclick='RELOADPAGE()' class='BorderButton'>

                <p class='leftText'>Updates</p>

                <img class='RightIcon' src='${WHITEMOBILEDEVELOPMENTICON}'/>

            </button>
              
        </div>
        
    `);

    CLICKED("#LogOut",()=>{

        DELETESTORAGE("local",'UserData');

        RELOADPAGE();

    });

};

const ANDROIDFREEMOVIESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDHOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Cinema</p>

        </header>

        <div class='ProfileHolder'></div>
        
    `);

    ANDROIDFREEMOVIES();

};

const ANDROIDCATERGORYMOVIESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDHOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Catergory</p>

        </header>

        <div class='ProfileHolder'></div>
        
    `);

    ANDROIDCATERGORIES();

};

const ANDROIDCONTACTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDUSERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Reach Us</p>

        </header>

        <div class='ProfileHolder'>

            <button id='EmailUs' class='BorderButton'>

                <p class='leftText'>Email Us</p>

                <img class='RightIcon' src='${WHITEGMAILICON}'/>

            </button>
            
        </div>
        
    `);

    CLICKED('#EmailUs',()=>{GMAIL(MOVIELANDERGMAIL)})

};

const ANDROIDNOTIFICATIONSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDUSERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Notifications</p>

        </header>

        <div class='ProfileHolder'></div>
        
    `);

};

const ANDROIDDETAILSUPDATEPAGE=()=>{

    DELETESTORAGE('','Image');

    DELETESTORAGE('','Location');

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDUSERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Update</p>

        </header>

        <div class='ProfileHolder'>

            <img class='UpdateProfile' src='${BLACKIMAGEICON}'/>

            <input type='text' id='Name' class='Input' placeholder='User Name'/>

            <textarea placeholder='About Me' id='AboutMe' ></textarea>

            <button id='locationButton' class='BorderButton'>

                <p id='CountryName' class='leftText'>Location</p>

                <img class='RightIcon' src='${WHITELOCATIONICON}'/>

            </button>

            <button id='UpdateUser' class='BorderButton'>

                <p class='leftText'>Update</p>

                <img class='RightIcon' src='${WHITEPOSTICON}'/>

            </button>
        
        </div>

        <div class='CountriesDiv'>

            <header>

                <img id='CountryBack' class='BackIcon' src='${WHITEBACKICON}'/>
                
                <p class='RightText'>Countries</p>

            </header>

            <div id='CountryDiv' class='ProfileHolder'></div>
        
        </div>
        
    `);

    ANDROIDUSERLOCATION();

    ANDROIDUPDATEPROFILE();

};

const ANDROIDPOLICIESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDSETTINGSPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Privacy Policy</p>

        </header>

        <div class='ProfileHolder'></div>
        
    `);

    DECLARATION('.ProfileHolder',(ELEMENT)=>{

        CLEAR(ELEMENT);

        POLICIESGETTER((data)=>{

            if (data.Name === 'PrivacyPolicy' ) {

                DISPLAY(ELEMENT,data.Data);
                
            };

        });

    });

};

const ANDROIDPARENTALCONTROLPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='ANDROIDSETTINGSPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Parental Control</p>

        </header>

        <div class='ProfileHolder'></div>
        
    `);

    DECLARATION('.ProfileHolder',(ELEMENT)=>{

        CLEAR(ELEMENT);

        POLICIESGETTER((data)=>{

            if (data.Name === 'ParentalControlPolicy' ) {

                DISPLAY(ELEMENT,data.Data);
                
            };

        })

    });

};

const ANDROIDMOVIESPAGE=(data)=>{

    console.log(data);

    DISPLAY('',`

        <header>
    
            <img onclick='ANDROIDHOMEPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
            
            <p class='RightText'>${data.MovieName}</p>
    
        </header>
    
        <div class='ProfileHolder'>

            <div class='DetailsImageHolder'>

                <img class='Image' src='${data.Image||BLACKIMAGEICON}'/>

                <img class='PlayIcon' src='${WHITEPLAYICON}'/>
            
            </div>

            <div class='MovieDetailsHolder'>

                <p class='DetailsLabels'>Catergory</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITEGROUPICON}'/>
        
                    <p class='LeftedText'>${data.Catergory}</p>

                </button>

                <p class='DetailsLabels'>Ratings</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITESTARICON}'/>
        
                    <p class='LeftedText'>${data.MovieRating}/10</p>

                </button>

                <p class='DetailsLabels'>Parental Control</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITEPARENTALCONTROLICON}'/>
        
                    <p class='LeftedText'>${data.ParentalControl ||'None' }</p>

                </button>

                <p class='DetailsLabels'>Movie Access</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITELOCKICON}'/>
        
                    <p class='LeftedText'>${data.Premium ||'Free' }</p>

                </button>
            
            </div>

            <button class='forestgreen' >Watch</button>

            <p class='LeftText'>${data.Details}</p>

            <h4>Scenes From ${data.MovieName}</h4>

            <div id='MovieScenes' class='HomeDivHolders'>

                <img id='MovieScene' class='HomeMoviesImages' src='${data.Image||BLACKIMAGEICON}'/>

                <img id='MovieScene'  class='HomeMoviesImages'  src='${data.Image||BLACKIMAGEICON}'/>

                <img id='MovieScene'  class='HomeMoviesImages'  src='${data.Image||BLACKIMAGEICON}'/>

                <img id='MovieScene'  class='HomeMoviesImages' src='${data.Image||BLACKIMAGEICON}'/>

            </div>

            <br><br><br><br>

        </div>

        <footer class='RoundFooter'>

            <img  src='${WHITESAVEICON}'/>

            <img  src='${WHITECHATICON}'/>

            <img  src='${WHITESENDICON}'/>
            
        </footer>
        
    `);

    MOVIEDETAILSPAGE(data);

}; 

const ANDROIDUSERDETAILSPAGE=()=>{

    DEJSON("local",'UserData',(data)=>{

        DISPLAY('',`

            <header>
        
                <img onclick='ANDROIDUSERACCOUNTPAGE()' class='BackIcon' src='${WHITEBACKICON}'/>
                
                <p class='RightText'>My Details</p>
        
            </header>
        
            <div class='ProfileHolder'>

                <p class='DetailsLabels'>User Name</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITEUSERHOLDERICON}'/>
        
                    <p class='LeftedText'>${data.UserName}</p>

                </button>

                <p class='DetailsLabels'>User Email</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITEGMAILICON}'/>
        
                    <p class='LeftedText'>${data.UserEmail}</p>

                </button>

                <p class='DetailsLabels'>User Location</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITELOCATIONICON}'/>
        
                    <p class='LeftedText'>${data.AndroidActivity||'No Location Found'}</p>

                </button>

                <p class='DetailsLabels'>User Subscriptions</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITEPARENTALCONTROLICON}'/>
        
                    <p class='LeftedText'>${data.PremiumAccount||'Trail'}</p>

                </button>

                <p class='DetailsLabels'>User Parental Control</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITESUBSCRIPTIONICON}'/>
        
                    <p class='LeftedText'>${data.ParentalControlPin||'Deactivated'}</p>

                </button>

                <p class='DetailsLabels'>User Account Status</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITESECRETCODEICON}'/>
        
                    <p  class='LeftedText'>Active</p>

                </button>

                <p class='DetailsLabels'>User Account Registration</p>

                <button id='DetailsButton' class='BorderButton'>
        
                    <img class='LeftIcon' src='${WHITECAKEICON}'/>
        
                    <p id='SecretCode' class='LeftedText'></p>

                </button>

            </div>
            
        `);

        TIMER(data.CreatedOn,(time)=>{

            DECLARATION('#SecretCode',(ELEMENT)=>{

                DISPLAY(ELEMENT,time);

            });

        });

    });

}; 
