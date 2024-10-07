const DATABASELINK='https://docs.google.com/spreadsheets/d/15xbb_GDX9UKv0r4N6uqsEl8SInRRyyiDT9vs7JJP6qU/edit';

const AUTORUN=()=>{

    ONLINEUPDATER();

    if (localStorage.getItem('UserData')) {
       
        HOMEPAGE();

        return;

    }

    if (localStorage.getItem('User')) {

        EMAILVERIFICATIONPAGE();

        return;
        
    }

    LOGINPAGE();

    return;

};

const ONLINEUPDATER=()=>{

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('Connections');

        if (localStorage.getItem('UserData')) {

            DEJSON('local','UserData',(data)=>{

                DATABASESAVER(DATABASELINK,data.UserEmail,'Connections','Users',(data)=>{

                    if (data === true  ) {
        
                        TIMENOW((time)=>{
        
                            STORE('local','UsersUpdated',time);
            
                            return;
        
                        });
         
                    };
        
                })
        
                return;

            });
  
        }
 
    };

}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header class='Header' >
            
            <input type='search' class='SearchInput' placeholder='Search' />

            <button  class='NewButton' onclick='CREATECONTACTPAGE()' >New</button>

        </header>

        <div class='MyData'></div>

        <div class='MyContacts' ></div>

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

        });

    });

};

const LOGINPAGE=()=>{

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

                                HOMEPAGE();

                                return;

                            });
                            
                        }

                        TOAST('No User Account Found');

                        ORIGIN(ELEMENT,'Sign In');

                        return;

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

                            return;
    
                        });
    
                    });

                });

            });

        });

    });

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

            <input type='email' id='Email' class='Input' placeholder="Enter Person's Name" />

            <input type='email' id='Email' class='Input' placeholder=' Enter First Number ' />

            <input type='email' id='Email' class='Input' placeholder=' Enter Second Number ' />

            <input type='email' id='Email' class='Input' placeholder=' Enter Third Number ' />

            <input type='email' id='Email' class='Input' placeholder=' Enter Fourth Number ' />

            <input type='email' id='Email' class='Input' placeholder=' Enter Personal Email ' />

            <input type='email' id='Email' class='Input' placeholder=' Enter Work Email ' />
        
            <textarea placeholder='About Person' ></textarea>

            <button class='forestgreen'>Save Number</button>
        
        </div>
        
    `);

    CLICKED('.Usericon',()=>{

        IMAGEPICKER('.Usericon',(data)=>{

        });
    
    })


}

const USERACCOUNTPAGE=(data)=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITESINGLEBACKICON}'/>
        
            <img class='RightIcon' src='${WHITESETTINGICON}'/>

        </header>

        <div class='ContactDiv'>

            <div class='CreateImageHodler'>

                <img class='Usericon' src='${BLACKIMAGEICON}'/>
            
            </div>

        </div>
        
    `);

}