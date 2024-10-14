const LOGINLINK='https://demo.naweriindustries.com/mobile-endpoints/login-endpoint.php';

const PHOTOS='https://demo.naweriindustries.com/uploads/farmerPhotos/';

const NEWFARMERLINK='https://demo.naweriindustries.com/mobile-endpoints/newFarmer-endpoint.php';

const AUTORUN=()=>{

    requestLocation();

    APPLOGIC();

};

const APPSDOWNLOAD=()=>{

    NETWORKED();

    setTimeout(() => {

        if (localStorage.getItem('NetWork')) {

            APPLOADUPDATER(NAME);
    
        };

    }, 1000);

};

const APPLOGIC=()=>{

    lat();

    APPSDOWNLOAD();

    if (localStorage.getItem('UserData')) {
       HOMEPAGE();
    } else {
        LOGINPAGE();
    }
    
}

const LOGINPAGE=()=>{
   
    DISPLAY('',`

        <img class='AppLogoImage' onclick='RELOADPAGE()' src='${localStorage.getItem('AppIcon')}'/>

        <p id='Error'  class='colorred'></p>

        <p id='TopOne' class='Lefttext'>Agent Email</p>

        <input type='email' id='UserEmail' class='Inputed' placeholder=''  />

        <p class='Lefttext'>Password</p>
            
        <input type='password' id='UserPassword' class='Inputed' placeholder='*******' />

        <button id='LoginButton' class='blue'>Log In</button>


    `);


    CLICKED('.blue',()=>{

        const UserEmail=document.querySelector('#UserEmail');

        const UserPassword=document.querySelector('#UserPassword');

        if (!UserEmail.value) {
        
            TOAST('Enter Agent Email');

            return;

        };
        
        if (!UserPassword.value) {
        
            TOAST('Enter Password');

            return;

        };

        if (!localStorage.getItem('NetWork')) {

            TOAST('Check Your Internet Connection');

            return;
            
        };

        DECLARATION('.blue',(ELEMENT)=>{

            LOADER(ELEMENT);

            const USERDATA={
                "agent93720Login":"",
                "email":UserEmail.value,
                "password":UserPassword.value
            }

           POSTPACKAGE(LOGINLINK,'',USERDATA,(data)=>{

                if (data.status  === 'error' ) {

                    DECLARATION('#Error',(ELEMENTE)=>{

                        DISPLAY(ELEMENTE,data.msg);

                        ORIGIN(ELEMENT,'Log In');

                    })

                    return;
                    
                }

                if (data.status  === 'success') {

                    JSONIFICATION(data,(Mydata)=>{

                        STORE('local','UserData',Mydata);
     
                        HOMEPAGE();
     
                    })

                    return;

                };

            });

        });

    });

};

