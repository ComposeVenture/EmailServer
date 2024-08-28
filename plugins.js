const BATTERY=(callback)=>{var battery=JSON.parse(Android.getBatteryLevel());callback(battery)};
const CONTACTS=(callback)=>{var contactsData=Android.getContacts();var parsedContacts=JSON.parse(contactsData);callback(parsedContacts)};
const NOTIFICATIONS=(e,A)=>{Android.showNotification(`${e}`,`${A}`)};
const READFILE=(Path,callback)=>{var fileData=Android.readFileAsUTF(Path);callback(fileData)};
const TOAST=(e)=>{Android.showToast(e)};
const RELOADPAGE=()=>{Android.reloadPage();};
const VIBRATION=(e)=>{Android.vibrate(e)};
const WRITEFILE=(filePath,data)=>{ const encodedData = btoa(data);Android.writeFile(filePath, encodedData);};
const CREATEFOLDER=(dirPath)=>{Android.createDirectory(dirPath);};
const DELETEFOLDER=(dirPath)=>{Android.deleteDirectory(dirPath)};
const DELETEFILE=(filePath)=>{Android.deleteFile(filePath);};
const READFILEDATA=(Path,callback)=>{var fileData=Android.readFileAsBase64(Path);callback(fileData)};
const MOVEFILE=(sourceFilePath,destDirPath)=>{Android.moveFile(sourceFilePath, destDirPath);}
const CREATECONTACT=(Name,Number)=>{Android.addContact(Name,Number);};
const UPDATECONTACT=(contactId,Name,Number)=>{Android.updateContact(contactId, Name, Number);};
const DELETECONTACT=(contactId)=>{Android.deleteContact(contactId)};
const NETWORKWIFI=(callback)=>{var data=Android.isConnectedToWiFi();callback(data)};
const NETWORKTYPE=(callback)=>{var data=Android.getNetworkType();callback(data)};
const NETWORKMOBILEDATA=(callback)=>{var data=Android.isConnectedToMobileData();callback(data)};
const NETWORKWIFISTRENGTH=(callback)=>{var data=Android.getWiFiSignalStrength();callback(data)};
const NETWORKMOBILETYPE=(callback)=>{var data=Android.getMobileNetworkType();callback(data)};
const NETWORKSTATE=(callback)=>{var data=Android.isNetworkAvailable();callback(data)};
const NEWPAGE=(DATA)=>{const htmlContent=`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><script src="https://composeventure.github.io/Compose-Pay/AndroidSdk.js"></script><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="file:///android_res/raw/styles.css"><link rel="shortcut icon" href="file:///android_res/drawable/app_icon.png" type="image/x-icon"><script src="file:///android_res/raw/api.js"></script><script src="file:///android_res/raw/blackicons.js"></script><script src="file:///android_res/raw/environment.js" defer></script><script src="file:///android_res/raw/functions.js"></script><script src="file:///android_res/raw/modules.js"></script><script src="file:///android_res/raw/plugins.js"></script><script src="file:///android_res/raw/whiteicons.js"></script><title>Compose-Native</title></head><body>${DATA}</body></html>`; Android.openWebViewPage(htmlContent); }
const RELOADNEWPAGE=()=>{Android.goBack();}