const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT || "8000"
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="syssolutions.binance@gmail.com"
global.location="Lima,Peru."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Guru:mongodb@gifted.qqens.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Lima";
global.github=process.env.GITHUB|| "https://github.com/OwnerCO/King-Baldwin-";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "51978194933" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "51978194933";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || "2"
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_16_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJmTUZMYVhXYWNuN3NFYTRwMklCSGNUSHpTNVFQQndUQkVPMmswMEI2Tm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTE5NzgxOTQ5MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQyOEFGQzhEMzc1Q0FFOTZFOTY2RDQxMzg5MjIzQTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDU1MjE5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQUFDQjEyNzk5MjNGQTZBRjE0RkUzRDdDQTE1RjNDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQ1NTIxOTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjBGa0s5dFhTSm1TTmhHUzQ1ME1mZ1wiLFxuICBcInBob25lSWRcIjogXCIxMzVjNGRiMS05OWRlLTRmNzQtYjEwNy0xMTNjMjkxNjhkNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxNzcsXG4gICAgICAxODgsXG4gICAgICA5NSxcbiAgICAgIDExLFxuICAgICAgMTUyLFxuICAgICAgMTM4LFxuICAgICAgMTE2LFxuICAgICAgMTg5LFxuICAgICAgMjE3LFxuICAgICAgMTA1LFxuICAgICAgMTA0LFxuICAgICAgMjI5LFxuICAgICAgMTE1LFxuICAgICAgOTYsXG4gICAgICAxNTIsXG4gICAgICA3MixcbiAgICAgIDI0LFxuICAgICAgMjcsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMixcbiAgICAgIDEyOCxcbiAgICAgIDczLFxuICAgICAgOTksXG4gICAgICA0MCxcbiAgICAgIDEsXG4gICAgICA2NixcbiAgICAgIDUsXG4gICAgICA0MCxcbiAgICAgIDEzOCxcbiAgICAgIDEwMixcbiAgICAgIDIzNSxcbiAgICAgIDI0MSxcbiAgICAgIDEyMSxcbiAgICAgIDE5NSxcbiAgICAgIDE3OCxcbiAgICAgIDEzMyxcbiAgICAgIDcsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUUYxTjJYWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTE5NzgxOTQ5MzM6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCS8J2QmPCdkJLwnZWK8J2VoPCdlZ3wnZWm8J2VpfCdlZrwnZWg8J2Vn/CdlaRcIixcbiAgICBcImxpZFwiOiBcIjg5ODk4MzYzMTg3MjYxOjkxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002UWx2VUdFUHlucXJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejRuUVJmTEZiSFpRanNWU0FhVG5FejJ6RDFuWis4OStEY3dPTzVwTzVSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHcVg5aHpac3RaVEErOFhIZnJNL1dYK2xJRGtPMWE4R1piMlVjeUxiZU43MlhsZ2lGeSt4bE5VdVdPMXV5WklXcnJuU1poS281VU9ZTExBV25TSVNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPdk9TMis1V1Q3UWJndHRNMkgrMUNqZkpMUExlQld1cnFyK3hvaHBoNGUra3VOUzB1R3o5UnR2RGlHMDI2OVByZlNmWEY5TXFOUjhtVTBhWmE4ak5oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MTk3ODE5NDkzMzo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ1NTIxOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBUXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFRdi5qc29uIjogIntcImtleURhdGFcIjpcIndQVnhJN1VSYmFsZWhnWnN2eitob2IzbENkRjRUWGpVV21ta1VsOU93Rms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NjM0MjA5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0NTUyMTkzMDk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-X-Md",
  packname: process.env.PACK_NAME || "Suhail-X-Md",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
