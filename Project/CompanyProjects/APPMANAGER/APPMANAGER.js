const SHEETURLI='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0';

const SHEETNAME1='AppManager';

const AUTORUN=()=>{
  
    HOMEPAGE();

    DATADON('AppManager');
  
}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <button id='NewProject' class='forestgreen'>NEW PROJECT</button>

        <button id='AllProject' class='forestgreen'  >MY PROJECTS</button>

        <button class='forestgreen'>SETTINGS</button>
        
    `);

    CLICKED('#NewProject',()=>{

        NEWPROJECT();

    });

    CLICKED('#AllProject',()=>{

        ALLPROJECTS();

    });
    
}

const NEWPROJECT=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <h1>CREATE NEW PROJECT</h1>

            <input type='text' id='ProjectName' placeholder='Project Name' />

            <textarea id='ProjectJs' placeholder='Enter Project Javascript Code' ></textarea>

            <textarea id='ProjectCss'  placeholder='Enter Project Javascript Code' ></textarea>

            <button class='forestgreen'>CREATE PROJECT</button>

            <button class='blue' onclick='HOMEPAGE()' >CANCEL</button>
        
        </div>

    `);

    DECLARATION('.forestgreen',(ELEMENT)=>{

        const ProjectName=document.querySelector('#ProjectName');

        const ProjectJs=document.querySelector('#ProjectJs');

        const ProjectCss=document.querySelector('#ProjectCss');

        EVENT(ELEMENT,'click',()=>{

            if (!ProjectName.value) {

                TOAST('Enter Project Name');
    
                return;
                
            };
    
            if (!ProjectJs.value) {
    
                TOAST('Enter Project Javascript');
    
                return;
                
            };
    
            if (!ProjectCss.value) {
    
                TOAST('Enter Project Styles');
    
                return;
                
            };

            LOADER(ELEMENT);

            const HEADER=['ProjectName','Functions','Styles','CreatedOn'];

            const DATA=[ProjectName.value,ProjectJs.value,ProjectCss.value,new Date()];

            INSERTDATA(SHEETURLI,SHEETNAME1,HEADER,DATA,(data)=>{

                HOMEPAGE();

                return;

            })
    

        });
    
    });

}

const DATADON=(NAME)=>{

    GETDATA(SHEETURLI,SHEETNAME1,(data)=>{

        const DATA={
            "Name":"AppManager",
            "Data":data
        }

        REDUX(data,(element)=>{

            if (element.ProjectName === 'PaymentAndroidSDK' ) {

                STORE('local','Payments',element.Functions);
                
            };

            if(element.ProjectName === NAME){

                STORE('local','Functions',element.Functions);

                STORE('local','Styles',element.Styles);

            }

            STOREINDEXED('AppManager','AppManager',DATA,(datata)=>{

                if (datata === true ) {

                    HOMEPAGE();

                    STORE('local','DataUpdated','On');

                    return;
                    
                }

                if (datata === false && localStorage.getItem('DataUpdated') ) {

                    UPDATEINDEXED('AppManager','AppManager',DATA);

                    STORE('local','DataUpdated','On');

                    return;
                    
                } else {

                    AUTORUN();

                    return;
                    
                }

            });
            
        });

    });

}

const ALLPROJECTS=()=>{

    DISPLAY('',`

        <header>

            <img class='BackIcon' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
        
            <h1 class='Header'>ALL PROJECTS</h1>

        </header>

        <div class='ProjectDiv'></div>
        
    `);

    DECLARATION('.ProjectDiv',(ELEMENT)=>{

        LOADER(ELEMENT,'HomeLoader');

        GETINDEXED('AppManager','AppManager',(data)=>{

            CLEAR(ELEMENT);

            REDUX(data,(element)=>{

                REDUX(element.Data.reverse(),(elemente)=>{

                    CREATEELEMENT('div','TableHolder',(ELEMENTED)=>{

                        DISPLAY(ELEMENTED,`

                            <h1 class='NameApp'>${elemente.ProjectName}</h1>
                            
                        `);

                        CREATEELEMENT('img','Images1',(IM)=>{

                            IM.src=WHITEPENCILICON

                            ADD(ELEMENTED,IM);
  
                            EVENT(IM,'click',()=>{

                                JSONIFICATION(elemente,(dt)=>{

                                    STORE('','MyData',dt);
                                    
                                    UPDATECODEPAGE();

                                });

                            });

                        });

                        CREATEELEMENT('img','Images',(EIM)=>{

                            EIM.src=WHITEGRIDICON

                            ADD(ELEMENTED,EIM);

                            EVENT(EIM,'click',()=>{

                                JSONIFICATION(elemente,(dt)=>{

                                    STORE('','MyData',dt);
                                    
                                    VIEWCODEPAGE();

                                });
                        
                            });

                        });

                        ADD(ELEMENT,ELEMENTED);

                    });

                });

            });

        });

    });

}

const UPDATECODEPAGE=()=>{

    DEJSON('','MyData',(Data)=>{

        console.log(Data);

        DISPLAY('',`

            <div class='ProjectDvS'>
    
                <textarea id='JavascriptCoder' placeholder='Enter  App Functions code' ></textarea>
    
                <textarea id='StylesCoder' placeholder='Enter App Styles code'  ></textarea>
    
                <button class='forestgreen'>UPDATE PROJECT</button>

                <button class='blue' onclick='ALLPROJECTS()' >CANCEL</button>
            
            </div>
            
        `);

        CLICKED('.forestgreen',()=>{

            const JavascriptCoder=document.querySelector('#JavascriptCoder');
            const StylesCoder=document.querySelector('#StylesCoder');

            if (!JavascriptCoder.value) {

                TOAST('Enter Function Code');

                return;
                
            };

            if (!StylesCoder.value) {

                TOAST('Enter Style Code');

                return;
                
            };

            DECLARATION('.forestgreen',(ELEMENT)=>{

                LOADER(ELEMENT);

                const DATA=[Data.ProjectName,JavascriptCoder.value,StylesCoder.value,Data.AppIcons,new Date()]

                UPDATEDATA(SHEETURLI,SHEETNAME1,Data.ID,DATA,(data)=>{

                    console.log(data)

                    HOMEPAGE();

                    return;

                });

            });

        });

    });

};

const VIEWCODEPAGE=()=>{

    DEJSON('','MyData',(Data)=>{

        console.log(Data.Functions);

        DISPLAY('',`

            <div class='ProjectDvS'>
    
                <textarea  placeholder='Enter  App Functions code' ></textarea>
    
                <textarea  placeholder='Enter App Styles code'  ></textarea>
    
                <button class='blue' onclick='ALLPROJECTS()' >CANCEL</button>
            
            </div>
            
        `);

    });


};