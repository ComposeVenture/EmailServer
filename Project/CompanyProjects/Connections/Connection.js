const DATABASELINK='https://docs.google.com/spreadsheets/d/15xbb_GDX9UKv0r4N6uqsEl8SInRRyyiDT9vs7JJP6qU/edit';

const AUTORUN=()=>{

    Android.openCamera();

    APPLOGIC();

};

const APPSDOWNLOAD=(APPNAMER,STORE,TABLE)=>{

    NETWORKED();

    setTimeout(() => {

        if (localStorage.getItem('NetWork')) {

            APPLOADUPDATER(NAME);
    
            DATABASESAVER(DATABASELINK,APPNAMER,STORE,TABLE,(data)=>{
    
                if (data === false ) {
        
                    DATABASEUPDATER(DATABASELINK,APPNAMER,STORE,TABLE);
                    
                } else {
        
                    APPLOGIC();
                    
                };
        
            });
    
        };

    }, 1000);

};

const APPLOGIC=()=>{

    if (localStorage.getItem('UserData')) {

        HOMEPAGE();

    } else {
        
        LOGINPAGE();

    }
    
}

const LOGINPAGE=()=>{

    Android.openCamera();

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

        <p>Cloud Storage For Your Contacts</p>

        <input type='email' id='Email' class='Input' placeholder='Enter Email' />

        <button class='forestgreen'>Sign In</button>

        <button class='blue'>Create Account</button>
        
    `);

    CLICKED('.blue',()=>{

        CREATEACCOUNTPAGE();

    });

    DECLARATION('.forestgreen',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            DECLARATION('#Email',(EMAILINPUT)=>{

                if (!EMAILINPUT.value) {

                    TOAST('Enter Email');

                    return;
                    
                }

                LOADER(ELEMENT);

                GETDATA(DATABASELINK,'Users',(data)=>{

                    FINDER(data,'UserEmail',EMAILINPUT.value,(users)=>{
                        
                        if (users.UserEmail === EMAILINPUT.value ) {

                            JSONIFICATION(users,(MyData)=>{

                                STORE('local','UserData',MyData);

                                APPSDOWNLOAD(EMAILINPUT.value,'Connections','Contacts');
                              
                               
                            });
                            
                        }else{

                            TOAST('No User Account Found');

                            ORIGIN(ELEMENT,'Sign In');
    
                        }

                    });

                });

            });

        });

    });

};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

        <p>Cloud Storage For Your Contacts</p>
 
        <input type='text' id='Name' class='Input' placeholder='Enter Name' />

        <input type='email' id='Email' class='Input' placeholder='Enter Email'/>

         <input type='tel' id='Code' maxlength='6'  class='Input' placeholder='Enter Pin Code'/>

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>LogIn</button>
        
    `);

    CLICKED('.blue',()=>{

        LOGINPAGE();

    });

    DECLARATION('.forestgreen',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            DECLARATION('#Name',(EMAILINPUTONE)=>{

                if (!EMAILINPUTONE.value) {

                    TOAST('Enter User Name');

                    return;
                    
                };

                DECLARATION('#Email',(EMAILINPUT)=>{

                    if (!EMAILINPUT.value) {
    
                        TOAST('Enter Email');
    
                        return;
                        
                    }

                    DECLARATION('#Code',(EMAILINPUTTWO)=>{

                        if (!EMAILINPUT.value) {
        
                            TOAST('Enter Pin Code');
        
                            return;
                            
                        };

                        LOADER(ELEMENT);

                        GETDATA(DATABASELINK,'Users',(data)=>{

                            RANDOMCODE((code)=>{

                                const DATA={
                                    "UserName":EMAILINPUTONE.value,
                                    "UserEmail":EMAILINPUT.value,
                                    "UserPassword":EMAILINPUTTWO.value,
                                    "UserCode":code
                                }

                                POSTMAIL(EMAILINPUT.value,'Connections Account Creation',`Dear ${EMAILINPUT.value} \n Your Verification Code is ${code}`,(response)=>{

                                    JSONIFICATION(DATA,(user)=>{

                                        STORE('local','User',user);

                                        EMAILVERIFICATIONPAGE();

                                        return;

                                    })

                                });

                            });

                        });
        
                    });
    
                });

            });

        });

    });

};

const EMAILVERIFICATIONPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

        <p>Cloud Storage For Your Contacts</p>

        <input type='tel' maxlength='6' id='Code' class='Input' placeholder='Enter Verification Code' />

        <button class='forestgreen'>Verify</button>

        <button class='blue'>Cancel</button>
        
    `);

    CLICKED('.blue',()=>{

        DELETESTORAGE('local','User');

        AUTORUN();

    });

    DECLARATION('.forestgreen',(ELEMENT)=>{

        EVENT(ELEMENT,'click',()=>{

            DECLARATION('#Code',(EMAILINPUT)=>{

                if (!EMAILINPUT.value) {

                    TOAST('Enter Verification Code');

                    return;
                    
                }

                DEJSON('local','User',(Mydata)=>{

                    if (EMAILINPUT.value !== Mydata.UserCode  ) {

                        TOAST('Invalid Verification Code');
    
                        return;
                        
                    };
    
                    LOADER(ELEMENT);

                    GETDATA(DATABASELINK,'Users',(data)=>{
    
                        FINDER(data,'UserEmail',Mydata.UserEmail,(users)=>{
                            
                            if (users.UserEmail === Mydata.UserEmail ) {
    
                                TOAST('User Account Found');

                                ORIGIN(ELEMENT,'Verify');
    
                                return;
                                
                            };

                            const HEADER=['UserName','UserEmail','UserPassword','CreatedOn','Device'];

                            TIMENOW((time)=>{

                                DEVICED((device)=>{

                                    const DATA=[Mydata.UserName,Mydata.UserEmail,Mydata.UserPassword,time,device]

                                    INSERTDATA(DATABASELINK,'Users',HEADER,DATA,(data)=>{

                                        CREATETABLE(DATABASELINK,Mydata.UserEmail,(datata)=>{

                                            GETDATA(DATABASELINK,'Users',(datate)=>{
    
                                                FINDER(datate,'UserEmail',Mydata.UserEmail,(users)=>{
                                                    
                                                    if (users.UserEmail === Mydata.UserEmail ) {

                                                        JSONIFICATION(users,(Users)=>{

                                                            DELETESTORAGE('local','User');

                                                            STORE('local','UserData',Users);

                                                            DATABASESAVER(DATABASELINK,Mydata.UserEmail,'Connections','Contacts',(data)=>{

                                                                if (data === true ) {
                                                        
                                                                    HOMEPAGE();
                            
                                                                    return;
                                                                    
                                                                };
                                                        
                                                            });
                                                        
                                                        });
                            
                                                    };
                                                });

                                            });

                                        });
                                        
                                    });

                                });

                            });

                            return;
    
                        });
    
                    });

                });

            });

        });

    });

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header class='Header' >
            
            <input type='search' class='SearchInput' placeholder='Search' />

            <button  class='NewButton' onclick='CREATECONTACTPAGE()' >New</button>

        </header>

        <div class='MyData'></div>

        <div class='MyContacts' >

            <br><br>
            
            <p class='colorteal'>No Contacts Saved</p>

            <br><br>

            <button onclick='CREATECONTACTPAGE()' class='teal'> Create New Contact </button>
        
        </div>

    `);

    DECLARATION('.MyData',(ELEMENT)=>{

        DEJSON('local','UserData',(data)=>{

            DISPLAY(ELEMENT,`

                <p class='HomeUserName'>${data.UserName}</p>

                <img class='HomeUserImage' src='${data.UserImage || BLACKIMAGEICON }'/>
                
                <div class='MoreUserDetail'>

                    <img onclick='RELOADPAGE()' src='${WHITRETRYICON}'/>

                    <img src='${WHITEPENCILICON}'/>

                    <img src='${WHITEDELETEICON}'/>
                
                </div>

                <img class='UserMoreIcon' src='${WHITESINGLEBACKICON}'/>

            `);

            CLICKED('.UserMoreIcon',()=>{

                USERACCOUNTPAGE(data);

            });

            APPSDOWNLOAD(data.UserEmail,'Connections','Contacts');
        });

    });

   HOMEPAGEDESIGN();

};

const CREATECONTACTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <p class='RightText'>Create New Contact</p>

        </header>

        <div class='ContactDiv'>

            <div class='CreateImageHodler'>

                <img class='Usericon' src='${BLACKIMAGEICON}'/>
            
            </div>

            <input type='text' id='Name' class='Input' placeholder="Enter Person's Name" />

            <input type='tel' id='FirstNumber' class='Input' placeholder=' Enter First Number ' />

            <input type='tel' id='SecondNumber' class='Input' placeholder=' Enter Second Number ' />

            <input type='tel' id='ThirdNumber' class='Input' placeholder=' Enter Third Number ' />

            <input type='tel' id='FourthNumber' class='Input' placeholder=' Enter Fourth Number ' />

            <input type='email' id='PersonalEmail' class='Input' placeholder=' Enter Personal Email ' />

            <input type='email' id='WorkEmail' class='Input' placeholder=' Enter Work Email ' />
        
            <textarea placeholder='About Person' id='PersonDetails' ></textarea>

            <button class='forestgreen'>Save Number</button>
        
        </div>
        
    `);

    let DATA;

    CLICKED('.Usericon',()=>{

        IMAGEPICKER('.Usericon',(data)=>{

            DATA=data;

        });
    
    });

    CLICKED('.forestgreen',()=>{

        const Name=document.querySelector('#Name');
        const FirstNumber=document.querySelector('#FirstNumber');
        const SecondNumber=document.querySelector('#SecondNumber');
        const ThirdNumber=document.querySelector('#ThirdNumber');
        const FourthNumber=document.querySelector('#FourthNumber');
        const PersonalEmail=document.querySelector('#PersonalEmail');
        const WorkEmail=document.querySelector('#WorkEmail');
        const PersonDetails=document.querySelector('#PersonDetails');

        if (!Name.value) {

            TOAST('Enter User Name');

            return;
            
        };

        if (!FirstNumber.value) {

            TOAST('Enter First Contact');

            return;
            
        };

        if (!localStorage.getItem('NetWork')) {

            TOAST('Check Your Internet Connection');

            return;
            
        }

        DECLARATION('.forestgreen',(ELEMENT)=>{

            LOADER(ELEMENT);

            const HEADERS=['UserName','UserFirstNumber','UserSecondNumber','UserThirdNumber','UserFourthNumber','UserPersonalEmail','UserWorkEmail','UserDetails','UserImage','DateCreated','Deleted'];
            
            DATENOW((time)=>{

                const USERDATA=[Name.value,FirstNumber.value,SecondNumber.value,ThirdNumber.value,FourthNumber.value,PersonalEmail.value,WorkEmail.value,PersonDetails.value,DATA,time,''];

                DEJSON('local','UserData',(data)=>{
    
                    INSERTDATA(DATABASELINK,data.UserEmail,HEADERS,USERDATA,(response)=>{
    
                        DATABASESAVER(DATABASELINK,data.UserEmail,'Connections','Contacts',(data)=>{

                            if (data === false ) {
                    
                                DATABASEUPDATER(DATABASELINK,data.UserEmail,'Connections','Contacts');
                                
                                HOMEPAGE();

                            } else {
                    
                                HOMEPAGE();
                                
                            };
                    
                        });
    
                    });
    
                });

            });

        });

    });

}

const USERACCOUNTPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <img class='RightIcon' onclick='SETTINGSPAGE()' src='${WHITESETTINGICON}'/>

        </header>

        <div class='ContactDiv'>

            <div class='CreateImageHodler'>

                <img class='Usericon' src='${BLACKIMAGEICON}'/>
            
            </div>

        </div>
        
    `);

}

const HOMEPAGEDESIGN=()=>{

    DECLARATION('.MyContacts',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER('Connections','Contacts',(data)=>{

            if (!data.Deleted) {

                TIMER(data.DateCreated,(times)=>{

                    CREATEELEMENT('div','ContactsDiv',(ELEMENTE)=>{
    
                        DISPLAY(ELEMENTE,`
    
                            <div class='contactUserImage'>
    
                                <img class='contactUserImag' src='${data.UserImage || BLACKIMAGEICON }'/>
                            
                            </div>
        
                            <p class='ContactName'>${data.UserName}</p>
        
                            <p class='PhoneNumber'>${data.UserFirstNumber}</p>
    
                            <p class='ContactTimes'>${times}</p>
         
                        `);
        
                        ADD(ELEMENT,ELEMENTE);
        
                        CREATEELEMENT('img','UserMoreIcon',(ELEMENTEE)=>{
        
                            ELEMENTEE.src=WHITESINGLEBACKICON;
        
                            ADD(ELEMENTE,ELEMENTEE);
    
                            EVENT(ELEMENTEE,'click',()=>{
    
                                USERNUMBERPAGE(data);
    
                            });
        
                        });
        
                    });
    
                });
                    
            };

        });

    });

};

const USERNUMBERPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <p class='RightText'>${data.UserName}</p>

        </header>

        <div class='ContactDiv'>

            <div class='CreateImageHodler'>

                <img class='Usericon' src='${data.UserImage||BLACKIMAGEICON}'/>

            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserFirstNumber}</p>

                <img class='Numbered' id='SmsFirstNumber' src='${WHITECHATICON}'/>

                <img class='Number' id='CallFirstNumber' src='${WHITEPHONEICON}'/>
            
            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserSecondNumber || 'Second Contact'}</p>

                <img class='Numbered' id='CallSecondNumber' src='${WHITECHATICON}'/>

                <img class='Number' id='SmsSecondNumber' src='${WHITEPHONEICON}'/>
            
            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserThirdNumber || 'Third Contact'}</p>

                <img class='Numbered' id='CallThirdNumber' src='${WHITECHATICON}'/>

                <img class='Number' id='SmsThirdNumber' src='${WHITEPHONEICON}'/>
            
            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserFourthNumber || 'Fourth Contact'}</p>

                <img class='Numbered' id='CallFourthNumber' src='${WHITECHATICON}'/>

                <img class='Number' id='SmsFourthNumber' src='${WHITEPHONEICON}'/>
            
            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserPersonalEmail|| 'Personal Email'}</p>

                <img class='Number' id='PersonalEmail' src='${WHITEGMAILICON}'/>
            
            </div>

            <div class='NumberDiv'>

                <p class='Numbers'>${data.UserPersonalEmail|| 'Work Email'}</p>

                <img class='Number' id='WorkEmail' src='${WHITEGMAILICON}'/>
            
            </div>

            <div class='AboutUserDiv'>

                <p>${data.UserDetails ||`Nothing About ${data.UserName}`}</p>
                
            </div>

            <div class='NumberDiv'>

                <img class='Foat' src='${WHITEPENCILICON}'/>

                <img  id='DeleteNumber'  src='${WHITEDELETEICON}'/>
            
            </div>

        </div>
        
    `);

    CLICKED('#DeleteNumber',()=>{

        DECLARATION('#DeleteNumber',(ELEMENT)=>{

            ELEMENT.src=WHITELOADINGICON;

            CLASS(ELEMENT,'LoadingIcon');

            STYLED(ELEMENT,'background','transparent');

            DEJSON('local','UserData',(Mydara)=>{

                const USERDATA=[data.UserName,data.UserFirstNumber,data.UserSecondNumber,data.UserThirdNumber,data.UserFourthNumber,data.PersonalEmail,data.WorkEmail,data.PersonDetails,data.UserImage,new Date(),'True'];
    
                UPDATEDATA(DATABASELINK,Mydara.UserEmail,data.ID,USERDATA,(response)=>{
    
                    DATABASESAVER(DATABASELINK,Mydara.UserEmail,'Connections','Contacts',(datata)=>{
    
                        if (datata === false ) {
                
                            DATABASEUPDATER(DATABASELINK,Mydara.UserEmail,'Connections','Contacts');
                            
                            HOMEPAGE();
    
                        } else {
                
                            HOMEPAGE();
                            
                        };
                
                    });
    
                });
    
            });

        });

    });

    CLICKED('#CallFirstNumber',()=>{CALL(data.UserFirstNumber);});

    CLICKED('#SmsFirstNumber',()=>{SMS(data.UserFirstNumber);});

    CLICKED('#CallSecondNumber',()=>{CALLNUMBERS(data.UserSecondNumber)});

    CLICKED('#SmsSecondNumber',()=>{CALLNUMBERS(data.UserThirdNumber)});

    CLICKED('#CallThirdNumber',()=>{CALLNUMBERS(data.UserThirdNumber)});

    CLICKED('#SmsThirdNumber',()=>{CALLNUMBERS(data.UserThirdNumber)});

    CLICKED('#CallFourthNumber',()=>{CALLNUMBERS(data.UserFourthNumber)});

    CLICKED('#SmsFourthNumber',()=>{SMSNUMBERS(data.UserFourthNumber)});

    CLICKED('#PersonalEmail',()=>{EMAIL(data.UserPersonalEmail)});

    CLICKED('#WorkEmail',()=>{EMAIL(data.WorkEmail)});

}

const CALLNUMBERS=(NUMBER)=>{

    if (NUMBER) {

        CALL(NUMBER);
        
    } else {

        TOAST('No Number Found')
        
    };

}

const SMSNUMBERS=(NUMBER)=>{

    if (NUMBER) {

        SMS(NUMBER);
        
    } else {

        TOAST('No Number Found')
        
    };

}

const EMAIL=(NUMBER)=>{

    if (NUMBER) {

        EMAIL(NUMBER);
        
    } else {

        TOAST('No Email Found')
        
    };

}

const SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='USERACCOUNTPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <p class='RightText' >Settings</p>
            
        </header>

        <div class='ContactDiv' onclick='DELETEDCONTACTSPAGE()' >

            <div class='NumberDiv'>

                <p class='Numbers'>Deleted Contacts</p>

                <img class='Number' id='SmsThirdNumber' src='${WHITEDELETEICON}'/>
            
            </div>

            <div  id='Logout' class='NumberDiv'>

                <p class='Numbers'>Log Out</p>

                <img class='Number' id='SmsThirdNumber' src='${WHITELOGOUT}'/>
            
            </div>

        </div>
        
    `);

    CLICKED('#Logout',()=>{
        DELETESTORAGE('local','UserData');
        RELOADPAGE();
    })

}

const DELETEDCONTACTSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='USERACCOUNTPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <p class='RightText' >Settings</p>
            
        </header>

        <div class='ContactDiv' onclick='DELETEDCONTACTSPAGE()' ></div>
        
    `);

    
    DECLARATION('.ContactDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER('Connections','Contacts',(data)=>{

            if (data.Deleted) {

                TIMER(data.DateCreated,(times)=>{

                    CREATEELEMENT('div','ContactsDiv',(ELEMENTE)=>{
    
                        DISPLAY(ELEMENTE,`
    
                            <div class='contactUserImage'>
    
                                <img  class='contactUserImag' src='${data.UserImage || BLACKIMAGEICON }'/>
                            
                            </div>
        
                            <p class='ContactName'>${data.UserName}</p>
        
                            <p class='PhoneNumber'>${data.UserFirstNumber}</p>
    
                            <p class='ContactTimes'>${times}</p>
         
                        `);
        
                        ADD(ELEMENT,ELEMENTE);
        
                        CREATEELEMENT('img','UserMoreIcon',(ELEMENTEE)=>{
        
                            ELEMENTEE.src=WHITESYNCICON;
        
                            ADD(ELEMENTE,ELEMENTEE);
    
                            EVENT(ELEMENTEE,'click',()=>{

                                TOAST('Contact Is Being Restored','Please Wait');

                                DEJSON('local','UserData',(Mydara)=>{
                        
                                    const USERDATA=[data.UserName,data.UserFirstNumber,data.UserSecondNumber,data.UserThirdNumber,data.UserFourthNumber,data.PersonalEmail,data.WorkEmail,data.PersonDetails,data.UserImage,new Date(),''];
                        
                                    UPDATEDATA(DATABASELINK,Mydara.UserEmail,data.ID,USERDATA,(response)=>{
                        
                                        DATABASESAVER(DATABASELINK,Mydara.UserEmail,'Connections','Contacts',(datata)=>{
                        
                                            if (datata === false ) {
                                    
                                                DATABASEUPDATER(DATABASELINK,Mydara.UserEmail,'Connections','Contacts');
                                                
                                                HOMEPAGE();
                        
                                            } else {
                                    
                                                HOMEPAGE();
                                                
                                            };
                                    
                                        });
                        
                                    });
                        
                                });
                    
                            });
        
                        });
        
                    });
    
                });
                    
            };

        });

    });

}