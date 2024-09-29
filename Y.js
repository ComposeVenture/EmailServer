const DATABASELINK='https://docs.google.com/spreadsheets/d/15xbb_GDX9UKv0r4N6uqsEl8SInRRyyiDT9vs7JJP6qU/edit';

const AUTORUN=()=>{

    if (localStorage.getItem('UserData')) {
       
        HOMEPAGE();

    }

    LOGINPAGE();

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header class='Header' >
            
            <input type='search' class='SearchInput' placeholder='Search' />

            <button  class='NewButton' >New</button>

        </header>

        <div class='MyData'></div>

        <div class='MyContacts' ></div>

    `);

};

const LOGINPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='${APPLOGO}'/>

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

            });

        });

    });

};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='${APPLOGO}'/>

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

            DECLARATION('#Name',(EMAILINPUT)=>{

                if (!EMAILINPUT.value) {

                    TOAST('Enter User Name');

                    return;
                    
                };

                DECLARATION('#Email',(EMAILINPUT)=>{

                    if (!EMAILINPUT.value) {
    
                        TOAST('Enter Email');
    
                        return;
                        
                    }

                    DECLARATION('#Code',(EMAILINPUT)=>{

                        if (!EMAILINPUT.value) {
        
                            TOAST('Enter Pin Code');
        
                            return;
                            
                        };

                        LOADER(ELEMENT);

                        GETDATA(DATABASELINK,'Users',(data)=>{

                            console.log(data);

                        });
        
                    });
    
                });

            });

        });

    });

};