const HOMEPAGE=()=>{

    DISPLAY('',`

       <button id='NewFarmer' class='HomeButton'>

            <div class='HomeButtonImageHolder'>

                <img src='${WHITEPOSTICON}'/>
            
            </div>

       
            <p class='Titles'>New Farmer</p>
       
       </button>

        <button id='AllFarmers' class='HomeButton'>

            <div class='HomeButtonImageHolder'>

                <img src='${WHITELIBRARYICON}'/>
            
            </div>

            <p class='Titles'>All Farmers </p>
       
        </button>

        <button class='FloatButton'>

            <img class='Open' src='${WHITEMENUICON}'/>

            <img class='Close' src='${WHITECLOSEICON}'/>

        </button>

        <div class='SideNav'></div>


    `);

    CLICKED('.Open',()=>{

        MENUPAGE();

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

    });

    CLICKED('.Close',()=>{

        DECLARATION('.SideNav',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

        
        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

    });

    CLICKED('#AllFarmers',()=>{

        ALLFARMERSPAGE();

    });

    CLICKED('#NewFarmer',()=>{

        NEWFARMERPAGE();

    });


}   

const MENUPAGE=()=>{

    DECLARATION('.SideNav',(ELEMENT)=>{

        STYLED(ELEMENT,'display','block');

        DISPLAY(ELEMENT,`

            <button class='MenuButton' onclick='RELOADPAGE()'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITESYNCICON}'/>
        
                </div>

                <p class='Title'>Reload</p>

            </button>

            <button class='MenuButton' onclick='HOMEPAGE()'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITEHOMEICON}'/>
        
                </div>

                <p class='Title'>Home</p>

            </button>


            <button onclick='ALLFARMERSPAGE()' class='MenuButton'>

                <div  class='MenuButtonImageHolder'>

                    <img src='${WHITEGROUPICON}'/>
        
                </div>

                <p class='Title'>All Farmers </p>

            </button>

            <button onclick='NEWFARMERPAGE()' class='MenuButton'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITEUSERHOLDERICON}'/>
        
                </div>

                <p class='Title'>New Farmer </p>

            </button>

            <button class='MenuButton'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITELOCATIONICON}'/>
        
                </div>

                <p class='Title'>New Plot </p>

            </button>

            <button class='MenuButton'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITELIBRARYICON}'/>
        
                </div>

                <p class='Title'>All Plots </p>

            </button>

            <button id='Logout' class='MenuButton'>

                <div class='MenuButtonImageHolder'>

                    <img src='${WHITELOGOUT}'/>
        
                </div>

                <p class='Title'>Log Out </p>

            </button>
            
        `);

        CLICKED('#Logout',()=>{

            DELETESTORAGE('local','UserData');

            RELOADPAGE();

        });

    });

}

const NEWFARMERPAGE=()=>{

    DELETESTORAGE('','Image');

    DELETESTORAGE('','Gender');

    DELETESTORAGE('','Country');

    DISPLAY('',`

        <div class='SideNav'></div>

        <div class='ScrollDiv'>

            <p class='Lefttext'>Farmer ID</p>
            
            <input type='text' id='NIN' class='Inputed' placeholder='I.D Number' />

            <p class='Lefttext'>Farmer Name</p>
            
            <input type='text' id='FarmerName' class='Inputed' placeholder='Farmer's Name' />

            <p class='Lefttext'>Farmer Phone Number</p>
            
            <input type='tel' id='Telephone' class='Inputed' placeholder='Telephone' />

            <button class='SelectCountry' >Select Country</button>

            <p class='Lefttext'>Farmer's Districit </p>
            
            <input type='text' id='Districit' class='Inputed' placeholder='Farmer's Districit' />
            
            <p class='Lefttext'>Farmer's Region </p>
            
            <input type='text' id='Region' class='Inputed' placeholder='Farmer's Region' />
            
            <p class='Lefttext'>Farmer's Village </p>
            
            <input type='text' id='Village' class='Inputed' placeholder='Farmer's Village' />
            
            <p class='Lefttext'>Farmer Latitude </p>
            
            <input type='tel' id='latitude' class='Inputed' readonly placeholder='Farmer Latitude' />
            
            <p class='Lefttext'>Farmer's Longitude </p>
            
            <input type='tel' id='Longitude' class='Inputed' readonly placeholder='Farmer's Longitude' />
            
            <p class='Lefttext'>Number of coffee trees </p>
            
            <input type='tel' id='Trees' class='Inputed' placeholder='Number of coffee trees' />

            <p class='Lefttext'>Farm Area(ha) </p>
            
            <input type='tel' id='FarmArea' class='Inputed' placeholder='Farm Area(ha) ' />

            <p class='Lefttext'>Harvest Estimation (Kgs) - Cherry</p>
            
            <input type='tel' id='EstimatedKgs' class='Inputed' placeholder='Harvest Estimation (Kgs) - Cherry' />

            <p class='Lefttext'>Year Of Establishment</p>
            
            <input type='date' id='Establishment' class='Inputed' placeholder='Year Of Establishment' />

            <p class='Lefttext'>Farmer's Gender</p>
            
            <button class='SelectGender' >Select Gender</button>

            <p class='Lefttext'>Farmer's Photo</p>

            <img class='UserImage' src='${WHITEUSERHOLDERICON}'/>

            <textarea placeholder='Description' id='Description' ></textarea>

            <button id='SaveButton' class='blue'>Save</button>

            <br><br>

        </div>

        <div class='GenderDiv'>

            <header>

                <p class='Title'>Select Farmers Gender </p>

                <div id='CloseCountryDiv' class='MenuButtonImageHolder'>

                    <img id='CloseGender' src='${WHITECLOSEICON}'/>
        
                </div>

            </header>

            <br><br>

            <button id='Male' class='genderName'>Male</button>

            <hr>

            <button id='Female' class='genderName'>Female</button>

            <hr>

        </div>

        <div class='CountryHolder'>

            <header>

                <p class='Title'>Select Farmers Country </p>

                <div id='CloseCountryDiv' class='MenuButtonImageHolder'>

                    <img src='${WHITECLOSEICON}'/>
        
                </div>

            </header>

            <div class='CountryDivs'></div>
        
        </div>

        <button class='FloatButton'>

            <img class='Open' src='${WHITEMENUICON}'/>

            <img class='Close' src='${WHITECLOSEICON}'/>

        </button>
        
    `);

    let COUNTRY;
    let GENDER;
    let IMAGE;

    CLICKED('.UserImage',()=>{

        IMAGEPICKER('.UserImage',(data)=>{

            IMAGE=data;

            STORE('','Image','On');

        });

    });

    CLICKED('.SelectGender',()=>{

        DECLARATION('.GenderDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','block');

        });

    });

    CLICKED('#CloseGender',()=>{

        DECLARATION('.GenderDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

    });

    CLICKED('#Male',()=>{

        DECLARATION('.GenderDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.SelectGender',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,'Male');

            GENDER='male';

            STORE('','Gender','On');

        });

    });

    CLICKED('#Female',()=>{

        DECLARATION('.GenderDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.SelectGender',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,'Female');

            GENDER='female';

            STORE('','Gender','On');

        });

    });

    CLICKED('.SelectCountry',()=>{

        const COUNTRYDIVS=document.querySelector('.CountryDivs');

        CLEAR(COUNTRYDIVS);

        const COUNTRIES=[{"Name":"Uganda"},{"Name":"Congo"},{"Name":"Kenya"},{"Name":"Tanzania"},{"Name":"Rwanda"},{"Name":"Burundi"},{"Name":"South"},{"Name":"Ethiopia"}]

        DECLARATION('.CountryHolder',(ELEMENT)=>{

            STYLED(ELEMENT,'height','100%');

            STYLED(ELEMENT,'display','block');

            CLICKED('#CloseCountryDiv',()=>{

                STYLED(ELEMENT,'display','none');
    
            });

            REDUX(COUNTRIES,(data)=>{

                CREATEELEMENT('button','MenuButton',(ELEMENTS)=>{

                    DISPLAY(ELEMENTS,`

                        <p class='CountryName'>${data.Name}</p>
                        
                    `);

                    ADD(COUNTRYDIVS,ELEMENTS);

                    
                    CREATEELEMENT('hr','',(ELEMENTES)=>{

                        ADD(COUNTRYDIVS,ELEMENTES);

                    });

                    EVENT(ELEMENTS,'click',()=>{

                        DECLARATION('.SelectCountry',(ELEMENTER)=>{

                            COUNTRY=data.Name;

                            STORE('','Country','On');

                            DISPLAY(ELEMENTER,data.Name);

                            STYLED(ELEMENT,'display','none');
 
                        });

                    });

                });
            
            })

        });

    })

    CLICKED('.Open',()=>{

        MENUPAGE();

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

    });

    CLICKED('.Close',()=>{

        DECLARATION('.SideNav',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

        
        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

    });

    CLICKED('#SaveButton',()=>{

        const NIN=document.querySelector('#NIN');
        const FarmerName=document.querySelector('#FarmerName');
        const Telephone=document.querySelector('#Telephone');
        const Districit=document.querySelector('#Districit');
        const Region=document.querySelector('#Region');
        const Village=document.querySelector('#Village');
        const Tress=document.querySelector('#Trees');
        const EstimatedKgs=document.querySelector('#EstimatedKgs');
        const Establishment=document.querySelector('#Establishment');
        const Description=document.querySelector('#NIN');
        const FarmArea=document.querySelector('#FarmArea');
        
        DECLARATION('#SaveButton',(ELEMENT)=>{

            if (!NIN.value) {

                TOAST(`Enter Farmer's N.I.N`);
                return;
                
            };

            if (!FarmerName.value) {

                TOAST(`Enter Farmer's Name`);
                return;
                
            };

            if (!Telephone.value) {

                TOAST(`Enter Farmer's Telephone`);
                return;
                
            };

            if (!Districit.value) {

                TOAST(`Enter Farmer's Districit`);
                return;
                
            };

            if (!Region.value) {

                TOAST(`Enter Farmer's Region`);
                return;
                
            };

            if (!Village.value) {

                TOAST(`Enter Farmer's Village`);
                return;
                
            };

            if (!Tress.value) {

                TOAST(`Enter Number Of Farm Trees`);
                return;
                
            };

            if (!EstimatedKgs.value) {

                TOAST(`Enter EstimatedKgs`);
                return;
                
            };

            if (!Establishment.value) {

                TOAST(`Enter Year Of Establishment`);
                return;
                
            };

            if (!sessionStorage.getItem('Image')) {

                TOAST(` Add An Image`);
                return;
                
            }

            if (!sessionStorage.getItem('Country')) {

                TOAST(`Select Country`);
                return;
                
            }

            if (!sessionStorage.getItem('Gender')) {

                TOAST(`Add A Gender`);
                return;
                
            }

            if (!localStorage.getItem('NetWork')) {

                TOAST(`Check Your Internert Connection`);
                return;
                
            }

            LOADER(ELEMENT);

            DEJSON('local','UserData',(Mydata)=>{

                const USERDATA={
                    "saveFarmerRecord":"",
                    "farmerName":FarmerName.value,
                    "farmerPhone":Telephone.value,
                    "farmerCountry":COUNTRY,
                    "farmerDistrict":Districit.value,
                    "staffRegion":Region.value,
                    "staffVillage":Village.value,
                    "farmerDOB":Establishment.value,
                    "farmerGender":GENDER,
                    "farmerNIN":NIN.value,
                    "totalHarvestEstimation":EstimatedKgs.value,
                    "latitude":"",
                    "longitude":"",
                    "coffeeFarmArea":FarmArea.value,
                    "numberOfCoffeeTrees":Tress.value,
                    "oldfarmerPhoto":"",
                    "farmerInfo":Description.value,
                    "sessionCode":Mydata.sessionCode,
                    "id":Mydata.id,
                    "branchCode":Mydata.branchCode,
                    "userId":Mydata.userId,
                    "farmerPhoto":IMAGE,
                }
    
                POSTPACKAGE(NEWFARMERLINK,'',USERDATA,(response)=>{

                    if (response.status ==='success' ) {

                        DETAILSPAGE(response.farmer_Code);
                        
                    } else {

                        TOAST('Something Went Wrong');

                        HOMEPAGE();
                        
                    }
    
                });

            });

        });

    });

}

