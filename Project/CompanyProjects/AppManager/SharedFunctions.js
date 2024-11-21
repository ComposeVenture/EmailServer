const CLOUDDATADOWNLOADER=()=>{

    if (localStorage.getItem("NetWork")) {

        DATABASESAVER(DATABASECONNECTION,BASENAME,'AppManager','AppManager',(data)=>{

            if (data === true) {
    
                HIDER(2000,()=>{
    
                    DESKTOPHOMEPAGE();
    
                });
    
            }else{
    
                DATABASEUPDATER(DATABASECONNECTION,BASENAME,'AppManager','AppManager');
    
            };
    
        });
        
    };

}