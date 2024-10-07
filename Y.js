const DATABASELINK='https://docs.google.com/spreadsheets/d/1CaI9zBx3hOjwggAsTBZygUpe7zp7Cv1mUXJnDuqh2kk/edit';

const AUTORUN=()=>{

    if (localStorage.getItem('UserData')) {

        HOMEPAGE();
 
    }else{

        LOGINPAGE();

    }

    if (localStorage.getItem('NetWork')) {

        UPDATEAPPDATA('WinkstaUploader');

        return;

    }

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <img class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>

        <h1>Admin Panel</h1>

        <button class='forestgreen' onclick='CREATEPRODUCTPAGE()' >Create New Product</button>

        <button class='forestgreen'>All Product</button>
        
    `);

};

const CREATEPRODUCTPAGE=()=>{

    CLEARSTORAGE('')

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='BackIcon' id='NewBack' onclick='HOMEPAGE()' src='${WHITEBACKICON}'/>
    
            <h1>Winksta Remote</h1>

            <p>Create New Product</p>

            <img id='MainImage' class='MainImage' src='${BLACKIMAGEICON}' />

            <input type='text' id='ProductName' class='Input' placeholder='Enter Product Name' />

            <input type='tel' id='ProductPrice' class='Input' placeholder='Enter Product Price' />

            <input type='tel' id='ProductQuantity' class='Input' placeholder='Enter Product Quntity' />

            <input type='text' id='ProductCatergory' class='Input' placeholder='Enter Product Catergory' />

            <textarea placeholder='Product Details' class='Input' id='ProductDescription' ></textarea>

            <p>Add Porduct Other Images</p>

            <img id='One' class='MainImage' src='${BLACKIMAGEICON}' />

            <br>

            <img id='Two' class='MainImage' src='${BLACKIMAGEICON}' />

            <br>

            <img id='Three' class='MainImage' src='${BLACKIMAGEICON}' />

            <br>

            <img id='Four' class='MainImage' src='${BLACKIMAGEICON}' />

            <button class='forestgreen'>Create Product</button>

        </div>
      
    `);

    CLICKED('#MainImage',()=>{

        IMAGEPICKER('#MainImage',(data)=>{

            STORE('','ImageProductMain',data);

        });

    });

    CLICKED('#One',()=>{

        IMAGEPICKER('#One',(data)=>{

            STORE('','One',data);

        });

    });

    CLICKED('#Two',()=>{

        IMAGEPICKER('#Two',(data)=>{

            STORE('','Two',data);

        });

    });

    CLICKED('#Three',()=>{

        IMAGEPICKER('#Three',(data)=>{

            STORE('','Three',data);

        });

    });

    CLICKED('#Four',()=>{

        IMAGEPICKER('#Four',(data)=>{

            STORE('','Four',data);

        });

    });

    CLICKED('.forestgreen',()=>{

        const ProductName=document.querySelector('#ProductName');
        const ProductPrice=document.querySelector('#ProductPrice');
        const ProductQuantity=document.querySelector('#ProductQuantity');
        const ProductDescription=document.querySelector('#ProductDescription');
        const ProductCatergory=document.querySelector('#ProductCatergory');
        
        DECLARATION('.forestgreen',(ELEMENT)=>{

            if (!ProductName.value) {
                
                TOAST('Enter Product Name');

                return;

            };

            if (!ProductPrice.value) {
                
                TOAST('Enter Product Price');

                return;

            };

            if (!ProductQuantity.value) {
                
                TOAST('Enter Product Qunatity');

                return;

            };

            if (!ProductCatergory.value) {
                
                TOAST('Enter Product Catergory');

                return;

            };

            if (!ProductDescription.value) {
                
                TOAST('Enter Product Details');

                return;

            };

            if (!sessionStorage.getItem('ImageProductMain')) {
                
                TOAST('Add Product First Image');

                return;

            };
            
            LOADER(ELEMENT);

            const HEADER=['ProductName','ProductImage','ProductPrice','ProductQuantity','ProductComments','ProductImageOne','ProductImageTwo','ProductImageThree','ProductImageFour','ProductCatergory','ProductDescription','ProductDate'];
            
            const DATA=[ProductName.value,sessionStorage.getItem('ImageProductMain'),ProductPrice.value,ProductQuantity.value,'',sessionStorage.getItem('One'),sessionStorage.getItem('Two'),sessionStorage.getItem('Three'),sessionStorage.getItem('Four'),ProductCatergory.value,ProductDescription.value,new Date()];

            INSERTDATA(DATABASELINK,'Winksta',HEADER,DATA,(data)=>{

                HOMEPAGE();

            });

        });
        
    })

};

const LOGINPAGE = () => {

    DISPLAY('', `
        <img class='AppIcon' src='${localStorage.getItem('AppIcon')}'/>
        <br><br>
        <input type='Email' id='Email' class='Input' placeholder='Enter Admin Email' />
        <br><br>
        <button class='forestgreen'>Login</button>
    `);

    CLICKED('.forestgreen', () => {

        DECLARATION('.forestgreen', (ELEMENT) => {

            DECLARATION('#Email', (EMAIL) => {

                if (!EMAIL.value) {
                    TOAST('Enter Admin Email');
                    return;
                }

                const validEmails = [
                    'nagamiestherruth@gmail.com',
                    'erouandrewrichard01@gmail.com',
                    'e.corpcompanygroup27@gmail.com',
                    'composeventures@gmail.com'
                ];

                if (validEmails.includes(EMAIL.value)) {
                    STORE('local', 'UserData', EMAIL.value);
                    HOMEPAGE();
                } else {
                    TOAST('No Admin Found');
                }

            });

        });

    });

}
