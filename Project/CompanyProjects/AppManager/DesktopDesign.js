const DESKTOPHOMEPAGE=()=>{

    DELETESTORAGE('','ProjectImage');

    DISPLAY('',`

        <div class='Holder' >

            <h2>App Manager</h2>

            <button onclick='DESKTOPNEWPROJECT()' class='PremiumButton'>

                <p class='Package'>New Project</p>

                <img class='Imagers' src='${WHITEPOSTICON}'/>
                        
            </button>

            <button onclick='DESKTOPHOMEPAGE()' class='PremiumButton'>

                <p class='Package'>My Projects</p>

                <img class='Imagers' src='${WHITELIBRARYICON}'/>
                        
            </button>

            <button onclick='DESKTOPDELETEDPROJECTS()' class='PremiumButton'>

                <p class='Package'>Deleted Projects</p>

                <img class='Imagers' src='${WHITEDELETEICON}'/>
                        
            </button>
  
            <button onclick='RELOADPAGE()' class='PremiumButton'>

                <p class='Package'>Sync Manager</p>

                <img class='Imagers' src='${WHITRETRYICON}'/>
                        
            </button>
        
        </div>

        <div class='ProjectHolder'></div>
        
    `);

    DESKTOPPROJECTHANDLER();

}

const DESKTOPNEWPROJECT=()=>{

    DELETESTORAGE('','ProjectImage');

    DECLARATION(".ProjectHolder",(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <img id='ProjectImage' src='${BLACKIMAGEICON}'/>

            <input type='text' class='Input' id='ProjectName' placeholder='Enter Project Name' />

            <input type='text' class='Input' id='ProjectVersion'  placeholder='Project Version' />

            <textarea class='TextArea' id='ProjectDetails' placeholder='About Project'></textarea>

            <textarea class='TextArea' id='ProjectConfiguration' placeholder='Project Configuration'></textarea>

            <p>App Design Servers</p>

            <textarea class='TextArea' id='FunctionServerOne' placeholder='Android Design Server'></textarea>

            <textarea class='TextArea' id='FunctionServerTwo' placeholder='Desktop Design Server'></textarea>

            <textarea class='TextArea' id='FunctionServerThree' placeholder='Web Design Server' ></textarea>

            <p>App Function Servers</p>

            <textarea class='TextArea' id='FunctionServerFour' placeholder='Android Function Server '></textarea>

            <textarea class='TextArea' id='FunctionServerFive' placeholder='Desktop Function Server ' ></textarea>

            <textarea class='TextArea' id='FunctionServerSix' placeholder='Web Function Server'></textarea>

            <p>Components Function Servers</p>

            <textarea class='TextArea' id='FunctionServerEight' placeholder='Logic Project Server' ></textarea>

            <textarea class='TextArea' id='FunctionServerNine' placeholder='Constant Project Server'></textarea>

            <textarea class='TextArea' id='FunctionServerSeven' placeholder='Shared Function Server'></textarea>

            <textarea class='TextArea' id='FunctionServerTen' placeholder='General Data  Server'></textarea>

            <p>Emergency App Servers</p>

            <textarea class='TextArea' id='FunctionServerEleven' placeholder='Other Data Types Server One ' ></textarea>

            <textarea class='TextArea' id='FunctionServerTwelve' placeholder='Other Data Types Server Two ' ></textarea>

            <p>App Style Design Server</p>

            <textarea class='TextArea' id='StyleServerOne' placeholder='Android  Style Server' ></textarea>

            <textarea class='TextArea' id='StyleServerTwo' placeholder='Desktop  Style Server'></textarea>

            <textarea class='TextArea' id='StyleServerThree' placeholder='Web  Style Server'></textarea>

            <textarea class='TextArea' id='StyleServerFour' placeholder='Shared  Style Server '></textarea>

            <p>Emergency App Style Server</p>

            <textarea class='TextArea' id='StyleServerFive' placeholder='Project Other Style Server One ' ></textarea>

            <textarea class='TextArea' id='StyleServerSix' placeholder='Project Other Style Server Two '></textarea>
            
            <button id='CreateProjectButton' class='PremiumButton'>

                <p class='Package'>Create Project</p>

                <img class='Imagers' src='${WHITECHECKICON}'/>
                        
            </button>

            <button onclick='HOMEPAGE()' class='PremiumButton'>

                <p class='Package'>Cancel Project</p>

                <img class='Imagers' src='${WHITECLOSEICON}'/>
                        
            </button>

        `);

        const ProjectName=document.querySelector("#ProjectName");
        const ProjectVersion=document.querySelector("#ProjectVersion");
        const ProjectDetails=document.querySelector("#ProjectDetails");
        const ProjectConfiguration=document.querySelector("#ProjectConfiguration");
        const FunctionServerOne=document.querySelector("#FunctionServerOne");
        const FunctionServerTwo=document.querySelector("#FunctionServerTwo");
        const FunctionServerThree=document.querySelector("#FunctionServerThree");
        const FunctionServerFour=document.querySelector("#FunctionServerFour");
        const FunctionServerFive=document.querySelector("#FunctionServerFive");
        const FunctionServerSix=document.querySelector("#FunctionServerSix");
        const FunctionServerSeven=document.querySelector("#FunctionServerSeven");
        const FunctionServerEight=document.querySelector("#FunctionServerEight");
        const FunctionServerNine=document.querySelector("#FunctionServerNine");
        const FunctionServerTen=document.querySelector("#FunctionServerTen");
        const FunctionServerEleven=document.querySelector("#FunctionServerEleven");
        const FunctionServerTwelve=document.querySelector("#FunctionServerTwelve");
        const StyleServerOne=document.querySelector("#StyleServerOne");
        const StyleServerTwo=document.querySelector("#StyleServerTwo");
        const StyleServerThree=document.querySelector("#StyleServerThree");
        const StyleServerFour=document.querySelector("#StyleServerFour");
        const StyleServerFive=document.querySelector("#StyleServerFive");
        const StyleServerSix=document.querySelector("#StyleServerSix");

        CLICKED("#ProjectImage",()=>{
            IMAGEPICKER('#ProjectImage',(data)=>{
                STORE('','ProjectImage',data);
            });
        })

        DECLARATION('#CreateProjectButton', (ELEMENTS) => {

            CLICKED('#CreateProjectButton', () => {
        
                if (!sessionStorage.getItem('ProjectImage')) {
                    MESSAGE('Add Image To Project');
                    return;
                }
        
                if (!ProjectName.value) {
                    MESSAGE('Enter Project Name');
                    return;
                }
        
                if (!ProjectVersion.value) {
                    MESSAGE('Enter Project Version');
                    return;
                }
                
                if (!ProjectDetails.value) {
                    MESSAGE('Enter Project Details');
                    return;
                }
        
                if (!ProjectConfiguration.value) {
                    MESSAGE('Enter Project Configurations');
                    return;
                }
        
                const functionServers = [
                    FunctionServerOne.value,
                    FunctionServerTwo.value,
                    FunctionServerThree.value,
                    FunctionServerFour.value,
                    FunctionServerFive.value,
                    FunctionServerSix.value,
                    FunctionServerSeven.value,
                    FunctionServerEight.value,
                    FunctionServerNine.value,
                    FunctionServerTen.value,
                    FunctionServerEleven.value,
                    FunctionServerTwelve.value
                ];
        
                if (!functionServers.some(server => server)) {
                    MESSAGE('At least one Function Server must be filled');
                    return;
                }
        
                const styleServers = [
                    StyleServerOne.value,
                    StyleServerTwo.value,
                    StyleServerThree.value,
                    StyleServerFour.value,
                    StyleServerFive.value,
                    StyleServerSix.value
                ];
        
                if (!styleServers.some(server => server)) {
                    MESSAGE('At least one Style Server must be filled');
                    return;
                }

                if (localStorage.getItem('NetWork')) {

                    LOADER(ELEMENTS);

                    const HEADERS=['ProjectName','Functions','FunctionsOne','FunctionTwo','FunctionThree','FunctionFour','FunctionFive','Styles','StylesOne','StylesTwo','StylesThree','StylesFour','StylesFive','Jsoni','JsonOne','JsonTwo','JsonThree','JsonFour','JsonFive','AppCredits','AppVersion','AppJson','AppDetails','AppIcons','CreatedOn']

                    const DATA=[ProjectName.value,FunctionServerOne.value,FunctionServerTwo.value,FunctionServerThree.value,FunctionServerFour.value,FunctionServerFive.value,FunctionServerSix.value,FunctionServerSeven.value,StyleServerOne.value,StyleServerTwo.value,StyleServerThree.value,StyleServerFour.value,StyleServerFive.value,StyleServerSix.value,FunctionServerEight.value,FunctionServerNine.value,FunctionServerTen.value,FunctionServerEleven.value,FunctionServerTwelve.value,'',ProjectVersion.value,ProjectConfiguration.value,ProjectDetails.value,sessionStorage.getItem('ProjectImage'),new Date()]

                    INSERTDATA(DATABASECONNECTION,BASENAME,HEADERS,DATA,(resback)=>{

                        DATABASESAVER(DATABASECONNECTION,BASENAME,'AppManager','AppManager',(data)=>{

                            if (data === true) {
                               
                                HIDER(3000,()=>{

                                    DESKTOPHOMEPAGE();

                                });

                                
                            }else{
                
                                DATABASEUPDATER(DATABASECONNECTION,BASENAME,'AppManager','AppManager');

                                HIDER(3000,()=>{

                                    DESKTOPHOMEPAGE();

                                });

                            };
                
                        });

                    });
                    
                } else {
                    
                    MESSAGE('Cannot Create Project ,Check Your Internet Connection');

                };
        
            });
        
        });
        

    });

}

const DESKTOPPROJECTHANDLER=()=>{

    DELETESTORAGE('','ProjectImage');

    DECLARATION(".ProjectHolder",(ELEMENT)=>{

        LOADER(ELEMENT,'HomeLoader');

        CLEAR(ELEMENT);

        DATAGETTER("AppManager",'AppManager',(data)=>{

            CREATEELEMENT("div",'ProjectHandlerDiv',(ELEMENTS)=>{

                DISPLAY(ELEMENTS,`

                    <img class='ProjectImage' src='${data.AppIcons||BLACKIMAGEICON}'/>
                    
                    <h1 class='ProjectName'>${data.ProjectName}</h1>

                `);

                if (data.AppCredits) {

                    STYLED(ELEMENTS,'display','none');
                    
                }

                ADD(ELEMENT,ELEMENTS);

                EVENT(ELEMENTS,'click',()=>{

                    DISPLAY(ELEMENT,`

                        <header>

                            <img onclick='DESKTOPPROJECTHANDLER()' class='BackIcon' src='${WHITEBACKICON}'/>

                            <p class='RightText'>${data.ProjectName}</p>
                        
                        </header>

                        <div class='DivHolders' >

                            <img id='ProjectImage' src='${data.AppIcons||BLACKIMAGEICON}'/>

                            <input type='text' class='Input' id='ProjectName' placeholder='${data.ProjectName||'Enter Project Name' } ' />

                            <input type='text' class='Input' id='ProjectVersion'  placeholder='${data.AppVersion ||'Enter Project Version' }' />

                            <textarea class='TextArea' id='ProjectDetails' placeholder='${data.AppDetails ||'Enter Project Details' }'></textarea>

                            <textarea class='TextArea' id='ProjectConfiguration' placeholder='${data.AppJson ||'Enter Project Configuration' }'></textarea>
            
                            <p>App Design Servers</p>

                            <textarea class='TextArea' id='FunctionServerOne' placeholder='Android Design Server'></textarea>

                            <textarea class='TextArea' id='FunctionServerTwo' placeholder='Desktop Design Server'></textarea>

                            <textarea class='TextArea' id='FunctionServerThree' placeholder='Web Design Server' ></textarea>

                            <p>App Function Servers</p>

                            <textarea class='TextArea' id='FunctionServerFour' placeholder='Android Function Server '></textarea>

                            <textarea class='TextArea' id='FunctionServerFive' placeholder='Desktop Function Server ' ></textarea>

                            <textarea class='TextArea' id='FunctionServerSix' placeholder='Web Function Server'></textarea>

                            <p>Components Function Servers</p>

                            <textarea class='TextArea' id='FunctionServerEight' placeholder='Logic Project Server' ></textarea>

                            <textarea class='TextArea' id='FunctionServerNine' placeholder='Constant Project Server'></textarea>

                            <textarea class='TextArea' id='FunctionServerSeven' placeholder='Shared Function Server'></textarea>

                            <textarea class='TextArea' id='FunctionServerTen' placeholder='General Data  Server'></textarea>

                            <p>Emergency App Servers</p>

                            <textarea class='TextArea' id='FunctionServerEleven' placeholder='Other Data Types Server One ' ></textarea>

                            <textarea class='TextArea' id='FunctionServerTwelve' placeholder='Other Data Types Server Two ' ></textarea>

                            <p>App Style Design Server</p>

                            <textarea class='TextArea' id='StyleServerOne' placeholder='Android  Style Server' ></textarea>

                            <textarea class='TextArea' id='StyleServerTwo' placeholder='Desktop  Style Server'></textarea>

                            <textarea class='TextArea' id='StyleServerThree' placeholder='Web  Style Server'></textarea>

                            <textarea class='TextArea' id='StyleServerFour' placeholder='Shared  Style Server '></textarea>

                            <p>Emergency App Style Server</p>

                            <textarea class='TextArea' id='StyleServerFive' placeholder='Project Other Style Server One ' ></textarea>

                            <textarea class='TextArea' id='StyleServerSix' placeholder='Project Other Style Server Two '></textarea>

                            <button id='UpdateProjectButton' class='PremiumButton'>

                                <p class='Package'>Update Project</p>

                                <img class='Imagers' src='${WHITEMOBILEDEVELOPMENTICON}'/>
                                        
                            </button>

                            <button id='DeleteProject' class='PremiumButton'>

                                <p class='Package'>Delete Project</p>

                                <img class='Imagers' src='${WHITEDELETEICON}'/>
                                        
                            </button>
                        
                        </div>
                        
                    `);

                    CLICKED('#DeleteProject',()=>{

                        if (localStorage.getItem('NetWork')) {

                            DECLARATION('#DeleteProject',(ELEL)=>{

                                LOADER(ELEL);

                                const HEADERS=[data.ProjectName,data.Functions,data.FunctionsOne,data.FunctionTwo,data.FunctionThree,data.FunctionFour,data.FunctionFive,data.Styles,data.StylesOne,data.StylesTwo,data.StylesThree,data.StylesFour,data.StylesFive,data.Jsoni,data.JsonOne,data.JsonTwo,data.JsonThree,data.JsonFour,data.JsonFive,'TRUE',data.AppVersion,data.AppJson,data.AppDetails,data.AppIcons,data.CreatedOn];

                                UPDATEDATA(DATABASECONNECTION,BASENAME,data.ID,HEADERS,(resback)=>{
           
                                   DATABASESAVER(DATABASECONNECTION,BASENAME,'AppManager','AppManager',(data)=>{
           
                                       if (data === true) {
                                          
                                            HIDER(5000,()=>{
            
                                                DESKTOPHOMEPAGE();
            
                                            });
            
                                        }else{
                           
                                           DATABASEUPDATER(DATABASECONNECTION,BASENAME,'AppManager','AppManager');
           
                                            HIDER(5000,()=>{
            
                                                DESKTOPHOMEPAGE();
            
                                            });
           
                                       };
                           
                                   });
           
                               });

                            });
                            
                        } else {
                            
                            MESSAGE('Cannot Delete Project ,Check Your Internet Connection');

                        };
 
                    });

                    CLICKED("#ProjectImage",()=>{
                        IMAGEPICKER('#ProjectImage',(data)=>{
                            STORE('','ProjectImage',data);
                        });
                    })

                    CLICKED('#UpdateProjectButton', () => {

                        const ProjectName = document.querySelector("#ProjectName");
                        const ProjectVersion = document.querySelector("#ProjectVersion");
                        const ProjectDetails = document.querySelector("#ProjectDetails");
                        const ProjectConfiguration = document.querySelector("#ProjectConfiguration");
                        const FunctionServerOne = document.querySelector("#FunctionServerOne");
                        const FunctionServerTwo = document.querySelector("#FunctionServerTwo");
                        const FunctionServerThree = document.querySelector("#FunctionServerThree");
                        const FunctionServerFour = document.querySelector("#FunctionServerFour");
                        const FunctionServerFive = document.querySelector("#FunctionServerFive");
                        const FunctionServerSix = document.querySelector("#FunctionServerSix");
                        const FunctionServerSeven = document.querySelector("#FunctionServerSeven");
                        const FunctionServerEight = document.querySelector("#FunctionServerEight");
                        const FunctionServerNine = document.querySelector("#FunctionServerNine");
                        const FunctionServerTen = document.querySelector("#FunctionServerTen");
                        const FunctionServerEleven = document.querySelector("#FunctionServerEleven");
                        const FunctionServerTwelve = document.querySelector("#FunctionServerTwelve");
                        const StyleServerOne = document.querySelector("#StyleServerOne");
                        const StyleServerTwo = document.querySelector("#StyleServerTwo");
                        const StyleServerThree = document.querySelector("#StyleServerThree");
                        const StyleServerFour = document.querySelector("#StyleServerFour");
                        const StyleServerFive = document.querySelector("#StyleServerFive");
                        const StyleServerSix = document.querySelector("#StyleServerSix");
                    
                        if (!sessionStorage.getItem('ProjectImage')&&!ProjectName.value && !ProjectVersion.value && !ProjectDetails.value &&
                            !FunctionServerOne.value && !FunctionServerTwo.value && !FunctionServerThree.value &&
                            !FunctionServerFour.value && !FunctionServerFive.value && !FunctionServerSix.value &&
                            !FunctionServerSeven.value && !FunctionServerEight.value && !FunctionServerNine.value &&
                            !FunctionServerTen.value && !FunctionServerEleven.value && !FunctionServerTwelve.value &&
                            !StyleServerOne.value && !StyleServerTwo.value && !StyleServerThree.value &&
                            !StyleServerFour.value && !StyleServerFive.value && !StyleServerSix.value) {
                    
                            MESSAGE('No new updates to apply.');

                            return; 
                        }
                    
                        if (localStorage.getItem('NetWork')) {
                    
                            DECLARATION('#UpdateProjectButton', (ELEL) => {
                    
                                LOADER(ELEL);
                    
                                const HEADERS = [
                                    ProjectName.value || data.ProjectName,
                                    FunctionServerOne.value || data.Functions,
                                    FunctionServerTwo.value || data.FunctionsOne,
                                    FunctionServerThree.value || data.FunctionTwo,
                                    FunctionServerFour.value || data.FunctionThree,
                                    FunctionServerFive.value || data.FunctionFour,
                                    FunctionServerSix.value || data.FunctionFive,
                                    StyleServerOne.value || data.Styles,
                                    StyleServerTwo.value || data.StylesOne,
                                    StyleServerThree.value || data.StylesTwo,
                                    StyleServerFour.value || data.StylesThree,
                                    StyleServerFive.value || data.StylesFour,
                                    StyleServerSix.value || data.StylesFive,
                                    FunctionServerSeven.value || data.Jsoni,
                                    FunctionServerEight.value || data.JsonOne,
                                    FunctionServerNine.value || data.JsonTwo,
                                    FunctionServerTen.value || data.JsonThree,
                                    FunctionServerEleven.value || data.JsonFour,
                                    FunctionServerTwelve.value || data.JsonFive,
                                    '', 
                                    ProjectVersion.value || data.AppVersion,
                                    ProjectConfiguration.value || data.AppJson,
                                    ProjectDetails.value || data.AppDetails,
                                    sessionStorage.getItem('ProjectImage') || data.AppIcons,
                                    data.CreatedOn
                                ];
                    
                                UPDATEDATA(DATABASECONNECTION, BASENAME, data.ID, HEADERS, (resback) => {
                                    DATABASESAVER(DATABASECONNECTION, BASENAME, 'AppManager', 'AppManager', (data) => {
                                        if (data === true) {
                                            HIDER(5000, () => {
                                                DESKTOPHOMEPAGE();
                                            });
                                        } else {
                                            DATABASEUPDATER(DATABASECONNECTION, BASENAME, 'AppManager', 'AppManager');
                                            HIDER(5000, () => {
                                                DESKTOPHOMEPAGE();
                                            });
                                        }
                                    });
                                });
                            });
                    
                        } else {
                            MESSAGE('Cannot Update Project, Check Your Internet Connection');
                        }
                    });
                    

                });

            });

        });

    });

}

const DESKTOPDELETEDPROJECTS=()=>{

    DELETESTORAGE('','ProjectImage');

    DECLARATION(".ProjectHolder",(ELEMENT)=>{

        LOADER(ELEMENT,'HomeLoader');

        CLEAR(ELEMENT);

        DATAGETTER("AppManager",'AppManager',(data)=>{

            CREATEELEMENT("div",'ProjectHandlerDiv',(ELEMENTS)=>{

                DISPLAY(ELEMENTS,`

                    <img class='ProjectImage' src='${data.AppIcons||BLACKIMAGEICON}'/>
                    
                    <h1 class='ProjectName'>${data.ProjectName}</h1>

                `);

                if (!data.AppCredits) {

                    STYLED(ELEMENTS,'display','none');
                }

                if (data.ProjectName === 'None' ) {

                    STYLED(ELEMENTS,'display','none');
                }

                ADD(ELEMENT,ELEMENTS);

                EVENT(ELEMENTS,'click',()=>{

                    if (localStorage.getItem('NetWork')) {

                        colorChange(ELEMENTS);

                        MESSAGE(`${data.ProjectName} is being Restored , Please be Patient`);
                        
                        const HEADERS=[data.ProjectName,data.Functions,data.FunctionsOne,data.FunctionTwo,data.FunctionThree,data.FunctionFour,data.FunctionFive,data.Styles,data.StylesOne,data.StylesTwo,data.StylesThree,data.StylesFour,data.StylesFive,data.Jsoni,data.JsonOne,data.JsonTwo,data.JsonThree,data.JsonFour,data.JsonFive,'',data.AppVersion,data.AppJson,data.AppDetails,data.AppIcons,data.CreatedOn];

                        UPDATEDATA(DATABASECONNECTION,BASENAME,data.ID,HEADERS,(resback)=>{
   
                           DATABASESAVER(DATABASECONNECTION,BASENAME,'AppManager','AppManager',(data)=>{
   
                               if (data === true) {
                                  
                                    HIDER(5000,()=>{
    
                                        DESKTOPHOMEPAGE();
    
                                    });
    
                                }else{
                   
                                   DATABASEUPDATER(DATABASECONNECTION,BASENAME,'AppManager','AppManager');
   
                                    HIDER(5000,()=>{
    
                                        DESKTOPHOMEPAGE();
    
                                    });
   
                               };
                   
                           });
   
                       });


                    }else{

                        MESSAGE('Cannot Restore Project, Check Your Internet Connection');

                    }

                });
 
            });

        });

    });

}