const DETAILSPAGE=(response)=>{

    DEJSON('local','UserData',(data)=>{

        GETPACKAGE(`https://demo.naweriindustries.com/mobile-endpoints/fetchFarmer-single-enpoint.php?fetchFarmersSingleData=true&farmerCodextyy098=${response}&agentCodeForBrocker=${data.userId}`,'cors',(datata)=>{

            console.log(datata);

            DISPLAY('',`
    
                <div class='ScrollDiv'>
        
                    <img class='UserImage' src='${BLACKIMAGEICON}'/>

                    <p class='Data'><b class='Data'>Name : </b>${datata.farmerName}</p>
                
                    <p class='Data'><b class='Data'>Phone : </b>${datata.farmerPhone}</p>
                
                    <p class='Data'><b class='Data'>Country : </b>${datata.farmerCountry}</p>
                
                    <p class='Data'><b class='Data'>District : </b>${datata.farmerDistrict}</p>
                
                    <p class='Data'><b class='Data'>Region : </b>${datata.staffRegion}</p>
                
                    <p class='Data'><b class='Data'>Village : </b>${datata.staffVillage}</p>
                
                    <p class='Data'><b class='Data'>Year Est : </b>${datata.farmerDOB}</p>
                
                    <p class='Data'><b class='Data'>Gender : </b>${datata.farmerGender}</p>
                
                    <p class='Data'><b class='Data'>I.D Number : </b>${datata.farmerNIN}</p>
                
                    <p class='Data'><b class='Data'>Status : </b>${datata.staffStatus}</p>
                
                    <p class='Data'><b class='Data'>Latitude : </b>${datata.latitude}</p>
                
                    <p class='Data'><b class='Data'>Longtitude : </b>${datata.longitude}</p>
                
                    <p class='Data'><b class='Data'>Farmer Area : </b>${datata.coffeeFarmArea}</p>
                
                    <p class='Data'><b class='Data'>Coffee Trees : </b>${datata.numberOfCoffeeTrees}</p>
                
                    <p class='Data'><b class='Data'>Harvest Est : </b>${datata.totalHarvestEstimation}</p>
                
                    <p class='Data'><b class='Data'>Other Info : </b>${datata.farmerInfo}</p>
                
                </div>
        
                <div class='SideNav'></div>
        
                <button class='FloatButton'>
        
                    <img class='Open' src='${WHITEMENUICON}'/>
        
                    <img class='Close' src='${WHITECLOSEICON}'/>
        
                </button>
                
            `);
        
            CLICKED('.Open',()=>{
        
                MENUPAGE();
        
                DECLARATION('.Open',(ELEMENT)=>{
        
                    STYLED(ELEMENT,'display','none');
        
                });
        
                DECLARATION('.Close',(ELEMENT)=>{
        
                    STYLED(ELEMENT,'display','inline-flex');
        
                });
        
            });
        
            CLICKED('.Close',()=>{
        
                DECLARATION('.SideNav',(ELEMENT)=>{
        
                    STYLED(ELEMENT,'display','none');
        
                });
        
                DECLARATION('.Open',(ELEMENT)=>{
        
                    STYLED(ELEMENT,'display','inline-flex');
        
                });
        
                
                DECLARATION('.Close',(ELEMENT)=>{
        
                    STYLED(ELEMENT,'display','none');
        
                });
        
            });
    
        })
    


    });

}

const ALLFARMERSPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

        <div class='AllFarmerDiv'>

            <input type='search' id='UserEmailer' class='Inputed' placeholder='Search For Farmer'  />

            <div  class='SideNav'></div>

            <div id='Records' class='ScrollDiv'></div>

            <button class='FloatButton'>

                <img class='Open' src='${WHITEMENUICON}'/>

                <img class='Close' src='${WHITECLOSEICON}'/>

            </button>
        
        </div>
  
        `);

        DECLARATION('#Records',(ELEMENT)=>{

            const UserEmail=document.querySelector('#UserEmailer');

            GETPACKAGE(`https://demo.naweriindustries.com/mobile-endpoints/fetch-all-farmers-endpoint.php?fetchFarmersSingleData=true&agentCodeForBrocker=${data.userId}`,'cors',(datata)=>{

                if (!datata.length < 0 ) {

                    DISPLAY(ELEMENT,`
                        
                        <p>No Farmer Records Added</p>

                        <button id='NewFarmer' onclick='NEWFARMERPAGE();' class='HomeButton'>

                            <div class='HomeButtonImageHolder'>

                                <img src='${WHITEPOSTICON}'/>
                                
                            </div>

                        
                            <p class='Titles'>New Farmer</p>
                        
                        </button>

                    `);
                    
                }

                CLEAR(ELEMENT);

                EVENT(UserEmail,'input',()=>{

                    if (UserEmail.value ) {

                        JSONSORTER(datata,'farmerName',UserEmail.value,(datasearched)=>{

                            CLEAR(ELEMENT);

                            REDUX(datasearched,(Element)=>{

                                CREATEELEMENT('button','HomeButtonOne',(ELEMENTES)=>{
    
                                    DISPLAY(ELEMENTES,`
            
                                        <p id='FarmerNamer' class='Titles'>${Element.farmerName} </p>
            
                                        <p id='FarmerVillager' >${Element.staffVillage} </p>
            
                                        <p id='FarmerPhone' >${Element.farmerPhone} </p>
            
                                       <div id='FarmerButtonImageHolder' class='HomeButtonImageHolder'>
            
                                            <img src='${WHITEHELPICON}'/>
                                        
                                        </div>
              
                                    `);
            
                                    ADD(ELEMENT,ELEMENTES);
            
                                    EVENT(ELEMENTES,'click',()=>{
            
                                        DETAILSPAGE(Element.farmerCode);
            
                                    });
            
                                });

                            });

                        });
                        
                    } else{

                        REDUX(datata,(Element)=>{

                            console.log(Element);
        
                            CREATEELEMENT('button','HomeButtonOne',(ELEMENTES)=>{
        
                                DISPLAY(ELEMENTES,`
        
                                    <p id='FarmerNamer' class='Titles'>${Element.farmerName} </p>
        
                                    <p id='FarmerVillager' >${Element.staffVillage} </p>
        
                                    <p id='FarmerPhone' >${Element.farmerPhone} </p>
        
                                   <div id='FarmerButtonImageHolder' class='HomeButtonImageHolder'>
        
                                        <img src='${WHITEHELPICON}'/>
                                    
                                    </div>
          
                                `);
        
                                ADD(ELEMENT,ELEMENTES);
        
                                EVENT(ELEMENTES,'click',()=>{
        
                                    DETAILSPAGE(Element.farmerCode);
        
                                });
        
                            });
        
                        });

                    }
 
                });

                REDUX(datata,(Element)=>{

                    console.log(Element);

                    CREATEELEMENT('button','HomeButtonOne',(ELEMENTES)=>{

                        DISPLAY(ELEMENTES,`

                            <p id='FarmerNamer' class='Titles'>${Element.farmerName} </p>

                            <p id='FarmerVillager' >${Element.staffVillage} </p>

                            <p id='FarmerPhone' >${Element.farmerPhone} </p>

                           <div id='FarmerButtonImageHolder' class='HomeButtonImageHolder'>

                                <img src='${WHITEHELPICON}'/>
                            
                            </div>
  
                        `);

                        ADD(ELEMENT,ELEMENTES);

                        EVENT(ELEMENTES,'click',()=>{

                            DETAILSPAGE(Element.farmerCode);

                        });

                    });

                });

            });

        });

    });

    CLICKED('.Open',()=>{

        MENUPAGE();

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

    });

    CLICKED('.Close',()=>{

        DECLARATION('.SideNav',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

        DECLARATION('.Open',(ELEMENT)=>{

            STYLED(ELEMENT,'display','inline-flex');

        });

        
        DECLARATION('.Close',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none');

        });

    });

}