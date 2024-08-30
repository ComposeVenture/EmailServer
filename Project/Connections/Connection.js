const AUTORUN=()=>{

    PAGESDOWNLOAD();

    if (localStorage.getItem('User')) {

        HomePage();

        CONTACTSDOWNLOAD();
    
        return;

    } else {

        if (localStorage.getItem('EmailVerification')) {

            EMAILVERIFICATION();

            return;
            
        }
       
        LoginPage()

        return;
        
    }
  
}

const HomePage=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftedIcon' src='${WHITEMENUICON}'/>

            <h3 class='AppName'>Connections</h3>

            <img class='RightedIcon' onclick='RELOADPAGE()' src='${WHITRETRYICON}'/>
        
        </header>

        <div class='HomeDivHolder'></div>

        <div class='MenuDiv'>

            <header>

                <img id='CloseMenu' class='LeftedIcon' src='${WHITEBACKICON}'/> 
                
            </header>

            <div class='MenuOptions'>

                <button id='SaveNumberButton' class='Profile' >

                    <h3 class='SaveName'>Profile</h3>

                    <img class='SaveImage' src='${WHITEPROFILEICON}'/>

                </button>

                <button id='SaveNumberButton' class='SharedContacts' >

                    <h3 class='SaveName'>Shared</h3>

                    <img class='SaveImage' src='${WHITESHAREICON}'/>

                </button>

                <button id='SaveNumberButton' >

                    <h3 class='SaveName'>Help</h3>

                    <img class='SaveImage' src='${WHITEHELPICON}'/>

                </button>

                <button id='SaveNumberButton' >

                    <h3 class='SaveName'>Settings</h3>

                    <img class='SaveImage' src='${WHITESETTINGICON}'/>

                </button>

                <button id='SaveNumberButton' class='PrivacyPloicy' >

                    <h3 class='SaveName'>Policy</h3>

                    <img class='SaveImage' src='${WHITEPRIVACYPOLICYICON}'/>

                </button>

                <button id='SaveNumberButton' class='LogOut' >

                    <h3 class='SaveName'>Log Out</h3>

                    <img class='SaveImage' src='${WHITELOGOUT}'/>

                </button>

            </div>
        
        </div>

        <button class='FixedButton' onclick='CREATENUMBERPAGE()'>

            <img src='${WHITEPOSTICON}'/>
        
        </button>

    `);

    const MenuDiv=document.querySelector('.MenuDiv');

    HOMECONTACTS();

    SHAREDCONTACTSDOWNLOAD();
    
    USERSDOWNLOAD();

    CLICKED('.LeftedIcon',()=>{STYLED(MenuDiv,'display','block');});

    CLICKED('#CloseMenu',()=>{ STYLED(MenuDiv,'display','none');});

    CLICKED('.SharedContacts',()=>{SHAREDCONTACTSPAGE()});

    CLICKED('.LogOut',()=>{ DELETESTORAGE('local','User');RELOADPAGE();});

    CLICKED('.PrivacyPloicy',()=>{ 
        
        DISPLAY('',`
            
            <header>

                <img class='LeftedIcon' onclick='HomePage()' src='${WHITEBACKICON}'/>

                <h3 class='ContactUserName'>Privacy Policy</h3>
            
            </header>

            <div class='HomeDivHolder'>${localStorage.getItem('PrivacyPolicy')}</div>

        `);
        
    });

    CLICKED('.Profile',()=>{USERACCOUNTPAGE()})

}

const LoginPage=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='${APPLOGO}'/>

        <h3 class='colorgray'>Enter User Email</h3>

        <input type='email' class='EmailLogin' placeholder='Enter User Email' />

        <button class='forestgreen'>Acccess Now</button>
        
    `);

    const EmailLogin=document.querySelector('.EmailLogin');

    DECLARATION('.forestgreen',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!EmailLogin.value) {
        
                TOAST('Email Cannot Be Empty');
        
                return;
        
            } 
        
            RANDOMCODE((code)=>{
        
                if (localStorage.getItem('NetWork')) {
        
                    LOADER(ELEMENT);
        
                    POSTMAIL(EmailLogin.value,"Access Code",code,(data)=>{
        
                        STORE('local','EmailVerification',code);
            
                        STORE('local','MyEmail',EmailLogin.value);
            
                        EMAILVERIFICATION();
            
                    })
        
                    return;
                    
                } else {
                    
                    TOAST('Check Your Internet Connection')
        
                };
        
            });

        });  

    });

};

