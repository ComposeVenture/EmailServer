const SHEETURL='https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0';

const SHEETNAME='AppManager';

const AUTORUN=()=>{
  
    HOMEPAGE();

    DATADON('MovieLander');
  
}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <button id='NewProject' class='forestgreen'>NEW PROJECT</button>

        <button class='forestgreen'>MY PROJECTS</button>

        <button class='forestgreen'>SETTINGS</button>
        
    `);

    CLICKED('#NewProject',()=>{

        NEWPROJECT();

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

            INSERTDATA(SHEETURL,SHEETNAME,HEADER,DATA,(data)=>{

                HOMEPAGE();

                return;

            })
    

        });
    
    });

}

const DATADON=(NAME)=>{

    GETDATA(SHEETURL,SHEETNAME,(data)=>{

        REDUX(data,(element)=>{

            console.log(element)

            if (element.ProjectName === 'PaymentAndroidSDK' ) {

                STORE('local','Payments',element.Functions);
                
            };

            if(element.ProjectName === NAME){

                STORE('local','Functions',element.Functions);

                STORE('local','Styles',element.Styles);

            }

        });

    });

}