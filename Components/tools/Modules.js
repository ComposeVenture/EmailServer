const CREATEDATABASE=(Name,callback)=>{

    const API='https://script.google.com/macros/s/AKfycbxHQH_kk7ovfIaHdXtsD_z2dqXQE1nwSO3W6mpYBPXhXfFpF2JOK72wV_ebsYjgpEHY9g/exec';

    const SHETS={
        "sheetName":Name
    };

    POSTPACKAGE(API,'',SHETS,(data)=>{

        callback(data);

        return;

    });
    
};

const CREATETABLE=(url,Name,callback)=>{

    const API='https://script.google.com/macros/s/AKfycbzhovbTYHMwWgfZUq9A3Z3akO6HEpE2OB4LKjSkWF5fx1-WUKc4dJ2MhVcgIyajEaX6qw/exec';

    const SHETS={
        "spreadsheetUrl":url,
        "sheetName":Name
    }

    POSTPACKAGE(API,'',SHETS,(data)=>{

        callback(data);

        return;

    });
      
}

const INSERTDATA=(spreadsheetUrl,TableName,Header,Data,callback)=>{

    const API='https://script.google.com/macros/s/AKfycbyfMnGzbYAbyK5TzUZ2Og9IH8QDlG81yUydnWQ5fCLzJYHj9Y36KvpaeYZoLYjQ5iDsUQ/exec';

    const SHETS={
        "spreadsheetUrl":spreadsheetUrl,
        "sheetName":TableName,
        "Headers": Header,
        "Data": Data
    }

    POSTPACKAGE(API,'',SHETS,(data)=>{

        callback(data);

        return;

    })

}

const UPDATEDATA=(spreadsheetUrl,TableName,ID,DATA,callback)=>{

    const API='https://script.google.com/macros/s/AKfycbzbmRB2zfDyMcde9mSmgC8u6U6a805g-LWGj9zRf7CZwrGp8eWwOPZanZ4htoNjEStGlQ/exec'

    const SHETS={
        "action": "update",
        "spreadsheetUrl":spreadsheetUrl,
        "sheetName":TableName,
        "id": ID,
        "data": DATA
    }

    POSTPACKAGE(API,'',SHETS,(data)=>{

        callback(data);

        return;

    })


}

const GETDATA=(url,Name,callback)=>{

    const API='https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec';

    const SHETS={
        "spreadsheetUrl":url,
        "sheetName":Name
    }

    POSTPACKAGE(API,'',SHETS,(data)=>{

        callback(data);

        return;

    });

}