const PAGESDOWNLOAD=()=>{

    if (localStorage.getItem('NetWork')) {

        const DATA={

            "sheetName":"Connections"
    
        };
    
        POSTPACKAGE(GETAPI,'',DATA,(data)=>{
    
            REDUX(data,(element)=>{
    
                STORE('local',element.Name,element.Link);
    
            });
    
        });

        return;
        
    }

};

const CONTACTSDOWNLOAD=()=>{

    if (localStorage.getItem('NetWork')) {

        DEJSON('local','User',(info)=>{

            const DATA={
    
                "sheetName":info.UserDataBase
        
            };
        
            POSTPACKAGE(GETAPI,'',DATA,(data)=>{
        
                const NUMBERS={
                    "Name":"Contacts",
                    "Data":data
                }
        
                STOREINDEXED('Connections','Contacts',NUMBERS,(dataone)=>{

                    if (dataone === false ) {

                        STORE('local','ContactsUpdated','Updated');

                        HOMECONTACTS();
                        
                    } else {

                        if (localStorage.getItem('ContactsUpdated')) {

                            UPDATEINDEXED('Connections','Contacts',NUMBERS);

                            return;
                            
                        }else{

                            AUTORUN();
                        }
 
                    }


                })
        
            });
    
        })

        return;
        
    }

};

const HOMECONTACTS=()=>{

    const MenuDiv=document.querySelector('.MenuDiv');

    DECLARATION('.HomeDivHolder',(ELEMENT)=>{

        EVENT(ELEMENT,'scroll',()=>{

            STYLED(MenuDiv,'display','none');

        })

        LOADER(ELEMENT,'Loader');

        GETINDEXED('Connections','Contacts',(data)=>{

            CLEAR(ELEMENT);

            REDUX(data,(element)=>{

                REDUX(element.Data.reverse(),(elementOne)=>{
    
                    CREATEELEMENT('div','ContactsHolder',(ELEMENTED)=>{
    
                        DISPLAY(ELEMENTED,`
    
                            <img id='UserImage' class='LeftedIcon' src='${elementOne.ProfileContact||WHITEUSERICON}'/>
                                
                            <h1 class='ContactsName'>${elementOne.UserName}</h1>
    
                            <p class='FirstNumber' >${elementOne.FirstNumber}</p>
    
                        `);
    
                        ADD(ELEMENT,ELEMENTED);

                        EVENT(ELEMENTED,'click',()=>{

                            JSONIFICATION(elementOne,(dara)=>{

                                DELETESTORAGE('','Navigation');

                                STORE('','ContactUser',dara);

                                USERCONTACT();

                            })

                        })
    
                    });
    
                });

            });

        })

    })

};

const CREATENUMBERPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftedIcon' onclick='HomePage()' src='${WHITEBACKICON}'/>

            <h3 class='AppName'>Connections</h3>
        
        </header>

        <div class='HomeDivHolder'>

            <div class='ImageHolderCreation'>

                <img class='CreateUserImage'  src='${WHITEUSERICON}'/>
                
            </div>

            <p class='AddUser'>Add a Photo</p>

            <input type='text' id='UserName' placeholder=' Contact Name' >

            <input type='tel' id='FirstNumber' placeholder=' First Number' >

            <input type='tel' id='SecondNumber' placeholder=' Second Number' >

            <input type='tel' id='ThirdNumber' placeholder=' Third Number' >

            <input type='tel' id='FourthNumber' placeholder=' Fourth Number' >

            <input type='email' id='PersonalEmail' placeholder=' Personal Email' >

            <input type='email' id='WorkEmail' placeholder='Work Email' >

            <input type='text' id='Location' placeholder=' Contact Location' >

            <textarea id='AboutUser' placeholder='About Person'></textarea>

            <button id='SaveNumberButton' class='forestgreen'>

                <h3 class='SaveName'>Save</h3>

                <img class='SaveImage' src='${WHITESAVEICON}'/>

            </button>
        
        </div>

    `);

    const UserName=document.querySelector('#UserName');
    const FirstNumber=document.querySelector('#FirstNumber');
    const SecondNumber=document.querySelector('#SecondNumber');
    const ThirdNumber=document.querySelector('#ThirdNumber');
    const FourthNumber=document.querySelector('#FourthNumber');
    const PersonalEmail=document.querySelector('#PersonalEmail');
    const WorkEmail=document.querySelector('#WorkEmail');
    const Location=document.querySelector('#Location');
    const AboutUser=document.querySelector('#AboutUser');

    CLICKED('.AddUser',()=>{IMAGEPICKER('.CreateUserImage',(data)=>{STORE('','UserImage',data)})});

    DECLARATION('.forestgreen',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!UserName.value) {

                TOAST('Enter Contact Name');

                return;
            }

            if (!FirstNumber.value) {

                TOAST('Enter Contact Name');

                return;
            }

            if (localStorage.getItem('NetWork')) {

                DEJSON('local','User',(data)=>{

                    const USERDATA={
                        "sheetName":data.UserDataBase,
                        "ContactID": Date.now(),
                        "CreatedBy": data.UserID,
                        "CreatedOn": new Date(),
                        "Details": AboutUser.value,
                        "FirstNumber": FirstNumber.value,
                        "FourthNumber": FourthNumber.value,
                        "Location": Location.value,
                        "PersonalEmail": PersonalEmail.value,
                        "ProfileContact": sessionStorage.getItem('UserImage'),
                        "SecondNumber": SecondNumber.value,
                        "ThirdNumber": ThirdNumber.value,
                        "UserID": Date.now(),
                        "UserName": UserName.value,
                        "WorkEmail": WorkEmail.value
                    }
    
                    const DATA={
        
                        "sheetName":data.UserDataBase
                
                    };
    
                    LOADER(ELEMENT);
    
                    POSTPACKAGE(localStorage.getItem('CreateUsersApi'),'',USERDATA,(reso)=>{
    
                        DELETESTORAGE('','UserImage');
    
                        POSTPACKAGE(GETAPI,'',DATA,(data)=>{
            
                            const NUMBERS={
                                "Name":"Contacts",
                                "Data":data
                            }
                    
                            STOREINDEXED('Connections','Contacts',NUMBERS,(dataone)=>{
                    
                                if (dataone === true ) {
                    
                                    STORE('local','ContactsUpdated','Updated');
                    
                                    HomePage();
                                    
                                }else{
                    
                                    if (localStorage.getItem('ContactsUpdated')) {
                                        
                                        UPDATEINDEXED('Connections','Contacts',NUMBERS);
    
                                        HomePage();
                    
                                    } else {
                    
                                        AUTORUN();
                    
                                    }
                    
                                }
                    
                            })
                    
                        });
    
                    })
    
                })    
                
            } else {
                
                TOAST('Check Your Internet Connection')

            }

        });

    });

};

const EMAILVERIFICATION=()=>{

    DISPLAY('',`

        <img class='BackEmailVerification' src='${WHITEBACKICON}'/>

        <img class='AppLogo' src='${WHITESMSICON}'/>

        <h3 class='colorgray'>Enter Verification Code</h3>

        <input type='tel' maxlength='6' class='EmailVerificationLogin' placeholder='Enter verification Code' />

        <button id='LoginAccessNowBtn' class='forestgreen'>Acccess Now</button>
        
    `);

    const EmailLogin=document.querySelector('.EmailVerificationLogin');

    CLICKED('.BackEmailVerification',()=>{

        DELETESTORAGE('local','EmailVerification');
    
        DELETESTORAGE('local','MyEmail');
    
        AUTORUN();
    
        return;

    });

    DECLARATION('#LoginAccessNowBtn',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            if (!EmailLogin.value) {
        
                TOAST('Enter Verification Code');
        
                return;
        
            };

            if (EmailLogin.value !== localStorage.getItem('EmailVerification').toString()) {
            
                TOAST('Wrong Verification Code');

                return;
                
            };

            if (localStorage.getItem('NetWork')) {

                LOADER(ELEMENT);
        
                const USERS={
                    "sheetName":"Users"
                }
            
                POSTPACKAGE(GETAPI,'',USERS,(data)=>{
            
                    FINDER(data,'UserEmail',localStorage.getItem('MyEmail'),(User)=>{
            
                        if (User.UserEmail === localStorage.getItem('MyEmail') ) {
                            
                            JSONIFICATION(User,(info)=>{
            
                                STORE('local','User',info);
            
                                DELETESTORAGE('local','EmailVerification');
            
                                DELETESTORAGE('local','MyEmail');
            
                                AUTORUN();
            
                                return;
            
                            })
            
                        }else{
            
                            ORIGIN(ELEMENT,'Access Now');
            
                            TOAST('No User Account Found')
                
                        }
            
                    });
            
                });
        
                return;
                
            } else {
        
                TOAST('Check Your Internet Connection');
                
            }

        })

    })

};

const CONTACTSUPDATES=()=>{

    if (localStorage.getItem('NetWork')) {

        DEJSON('local','User',(info)=>{

            const DATA={
    
                "sheetName":info.UserDataBase
        
            };
        
            POSTPACKAGE(GETAPI,'',DATA,(data)=>{
        
                const NUMBERS={
                    "Name":"Contacts",
                    "Data":data
                }
        
                STOREINDEXED('Connections','Contacts',NUMBERS,(dataone)=>{

                    console.log(dataone);

                    if (dataone === true ) {

                        STORE('local','ContactsUpdated','Updated');

                        HOMECONTACTS();

                        return;
                        
                    } else {

                        if (localStorage.getItem('ContactsUpdated')) {

                            UPDATEINDEXED('Connections','Contacts',NUMBERS);

                            return;
                            
                        }else{

                            AUTORUN();

                            return;
                        }
 
                    }

                })
        
        
            });
    
        })

        return;
        
    }

};

const USERCONTACT=()=>{

    DEJSON('','ContactUser',(data)=>{

        DISPLAY('',`

            <header>
    
                <img class='LeftedIcon' id='BackHome' src='${WHITEBACKICON}'/>
    
                 <img  id='SavedNumber' src='${WHITESAVEDICON}'/>

                <img class='RightedIcon' src='${WHITESENDICON}'/>
            
            </header>
    
            <div class='HomeDivHolder'>
    
                <div class='ImageHolderCreation'>
    
                    <img class='CreateUserImage'  src='${data.ProfileContact||WHITEUSERICON}'/>
                    
                </div>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.UserName}</h3>
    
                    <img class='SaveImage' src='${WHITEUSERICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.FirstNumber}</h3>

                    <img  id='CallFirstNumber' src='${WHITEPHONEICON}'/>

                    <img id='SmsFirstNumber' class='SaveImage' src='${WHITESMSICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.SecondNumber||'No Contact'}</h3>

                    <img  id='CallSecondNumber' src='${WHITEPHONEICON}'/>

                    <img id='SmsSecondNumber' class='SaveImage' src='${WHITESMSICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.ThirdNumber||'No Contact'}</h3>

                    <img id='CallThirdNumber'  src='${WHITEPHONEICON}'/>

                    <img id='SmsThirdNumber' class='SaveImage' src='${WHITESMSICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.FourthNumber||'No Contact'}</h3>

                    <img id='CallFourthNumber'  src='${WHITEPHONEICON}'/>

                    <img id='SmsFourthNumber' class='SaveImage'  src='${WHITESMSICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.PersonalEmail||'No Email'}</h3>

                    <img id='EmailPersonal' class='SaveImage' src='${WHITEGMAILICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.WorkEmail||'No Email'}</h3>

                    <img id='EmailWork' class='SaveImage' src='${WHITEGMAILICON}'/>
    
                </button>

                <button id='SaveNumberButton' >
    
                    <h3 class='SaveName'>${data.Location||'No Place Added'}</h3>

                    <img class='SaveImage' src='${WHITELOCATIONICON}'/>
    
                </button>

                <textarea readonly id='AboutUser' placeholder='${data.Details||'No Details About Contact'}'></textarea>
    
                <button id='SaveNumberButton' onclick='UPDATECONTACTPAGE()' class='forestgreen'>
    
                    <h3 class='SaveName'>Edit</h3>
    
                    <img class='SaveImage' src='${WHITEPENCILICON}'/>
    
                </button>
            
            </div>
    
        `);

        CLICKED('#BackHome',()=>{

            if (sessionStorage.getItem('Navigation')) {
                
                SHAREDCONTACTSPAGE();

                return;

            }

            HomePage();

        });

        CONTACTSUPDATES();

        CLICKED('#CallFirstNumber',()=>{CALL(data.FirstNumber)});

        CLICKED('#SmsFirstNumber',()=>{SMS(data.FirstNumber)});

        CLICKED('#CallSecondNumber',()=>{

            if (!data.SecondNumber) {
                
                TOAST('No Number Added');

                return;

            }

            CALL(data.SecondNumber)

        });

        CLICKED('#SmsSecondNumber',()=>{

            if (!data.SecondNumber) {
                
                TOAST('No Number Added');

                return;

            }

            SMS(data.SecondNumber)

        });

        CLICKED('#CallThirdNumber',()=>{

            if (!data.ThirdNumber) {
                
                TOAST('No Number Added');

                return;

            }

            CALL(data.ThirdNumber)

        });

        CLICKED('#SmsThirdNumber',()=>{

            if (!data.ThirdNumber) {
                
                TOAST('No Number Added');

                return;

            }

            SMS(data.ThirdNumber)

        });

        CLICKED('#CallFourthNumber',()=>{

            if (!data.FourthNumber) {
                
                TOAST('No Number Added');

                return;

            }

            CALL(data.FourthNumber)

        });

        CLICKED('#SmsFourthNumber',()=>{

            if (!data.FourthNumber) {
                
                TOAST('No Number Added');

                return;

            }

            SMS(data.FourthNumber)

        });

        CLICKED('#EmailPersonal',()=>{

            if (!data.PersonalEmail) {
                
                TOAST('No Email Added');

                return;

            }

            GMAIL(data.PersonalEmail)

        });

        CLICKED('#EmailWork',()=>{

            if (!data.WorkEmail) {
                
                TOAST('No Email Added');

                return;

            }

            GMAIL(data.WorkEmail)

        });

        CLICKED('#SavedNumber',()=>{CREATECONTACT(data.UserName,data.FirstNumber)});

        CLICKED('.RightedIcon',()=>{SHAREDCONTACTS()});

    })

}

const USERSDOWNLOAD=()=>{

    if (localStorage.getItem('NetWork')) {

        const DATA={
    
            "sheetName":"Users"
    
        };
    
        POSTPACKAGE(GETAPI,'',DATA,(data)=>{
    
            const NUMBERS={
                "Name":"Users",
                "Data":data
            }
    
            STOREINDEXED('ConnectionsUsers','Users',NUMBERS,(dataone)=>{
    
                if (dataone === false ) {

                    STORE('local','ContactsUpdated','Updated');

                    return
                        
                } else {

                    if (localStorage.getItem('ContactsUpdated')) {

                        UPDATEINDEXED('ConnectionsUsers','Users',NUMBERS);

                        return;
                            
                    }else{

                        AUTORUN();

                        return;
                    }
 
                }
    
            })
    
        });

        return;
        
    }

};

const SHAREDCONTACTS=()=>{

    DISPLAY('',`

        <header>
    
            <img class='LeftedIcon' onclick='USERCONTACT()' src='${WHITEBACKICON}'/>
    
            <h1>Share To</h1>
            
        </header>

        <div class='HomeDivHolder' ></div>
        
    `);

    DECLARATION('.HomeDivHolder',(ELEMENT)=>{

        LOADER(ELEMENT,'Loader');

        GETINDEXED('ConnectionsUsers','Users',(data)=>{

            CLEAR(ELEMENT);

            REDUX(data,(element)=>{

                REDUX(element.Data.reverse(),(elementOne)=>{
    
                    CREATEELEMENT('div','ContactsHolder',(ELEMENTED)=>{
    
                        DISPLAY(ELEMENTED,`
    
                            <img id='UserImage' class='LeftedIcon' src='${elementOne.UserImage||WHITEUSERICON}'/>
                                
                            <h1 class='ContactsName'>${elementOne.UserName}</h1>
    
                            <p class='FirstNumber' >${elementOne.UserEmail}</p>
   
                        `);
    
                        ADD(ELEMENT,ELEMENTED);

                        EVENT(ELEMENTED,'click',()=>{

                            if (localStorage.getItem('NetWork')) {

                                LOADER(ELEMENTED);

                                DEJSON('','ContactUser',(dedata)=>{

                                    DEJSON('local','User',(MyInfo)=>{

                                        const EDAD={
                                            "sheetName":"SharedContacts",
                                            "UserName": dedata.UserName,
                                            "FirstNumber": dedata.FirstNumber,
                                            "SecondNumber": dedata.SecondNumber,
                                            "ThirdNumber": dedata.ThirdNumber,
                                            "FourthNumber": dedata.FourthNumber,
                                            "PersonalEmail": dedata.PersonalEmail,
                                            "WorkEmail": dedata.WorkEmail,
                                            "Location": dedata.Location,
                                            "Details": dedata.Details,
                                            "CreatedOn": dedata.CreatedOn,
                                            "ContactID": dedata.ContactID,
                                            "CreatedBy": dedata.CreatedBy,
                                            "ProfileContact": dedata.ProfileContact,
                                            "UserID": dedata.UserID,
                                            "Reciver":elementOne.UserEmail,
                                            "Sender":MyInfo.UserEmail,
                                            "SharedOn":new Date()
                                        }

                                        POSTPACKAGE(localStorage.getItem('CreateUsersApi'),'',EDAD,(efe)=>{

                                            POSTMAIL(elementOne.UserEmail,'Shared Contact',`You have A Shared Contact From ${MyInfo.UserName} On the Connection App \n Open the App to Check The Shared Contact `,(daes)=>{

                                                USERCONTACT();

                                                return;
                                            
                                            });

                                        })

                                    });                                    

                                });
 
                            } else {
                                
                                TOAST('Check Your Internet Connection');

                                return;

                            }

                        })
    
                    });
    
                });

            });

        })

    })

}

const SHAREDCONTACTSDOWNLOAD=()=>{

    if (localStorage.getItem('NetWork')) {

        DEJSON('local','User',(info)=>{

            const DATA={
    
                "sheetName":"SharedContacts"
            };
        
            POSTPACKAGE(GETAPI,'',DATA,(data)=>{
        
                const NUMBERS={
                    "Name":"Contacts",
                    "Data":data
                }
        
                STOREINDEXED('ConnectionsShared','Contacts',NUMBERS,(dataone)=>{
        
                    if (dataone === true ) {

                        STORE('local','ContactsUpdated','Updated');

                        return;
                            
                    } else {

                        if (localStorage.getItem('ContactsUpdated')) {

                            UPDATEINDEXED('ConnectionsShared','Contacts',NUMBERS);

                            return;
                                
                        }else{

                            AUTORUN();

                            return;
                        }
    
                    }
                })
        
            });
    
        })

        return;
        
    }

}

const SHAREDCONTACTSPAGE=()=>{

    DISPLAY('',`

        <header>
    
            <img class='LeftedIcon' onclick='HomePage()' src='${WHITEBACKICON}'/>
            
            <h3 class='ContactUserName'>Shared Contacts</h3>

        </header>

        <div class='HomeDivHolder'></div>
        
    `);

    DECLARATION('.HomeDivHolder',(ELEMENT)=>{

        DEJSON('local','User',(Mydata)=>{

            LOADER(ELEMENT,'Loader');

            GETINDEXED('ConnectionsShared','Contacts',(data)=>{

                CLEAR(ELEMENT);
        
                REDUX(data,(element)=>{
    
                    REDUX(element.Data.reverse(),(elementOne)=>{

                        if (elementOne.Reciver === Mydata.UserEmail ) {

                            CREATEELEMENT('div','ContactsHolder',(ELEMENTED)=>{
        
                                DISPLAY(ELEMENTED,`
            
                                    <img id='UserImage' class='LeftedIcon' src='${elementOne.ProfileContact||WHITEUSERICON}'/>
                                        
                                    <h1 class='ContactsName'>${elementOne.UserName}</h1>
            
                                    <p class='FirstNumber' >${elementOne.FirstNumber}</p>
            
                                `);
            
                                ADD(ELEMENT,ELEMENTED);
        
                                EVENT(ELEMENTED,'click',()=>{
        
                                    JSONIFICATION(elementOne,(dara)=>{
        
                                        STORE('','ContactUser',dara);

                                        STORE('','Navigation','Shared');
        
                                        USERCONTACT();

                                        return;
        
                                    })
        
                                })
            
                            });
                            
                        } 
        
                    });
    
                });
    
            })

        });

    })

}

const USERACCOUNTPAGE=()=>{

    DEJSON('local','User',(data)=>{

        DISPLAY('',`
            
            <header>
    
                <img class='LeftedIcon' onclick='HomePage()' src='${WHITEBACKICON}'/>
    
                <h3 class='ContactUserName'>${data.UserName}</h3>
            
            </header>

            <div class='HomeDivHolder'>

            
                <div class='ImageHolderCreation'>
        
                    <img class='CreateUserImage'  src='${data.UserImage||WHITEUSERICON}'/>
                        
                </div>


                <button id='SaveNumberButton' >
        
                    <h3 class='SaveName'>${data.UserName}</h3>
        
                    <img class='SaveImage' src='${WHITEUSERICON}'/>
        
                </button>

                <button id='SaveNumberButton' >
        
                    <h3 class='SaveName'>${data.UserEmail}</h3>
        
                    <img class='SaveImage' src='${WHITEGMAILICON}'/>
        
                </button>

                <button id='SaveNumberButton' >
        
                    <h3 class='SaveName'>${data.Location ||'Add Location' }</h3>
        
                    <img class='SaveImage' src='${WHITELOCATIONICON}'/>
        
                </button>

                <div class='Details'>${data.AboutUser}</div>

                <button id='SaveNumberButton' class='forestgreen'>
    
                    <h3 class='SaveName'>Update</h3>
    
                    <img class='SaveImage' src='${WHITEPENCILICON}'/>
    
                </button>
            
            </div>
    
        `);

        CLICKED('.forestgreen',()=>{

            DISPLAY('',`

                <header>
        
                    <img class='LeftedIcon' onclick='USERACCOUNTPAGE()' src='${WHITEBACKICON}'/>
        
                    <h3 class='ContactUserName'>Connections</h3>
                
                </header>
        
                <div class='HomeDivHolder'>
        
                    <div class='ImageHolderCreation'>
        
                        <img class='CreateUserImage'  src='${WHITEUSERICON}'/>
                        
                    </div>
        
                    <p class='AddUser'>Add a Photo</p>
        
                    <input type='text' id='UserName' placeholder=' User Name' >
        
                    <input type='text' id='Location' placeholder=' Current Location' >
        
                    <textarea id='AboutUser' placeholder='Who Are You?'></textarea>
        
                    <button id='SaveNumberButton' class='forestgreen'>
        
                        <h3 class='SaveName'>Save</h3>
        
                        <img class='SaveImage' src='${WHITESAVEICON}'/>
        
                    </button>
                
                </div>
        
            `);

            CLICKED('.AddUser',()=>{IMAGEPICKER('.CreateUserImage',(data)=>{STORE('','UserImage',data)})});

            DECLARATION('.forestgreen',(ELEMENT)=>{

                const UserName=document.querySelector('#UserName');
                const Location=document.querySelector('#Location');
                const AboutUser=document.querySelector('#AboutUser');

                EVENT(ELEMENT,'click',()=>{
            
                    if (UserName.value || Location.value ||AboutUser.value || sessionStorage.getItem('UserImage') ) {

                        if (localStorage.getItem('NetWork')) {

                            const USERDATA={
                                "sheetName":"Users",
                                "CreatedOn": new Date(),
                                "AboutUser": AboutUser.value || data.AboutUser,
                                "Location": Location.value || data.Location,
                                "UserImage": sessionStorage.getItem('UserImage')||data.UserImage,
                                "UserID": data.UserID,
                                "UserName":UserName.value || data.UserName,
                            }
                      
                            LOADER(ELEMENT);
            
                            POSTPACKAGE(localStorage.getItem('UpdateUserApi'),'',USERDATA,(reso)=>{

                                DELETESTORAGE('','UserImage');

                                FINDER(reso,'UserEmail',data.UserEmail,(users)=>{

                                    if (users.UserEmail === data.UserEmail ) {

                                        JSONIFICATION(users,(info)=>{
                        
                                            STORE('local','User',info);
                        
                                            USERACCOUNTPAGE();
                        
                                            return;
                        
                                        })
                                        
                                    } else {
                                        
                                        DELETESTORAGE('local','User');RELOADPAGE();

                                        return;

                                    }

                                });
                                
                            })
            
                        } else {
                            
                            TOAST('Check Your Internet Connection');
            
                        }
                        
                    }else{

                        TOAST('Fill Any Part');

                    }
        
    
                });
        
            });

        });

    });

}

const UPDATECONTACTPAGE=()=>{

    DEJSON('','ContactUser',(data)=>{

        DISPLAY('',`

            <header>
    
                <img class='LeftedIcon' onclick='USERCONTACT()' src='${WHITEBACKICON}'/>
    
                <h3 class='UserAppName'>${data.UserName}</h3>
            
            </header>
    
            <div class='HomeDivHolder'>
    
                <div class='ImageHolderCreation'>
    
                    <img class='CreateUserImage'  src='${data.ProfileContact||WHITEUSERICON}'/>
                    
                </div>
    
                <p class='AddUser'>Add a Photo</p>
    
                <input type='text' id='UserName' placeholder='${data.UserName}' >
    
                <input type='tel' id='FirstNumber' placeholder='${data.FirstNumber}' >
    
                <input type='tel' id='SecondNumber' placeholder=' ${data.SecondNumber}' >
    
                <input type='tel' id='ThirdNumber' placeholder='${data.ThirdNumber}' >
    
                <input type='tel' id='FourthNumber' placeholder='${data.FourthNumber}' >
    
                <input type='email' id='PersonalEmail' placeholder='${data.PersonalEmail}' >
    
                <input type='email' id='WorkEmail' placeholder='${data.WorkEmail}' >
    
                <input type='text' id='Location' placeholder='${data.Location}' >
    
                <textarea id='AboutUser' placeholder='${data.Details}'></textarea>
    
                <button id='SaveNumberButton' class='forestgreen'>
    
                    <h3 class='SaveName'>Update</h3>
    
                    <img class='SaveImage' src='${WHITESAVEICON}'/>
    
                </button>
            
            </div>
    
        `);
    
        const UserName=document.querySelector('#UserName');
        const FirstNumber=document.querySelector('#FirstNumber');
        const SecondNumber=document.querySelector('#SecondNumber');
        const ThirdNumber=document.querySelector('#ThirdNumber');
        const FourthNumber=document.querySelector('#FourthNumber');
        const PersonalEmail=document.querySelector('#PersonalEmail');
        const WorkEmail=document.querySelector('#WorkEmail');
        const Location=document.querySelector('#Location');
        const AboutUser=document.querySelector('#AboutUser');
    
        CLICKED('.AddUser',()=>{IMAGEPICKER('.CreateUserImage',(data)=>{STORE('','UserImage',data)})});
    
        DECLARATION('.forestgreen',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                if (!UserName.value) {
    
                    TOAST('Enter Contact Name');
    
                    return;
                }
    
                if (!FirstNumber.value) {
    
                    TOAST('Enter Contact Name');
    
                    return;
                }
    
                if (localStorage.getItem('NetWork')) {
    
                    DEJSON('local','User',(data)=>{
    
                        const USERDATA={
                            "sheetName":data.UserDataBase,
                            "ContactID": Date.now(),
                            "CreatedBy": data.UserID,
                            "CreatedOn": new Date(),
                            "Details": AboutUser.value,
                            "FirstNumber": FirstNumber.value,
                            "FourthNumber": FourthNumber.value,
                            "Location": Location.value,
                            "PersonalEmail": PersonalEmail.value,
                            "ProfileContact": sessionStorage.getItem('UserImage'),
                            "SecondNumber": SecondNumber.value,
                            "ThirdNumber": ThirdNumber.value,
                            "UserID": Date.now(),
                            "UserName": UserName.value,
                            "WorkEmail": WorkEmail.value
                        }
        
                        const DATA={
            
                            "sheetName":data.UserDataBase
                    
                        };
        
                        LOADER(ELEMENT);
        
                        POSTPACKAGE(localStorage.getItem('CreateUsersApi'),'',USERDATA,(reso)=>{
        
                            DELETESTORAGE('','UserImage');
        
                            POSTPACKAGE(GETAPI,'',DATA,(data)=>{
                
                                const NUMBERS={
                                    "Name":"Contacts",
                                    "Data":data
                                }
                        
                                STOREINDEXED('Connections','Contacts',NUMBERS,(dataone)=>{
                        
                                    if (dataone === true ) {
                        
                                        STORE('local','ContactsUpdated','Updated');
                        
                                        HomePage();
                                        
                                    }else{
                        
                                        if (localStorage.getItem('ContactsUpdated')) {
                                            
                                            UPDATEINDEXED('Connections','Contacts',NUMBERS);
        
                                            HomePage();
                        
                                        } else {
                        
                                            AUTORUN();
                        
                                        }
                        
                                    }
                        
                                })
                        
                            });
        
                        })
        
                    })    
                    
                } else {
                    
                    TOAST('Check Your Internet Connection')
    
                }
    
            });
    
        });

    });

};