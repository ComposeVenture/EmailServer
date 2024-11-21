const CLOUDDATADOWNLOADER=()=>{

    DATABASESAVER(DATABASECONNECTION,BASENAME,'MovieLander','MovieLander',(data)=>{

        if (data === true) {

            HIDER(2000,()=>{

                DESKTOPHOMEPAGE();

            });

        }else{

            DATABASEUPDATER(DATABASECONNECTION,BASENAME,'MovieLander','MovieLander');

        };

    });

}