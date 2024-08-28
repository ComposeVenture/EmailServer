const ADD=(ELEMENT,ELEMENT1)=>{CONDITION(ELEMENT,()=>ELEMENT.append(ELEMENT1),()=>document.body.append(ELEMENT1))};
const APPCOLOR=(ELEMENT,COLOR)=>{CONDITION(ELEMENT,()=>STYLED(ELEMENT,'color',COLOR),()=>document.body.style.color=COLOR)};
const APPMODE=(ELEMENT,IMG,DEFAULT)=>{if (IMG==='Image'){document.body.style.backgroundImage=`url(${ELEMENT})`;document.body.style.backgroundRepeat='no-repeat';document.body.style.backgroundPosition='center';document.body.style.backgroundSize='cover'}else{if (ELEMENT){localStorage.setItem('ModeColour',ELEMENT);document.body.style.background=ELEMENT}else{localStorage.setItem('ModeColour',DEFAULT);document.body.style.background=DEFAULT}}};
const APPNAME=(NAME)=>{STORE('local','AppName',NAME)};
const AUDIOPICKER = (audioElement, callback) => { const input = document.createElement('input'); input.type = 'file'; input.style.display = 'none'; input.accept = 'audio/*'; document.body.appendChild(input); input.addEventListener('change', function() { var file = this.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function(event) { var base64Data = event.target.result; var compressedBase64Data = resizeBase64Data(base64Data, 49800); if (compressedBase64Data) { document.querySelector(audioElement).src = compressedBase64Data; callback(compressedBase64Data); } else { TOAST("Unable to resize the audio data within the character limit."); } }; reader.readAsDataURL(file); }); input.click(); input.remove(); function resizeBase64Data(base64Data, targetSize) { if (base64Data.length <= targetSize) { return base64Data; } return base64Data.substring(0, targetSize); } };
let intervalID; const colorChange = (ELEMENT) => { let index = 0; intervalID = setInterval(() => { index = (index + 1) % COLOR.length; STYLED(ELEMENT, 'border', `1px solid ${COLOR[index].name}`); STYLED(ELEMENT, 'background', 'transparent'); }, 2000); }; const stopColorChange = (ELEMENT,COLOR) => { clearInterval(intervalID); STYLED(ELEMENT, 'border', '1px solid forestgreen'); STYLED(ELEMENT, 'background', COLOR);};
const CAL = (NUM, SIGN, NUM1, callback) => { let answer; switch (SIGN) { case '+': answer = NUM + NUM1; break; case '-': answer = NUM - NUM1; break; case '*': answer = NUM * NUM1; break; case '/': answer = NUM / NUM1; break; default: callback('Invalid operator'); return; } callback(answer); };
const CALL=(NUMBER)=>{ const phoneNumber = NUMBER; window.location.href = 'tel:' + phoneNumber;};
const CHECK=(ELEMENT,ACTION)=>{const result=ELEMENT;return ACTION(result ? result:false)};
const CHECKER=(ELEMENT,callback)=>{if (ELEMENT) {callback()};};
const CLEAR=(ELEMENT)=>{CONDITION(ELEMENT,()=>DISPLAY(ELEMENT,''),()=>DISPLAY(document.body,''))};
const CLEARSTORAGE=(data)=>{CONDITION(data,()=>localStorage.clear(),()=>sessionStorage.clear())};
const CLICKED=(selector,callback)=>{const element=document.querySelector(selector);EVENT(element,"click",()=>{callback()})};
const CLIPBOARD=()=>{document.addEventListener('paste', function(e) {e.preventDefault();var text = (e.clipboardData || window.clipboardData).getData('text');document.execCommand('insertText', false, text);});};
const CONDITION=(CONDITION,ACTION,ACTION1)=>{if (CONDITION){return ACTION()}else{return ACTION1()}};
const CREATEDATABASE=(Name,callback)=>{const API='https://script.google.com/macros/s/AKfycbxHQH_kk7ovfIaHdXtsD_z2dqXQE1nwSO3W6mpYBPXhXfFpF2JOK72wV_ebsYjgpEHY9g/exec';const SHETS={"sheetName":Name};POSTPACKAGE(API,'',SHETS,(data)=>{callback(data);return;});};
const CREATETABLE=(url,Name,callback)=>{const API='https://script.google.com/macros/s/AKfycbzhovbTYHMwWgfZUq9A3Z3akO6HEpE2OB4LKjSkWF5fx1-WUKc4dJ2MhVcgIyajEaX6qw/exec';const SHETS={"spreadsheetUrl":url,"sheetName":Name};POSTPACKAGE(API,'',SHETS,(data)=>{callback(data);return;});}
const CREATEELEMENT=(ITEM,CLASS,callback)=>{const ELEMENT=document.createElement(ITEM);if (CLASS){ELEMENT.classList.add(CLASS)}return callback(ELEMENT)};
const DATENOW=(callback)=>{callback(Date.now())};
const DECLARATION=(CLASS,callback)=>{const ELEMENT=document.querySelector(CLASS);return callback(ELEMENT)};
const DELETESTORAGE=(data,ITEM)=>{CONDITION(data,()=>localStorage.removeItem(ITEM),()=>sessionStorage.removeItem(ITEM))};
const DEJSON=(STORAGE,KEY,callback)=>{let JSONDATA='';CONDITION(STORAGE,()=>{JSONDATA=localStorage.getItem(KEY);return JSONDATA},()=>{JSONDATA=sessionStorage.getItem(KEY);return JSONDATA});if (JSONDATA){let data=JSON.parse(JSONDATA);return callback(data)}else{console.error('No data found in storage');return null}};
const DISPLAY=(ELEMENT,ELEMENT1)=>{CONDITION(ELEMENT,()=>ELEMENT.innerHTML=ELEMENT1,()=>document.body.innerHTML=ELEMENT1)};
const DEVICED=(callback)=>{ const deviceInfo = { platform: navigator.platform, userAgent: navigator.userAgent, language: navigator.language, cookiesEnabled: navigator.cookieEnabled, screenWidth: screen.width, screenHeight: screen.height, screenColorDepth: screen.colorDepth, onlineStatus: navigator.onLine, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, }; JSONIFICATION(deviceInfo,(deviceInf)=>{ callback(deviceInf) }) };
const ENVIRONMENT=(TEXT)=>{if (TEXT){localStorage.setItem('Environment','Test');document.body.style.top='0';document.body.style.bottom='0'}else{localStorage.setItem('Environment','Production');document.body.style.top='0'}};
const EVENT=(ELEMENT,FUNCTION,callback)=>{ELEMENT.addEventListener(FUNCTION,callback)};
const EXTERNALJS=(PATH,callback)=>{var script=document.createElement("script");script.src=PATH;script.async=true;script.onload=function (){if (typeof callback==="function"){callback()}};document.head.appendChild(script)};
const FACEBOOK=(usernameOrProfileId)=>{var facebookLink='https://www.facebook.com/'+encodeURIComponent(usernameOrProfileId);window.open(facebookLink)};
const FINDER=(DATA,ELEMENT,ELEMENT1,ACTION)=>{const user=DATA.find(item=>item[ELEMENT]===ELEMENT1);return ACTION(user ? user:false)};
const FUNCTIONED=(NAME,FUNCTION)=>{ const functionString = FUNCTION.toString(); localStorage.setItem(NAME, functionString);};
const GETDATA=(url,Name,callback)=>{const API='https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec';const SHETS={"spreadsheetUrl":url,"sheetName":Name};POSTPACKAGE(API,'',SHETS,(data)=>{callback(data);return;});}
const GETPACKAGE=(URL,MODE,callback)=>{ fetch(URL,{ method:"GET",mode:MODE }) .then((response)=>{ if (!response.ok){ throw new Error('Network response was not ok') }const contentType=response.headers.get('Content-Type'); if (contentType && contentType.includes('application/json')){ return response.json() }else{ return response.text() } }) .then((data)=>{ callback(data) }).catch(error=>{ if (localStorage.getItem('Environment') ==='Production' ) { TOAST("Unexpected Error"); } else { console.log(error); } }); };
const GETSTORE=(STORAGE,KEY)=>{CONDITION(STORAGE==='local',()=>localStorage.getItem(KEY),()=>sessionStorage.getItem(KEY))};
const GETINDEXED = (dbName, storeName, callback) => { const initialRequest = indexedDB.open(dbName); initialRequest.onsuccess = function(event) { const db = event.target.result; if (!db.objectStoreNames.contains(storeName)) { console.error(`Object store "${storeName}" not found.`); db.close(); return; } const transaction = db.transaction(storeName, 'readonly'); const store = transaction.objectStore(storeName); const getAllRequest = store.getAll(); getAllRequest.onsuccess = function(event) { const data = event.target.result; callback(data); }; getAllRequest.onerror = function(event) { console.error('Error retrieving data', event.target.error); }; transaction.oncomplete = function() { console.log('Transaction completed'); }; transaction.onerror = function(event) { console.error('Transaction error', event.target.error); }; db.close(); }; initialRequest.onupgradeneeded = function(event) { console.error('Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.'); }; initialRequest.onerror = function(event) { console.error('Error opening database', event.target.error); }; };
const GMAIL=(emailAddress)=>{var mailtoLink='mailto:'+encodeURIComponent(emailAddress);window.open(mailtoLink)};
const IMAGEPICKER = (imageElement, callback) => { const input = document.createElement('input'); input.type = 'file'; input.style.display = 'none'; input.accept = 'image/*'; document.body.appendChild(input); input.addEventListener('change', function () { var file = this.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function (event) { var image = new Image(); image.src = event.target.result; image.onload = function () { var maxWidth = 800; var maxHeight = 600; var canvas = document.createElement('canvas'); var ctx = canvas.getContext('2d'); var width = image.width; var height = image.height; if (width > height) { if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; } } else { if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; } } canvas.width = width; canvas.height = height; ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(image, 0, 0, width, height); var base64Data; if (file.type === 'image/png') { base64Data = canvas.toDataURL('image/png'); } else { var quality = 0.7; base64Data = canvas.toDataURL('image/jpeg', quality); while (base64Data.length > 49800 && quality > 0) { quality -= 0.1; base64Data = canvas.toDataURL('image/jpeg', quality); } } if (base64Data.length < 49800) { document.querySelector(imageElement).src = base64Data; callback(base64Data); } else { TOAST('Image Format Error'); } }; }; reader.readAsDataURL(file); }); input.click(); input.remove(); };
const INSTAGRAM=(username)=>{var instagramLink='https://www.instagram.com/'+encodeURIComponent(username);window.open(instagramLink)};
const INSERTDATA=(spreadsheetUrl,TableName,Header,Data,callback)=>{const API='https://script.google.com/macros/s/AKfycbyfMnGzbYAbyK5TzUZ2Og9IH8QDlG81yUydnWQ5fCLzJYHj9Y36KvpaeYZoLYjQ5iDsUQ/exec';const SHETS={"spreadsheetUrl":spreadsheetUrl,"sheetName":TableName,"Headers": Header,"Data": Data};POSTPACKAGE(API,'',SHETS,(data)=>{callback(data);return;})};
const JSONLENGTH=(jsonString,callback)=>{try{const jsonObject=JSON.parse(jsonString);let length;if(Array.isArray(jsonObject)){length=jsonObject.length}else if(typeof jsonObject==='object'&&jsonObject!==null){length=Object.keys(jsonObject).length}else{throw new Error("Parsed data is neither an object nor an array")}callback(length)}catch(error){console.error("Invalid JSON string:",error.message)}}
const JSONADDER=(data,contents,callback)=>{let MYDATA;try{MYDATA=JSON.parse(data)||[]}catch(e){MYDATA=[]}contents.forEach(content=>{if(!MYDATA.includes(content)){MYDATA.push(content)}});const updatedJSON=JSON.stringify(MYDATA);callback(updatedJSON)};
const JSONREMOVER=(data,contents,callback)=>{let MYDATA;try{MYDATA=JSON.parse(data)||[]}catch(e){MYDATA=[]}contents.forEach(content=>{const index=MYDATA.indexOf(content);if(index>-1){MYDATA.splice(index,1)}});const updatedJSON=JSON.stringify(MYDATA);callback(updatedJSON)};
const JSONSORTER=(data,key,value,callback)=>{let DATA=data.filter(item=>item[key]===value);callback(DATA)}
const JSONIFICATION=(data,callback)=>{let DATA=JSON.stringify(data);callback(DATA)};
let initialHeight = window.innerHeight;let keyboardHeight = 0;window.addEventListener('resize', () => {if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {const newHeight = window.innerHeight;if (newHeight < initialHeight) {keyboardHeight = initialHeight - newHeight;STORE('local','KeyBoard',keyboardHeight);}} else {initialHeight = window.innerHeight;}});
const LOADER=(ELEMENT,ID)=>{DISPLAY(ELEMENT,`<img class='LoadingIcon' id='${ID}' src='${WHITELOADINGICON}'/>`)};
const MODULE=(PATH,MODULE_NAME,callback)=>{import(PATH).then(module=>{callback(module[MODULE_NAME])}).catch(error=>{console.error('Error importing module:',error)})};
const NETWORKED=()=>{NETWORKSTATE((data)=>{CONDITION(data===true,()=>STORE('local','NetWork','ON'),()=>REMOVESTORE('local','NetWork'))})};
const ORIGIN=(ELEMENT,ORIGINAL)=>{DISPLAY(ELEMENT,ORIGINAL)};
const PASSWORDDEHASH=async (hashedPassword,inputPassword,callback)=>{try{const encoder=new TextEncoder();const inputData=encoder.encode(inputPassword);const inputHashBuffer=await crypto.subtle.digest('SHA-256',inputData);const inputHashArray=Array.from(new Uint8Array(inputHashBuffer));const inputHashHex=inputHashArray.map(byte=>byte.toString(16).padStart(2,'0')).join('');const match=hashedPassword===inputHashHex;callback(match)}catch (error){console.log(error)}};
const PASSWORDHASH=async (password,callback)=>{try{const encoder=new TextEncoder();const data=encoder.encode(password);const hashBuffer=await crypto.subtle.digest('SHA-256',data);const hashArray=Array.from(new Uint8Array(hashBuffer));const hashHex=hashArray.map(byte=>byte.toString(16).padStart(2,'0')).join('');callback(hashHex)}catch (error){console.log(error)}};
const POSTMAIL=(RECIEVEREMAIL,SUBJECT,MESSAGE,Callback)=>{ const DATA={ "recipientEmail":RECIEVEREMAIL, "subject":SUBJECT, "body":MESSAGE }; POSTPACKAGE(EMAILAPI,'',DATA,(data)=>{ Callback(data); });};
const POSTPACKAGE=(URL,MODE,DATA,callback)=>{ let MODEUSED; if (MODE) { MODEUSED=MODE; } fetch(URL,{ method:"POST", mode:MODEUSED, body:JSON.stringify(DATA) }) .then(res=>res.json()) .then(data=>{ callback(data); }) .catch(error=>{ if (localStorage.getItem('Environment') ==='Production' ) { TOAST("Unexpected Error"); } else { console.log(error); } }); };
const RANDOMCODE=(callback)=> { let randomDigits = ''; for (let i = 0; i < 6; i++) { randomDigits += Math.floor(Math.random() * 9) + 1; } callback(randomDigits);};
const REDUX=(DATA,ACTION)=>{const modifiedData=[];DATA.forEach(element=>{modifiedData.push(ACTION(element))});return modifiedData};
const REMOVESTORE=(STORAGE,KEY)=>{CONDITION(STORAGE==='local',()=>localStorage.removeItem(KEY),()=>sessionStorage.removeItem(KEY))};
const REVERSE=(data,callback)=>{let DATA=[data].reverse();callback(DATA)};
const REVERSEINPUT=(data,callback)=>{let DATA=data.split('').reverse().join('');callback(DATA)};
const ROUTE=(DATA, LINK)=>{ document.body.innerHTML = DATA; history.pushState({data: DATA}, '', LINK); }; window.addEventListener('popstate', function(event) { if (event.state && event.state.data) { document.body.innerHTML = event.state.data; } });
const ROUTECSS=(DATA)=>{ const styleElement = document.createElement("style"); styleElement.textContent = DATA; document.head.appendChild(styleElement);};
const ROUTEJS=(DATA)=>{ const styleElement = document.createElement("script"); styleElement.textContent = DATA; document.head.appendChild(styleElement);};
const SCREENHEIGHT = (callback) => {callback(JSON.stringify({ screenHeight: screen.height }));};
const SCREENWIDTH = (callback) => {callback(JSON.stringify({ screenWidth: screen.width  }));};
const SMS = (NUMBER) => {const phoneNumber = NUMBER;window.location.href = 'sms:' + phoneNumber;};
const SERVICEWORKER=()=>{ if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/service-worker.js') .then(function(registration) { console.log('Service worker registration successful:', registration); }) .catch(function(error) { console.log('Service worker registration failed:', error); }); }); } }
const SHUFFLE=(array,callback)=>{for (let i=array.length - 1;i>0;i--){const j=Math.floor(Math.random() * (i+1));[array[i],array[j]]=[array[j],array[i]]}callback(array)};
const SINGLESHUFFLE=(array,callback)=>{const randomIndex=Math.floor(Math.random() * array.length);const shuffledElement=array[randomIndex];callback(shuffledElement)};
const STRINGCOMPRESSOR=(base64String,callback)=>{const maxLength=49800;const compressionRatio=maxLength / base64String.length;const binaryData=atob(base64String);const compressedLength=Math.floor(binaryData.length * compressionRatio);const compressedBase64=btoa(binaryData.slice(0,compressedLength));callback(compressedBase64)};
const STORE=(STORAGE,KEY,ELEMENT)=>{CONDITION(STORAGE==='local',()=>localStorage.setItem(KEY,ELEMENT),()=>sessionStorage.setItem(KEY,ELEMENT))};
const STOREINDEXED = (dbName, storeName, data, callback) => { let invoked = false; const cb = (success) => { if (!invoked && typeof callback === 'function') { invoked = true; callback(success); } }; const request = indexedDB.open(dbName, 1); request.onupgradeneeded = (e) => { const db = e.target.result; if (!db.objectStoreNames.contains(storeName)) { db.createObjectStore(storeName, { keyPath: 'Name' }); } }; request.onsuccess = (e) => { const db = e.target.result; if (!db.objectStoreNames.contains(storeName)) { db.close(); const newVersion = db.version + 1; const upgradeRequest = indexedDB.open(dbName, newVersion); upgradeRequest.onupgradeneeded = (e) => { const upgradeDb = e.target.result; upgradeDb.createObjectStore(storeName, { keyPath: 'Name' }); }; upgradeRequest.onsuccess = (e) => { const upgradeDb = e.target.result; const tx = upgradeDb.transaction(storeName, 'readwrite'); const store = tx.objectStore(storeName); const addReq = store.add(data); addReq.onsuccess = () => { tx.oncomplete = () => cb(true); }; addReq.onerror = (e) => cb(false); tx.onerror = (e) => cb(false); }; upgradeRequest.onerror = (e) => cb(false); } else { const tx = db.transaction(storeName, 'readwrite'); const store = tx.objectStore(storeName); const addReq = store.add(data); addReq.onsuccess = () => { tx.oncomplete = () => cb(true); }; addReq.onerror = (e) => cb(false); tx.onerror = (e) => cb(false); } }; request.onerror = (e) => cb(false); };
const STYLED=(ELEMENT,PROPERTY,VALUE)=>{ELEMENT.style[PROPERTY]=VALUE};
const TELEGRAM=(username)=>{var telegramLink='https://t.me/'+encodeURIComponent(username);window.open(telegramLink)};
const TIMER=(inputDate,callback)=>{const units=[{name:'year',seconds:31536000},{name:'month',seconds:2592000},{name:'week',seconds:604800},{name:'day',seconds:86400},{name:'hour',seconds:3600},{name:'minute',seconds:60},{name:'second',seconds:1},];const now=Date.now();const then=new Date(inputDate).getTime();const diffInSeconds=Math.floor((now-then)/1000);for(const unit of units){const value=Math.floor(diffInSeconds/unit.seconds);if(value>=1){const result=`${value}${unit.name}${value>1 ? 's':''}`;return callback?callback(result):console.error('Callback function is not provided or not a function')}}return callback?callback('just now'):console.error('Callback function is not provided or not a function')};
const TIMENOW=(callback)=>{callback(new Date())};
const TWITTER=(username)=>{var twitterLink='https://twitter.com/'+encodeURIComponent(username);window.open(twitterLink)};
const UPDATEDATA=(spreadsheetUrl,TableName,ID,DATA,callback)=>{const API='https://script.google.com/macros/s/AKfycbzbmRB2zfDyMcde9mSmgC8u6U6a805g-LWGj9zRf7CZwrGp8eWwOPZanZ4htoNjEStGlQ/exec';const SHETS={"action": "update","spreadsheetUrl":spreadsheetUrl,"sheetName":TableName,"id": ID,"data": DATA};POSTPACKAGE(API,'',SHETS,(data)=>{callback(data);return;})};
const UPDATEINDEXED = (dbName, storeName, data) => { const request = indexedDB.open(dbName); request.onsuccess = function(event) { const db = event.target.result; if (!db.objectStoreNames.contains(storeName)) { console.error(`Object store "${storeName}" not found.`); db.close(); return; } const transaction = db.transaction(storeName, 'readwrite'); const store = transaction.objectStore(storeName); const putRequest = store.put(data); putRequest.onsuccess = function() { console.log('Data updated successfully'); }; putRequest.onerror = function(event) { console.error('Error updating data', event.target.error); }; transaction.oncomplete = function() { console.log('Transaction completed'); }; transaction.onerror = function(event) { console.error('Transaction error', event.target.error); }; db.close(); }; request.onerror = function(event) { console.error('Error opening database', event.target.error); }; };
const VIDEOPICKER = (videoElement, callback) => { const input = document.createElement('input'); input.type = 'file'; input.style.display = 'none'; input.accept = 'video/*'; document.body.appendChild(input); input.addEventListener('change', function() { var file = this.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function(event) { var base64Data = event.target.result; var compressedBase64Data = resizeBase64Data(base64Data, 49800); if (compressedBase64Data) { document.querySelector(videoElement).src = compressedBase64Data; callback(compressedBase64Data); } else { TOAST("Unable to resize the video data within the character limit."); } }; reader.readAsDataURL(file); }); input.click(); input.remove(); function resizeBase64Data(base64Data, targetSize) { if (base64Data.length <= targetSize) { return base64Data; } return base64Data.substring(0, targetSize); } };
const WEBSITE=(url)=>{window.open(url)};
const WHATSAPP=(phoneNumber)=>{var whatsappLink='https://wa.me/'+encodeURIComponent(phoneNumber);window.open(whatsappLink)};
const YOUTUBE=(query)=>{var youtubeLink='https://www.youtube.com/results?search_query='+encodeURIComponent(query);window.open(youtubeLink)};
const ZOOM=()=>{document.addEventListener('touchstart',function (event){if (event.touches.length>1){event.preventDefault()}},{passive:false});document.addEventListener('wheel',function (event){if ((event.ctrlKey || event.metaKey) && !event.shiftKey){event.preventDefault()}})};