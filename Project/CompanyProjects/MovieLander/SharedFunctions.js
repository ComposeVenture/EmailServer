const CLOUDDATADOWNLOADER=()=>{

    if (localStorage.getItem("NetWork")) {

        DATABASESAVER(DATABASECONNECTION,BASENAME,BASENAME,BASENAME,(data)=>{

            if (data === true) {
    
    
            }else{
    
                DATABASEUPDATER(DATABASECONNECTION,POLICIES,POLICIES,POLICIES);
    
            };
    
        });

        DATABASESAVER(DATABASECONNECTION,POLICIES,POLICIES,POLICIES,(data)=>{

            if (data === true) {
    
            }else{
    
                DATABASEUPDATER(DATABASECONNECTION,POLICIES,POLICIES,POLICIES);
    
            };
    
        });

        DATABASESAVER(DATABASECONNECTION,CATERGORY,CATERGORY,CATERGORY,(data)=>{

            if (data === true) {
    
            }else{
    
                DATABASEUPDATER(DATABASECONNECTION,CATERGORY,CATERGORY,CATERGORY);
    
            };
    
        });
        
    };

};

const MYACCOUNT=(Email,callback)=>{

    GETDATA(DATABASECONNECTION,'Users',(data)=>{

        FINDER(data,'UserEmail',Email,(user)=>{

            if (user.UserEmail === Email ) {

                callback(user);
                
            } else {
                
                callback(false);

            };

        });

    });

};

const NEWDATAINSERTATION=(DATA,callback)=>{

    INSERTDATA(DATABASECONNECTION,'Users',MOVIELANDERUSERSHEADERS,DATA,(data)=>{

        callback(data);

    });

};

const CURRENTUSERDATAUPDATING=(DATA,callback)=>{

    DEJSON('local','UserData',(local)=>{

        UPDATEDATA(DATABASECONNECTION,'Users',local.ID,DATA,(data)=>{

            callback(data);

        });

    });

};

const POLICIESGETTER=(callback)=>{

    DATAGETTER(POLICIES,POLICIES,(data)=>{

        callback(data);

    });

};

const ACCOUNTCHECKER=()=>{

    DEJSON('local','UserData',(data)=>{

        if (localStorage.getItem('NetWork')) {

            MYACCOUNT(data.UserEmail,(res)=>{
    
                 if (!res.UserCode) {
    
                    DELETESTORAGE('local','UserData');
    
                    RELOADPAGE();
                      
                 }else{
    
                    if (res.ParentalControlPin) {
    
                        STORE('local','ParentalControl',true);
                           
                    } else {
    
                        DELETESTORAGE('local','ParentalControl');
                           
                    };
    
                    JSONIFICATION(res,(info)=>{
    
                        STORE('local','UserData',info);
    
                        if (!res.PremiumAccount) {
    
                            ANDROIDPAYMENTPAGE();
                                
                        } 
    
                    });
    
                 };
    
            });
            
       };

    });

};