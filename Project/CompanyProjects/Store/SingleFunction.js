const HOMEPAGEDESIGN=()=>{

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER("Store",'Apps',(data)=>{

            CREATEELEMENT('div','LatestApps',(ELEMENTS)=>{

                DISPLAY(ELEMENTS,`

                    <img class='AppImage' src='${data.AppImage}'/>

                    <p class='AppNamei'>${data.AppName}</p>

                `);

                ADD(ELEMENT,ELEMENTS);

                CREATEELEMENT('button','InstallButton',(BUTONS)=>{

                    DISPLAY(BUTONS,'Install');

                    ADD(ELEMENTS,BUTONS);

                    EVENT(BUTONS,'click',()=>{

                        WEBSITE(data.AppLink);

                    });

                });

                CREATEELEMENT('button','DetailsButton',(BUTONS)=>{

                    DISPLAY(BUTONS,'Details');

                    ADD(ELEMENTS,BUTONS);

                    EVENT(BUTONS,'click',()=>{

                        APPDETAILSPAGE(data);
                        
                    });

                });

                if (data.ID === 'AppStore01') {

                    STYLED(ELEMENTS,'display','none')
                    
                }

            });


        });

    });

};