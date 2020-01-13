const fs=require("fs"),readline=require("readline"),csv=require("csvtojson"),xml2json=require("xml2json"),args=process.argv.slice(2);let lines=20;const arguments={input:["-i","--input"],lines:["-l","--lines"]};args.forEach(e=>{(e.includes(arguments.input[0])||e.includes(arguments.input[1]))&&(e=e.split("="),inputFile=e[1]),(e.includes(arguments.lines[0])||e.includes(arguments.lines[1]))&&(e=e.split("="),lines=e[1])});let json={},jsonKey="products_data";json[jsonKey]=[];const convertCSV=e=>{csv().fromFile(e).then(n=>{n.forEach((e,n)=>{if(n<=lines){Object.keys(e).forEach(n=>{const s=n.split("_");let t="";s.forEach((e,n)=>{n>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),t+=e}),n!==t&&(Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(e,n)),delete e[n])}),json[jsonKey].push(e)}}),console.log(`Converted ${e} to ${fileName}.json`),fs.writeFileSync(fileName+".json",JSON.stringify(json,null,4))})},convertTSV=e=>{let n=0;const s=readline.createInterface({input:fs.createReadStream(e)});let t=!1,o=[];const l=e=>e.trim().split("\t");s.on("line",e=>{n++,lines&&n<=lines&&(t?json[jsonKey].push((e=>{let n={};return newColumnNames.forEach((s,t)=>{n[s]=e[t].replace(/\"/g,"")}),n})(l(e))):(o=l(e),newColumnNames=[],o.forEach(e=>{e=e.split("_"),newColumnName="",e.forEach((e,n)=>{n>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),newColumnName+=e}),newColumnNames.push(newColumnName)}),t=!0))}),s.on("close",()=>{console.log(`Converted ${e} to ${fileName}.json`),fs.writeFileSync(fileName+".json",JSON.stringify(json,null,4))})},convertTXT=e=>{let n=0;const s=readline.createInterface({input:fs.createReadStream(e)});let t=!1,o=[];const l=e=>e.trim().split("\t");s.on("line",e=>{n++,lines&&n<=lines&&(t?json[jsonKey].push((e=>{let n={};return newColumnNames.forEach((s,t)=>{n[s]=e[t]}),n})(l(e))):(o=l(e),newColumnNames=[],o.forEach(e=>{e=e.split("_"),newColumnName="",e.forEach((e,n)=>{n>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),newColumnName+=e}),newColumnNames.push(newColumnName)}),t=!0))}),s.on("close",()=>{console.log(`Converted ${e} to ${fileName}.json`),fs.writeFileSync(fileName+".json",JSON.stringify(json,null,4))})},convertXML=e=>{const n=fs.readFileSync(e,"utf8");let s=xml2json.toJson(n,{object:!0,reversible:!1,coerce:!0,sanitize:!0,trim:!0,arrayNotation:!1,alternateTextNode:!1});(s=s.catalog.product).forEach((e,n)=>{n<=lines&&json[jsonKey].push(e)}),console.log(`Converted ${e} to ${fileName}.json`),fs.writeFileSync(fileName+".json",JSON.stringify(json,null,4))},file=inputFile,fileName=inputFile.split(".")[0],fileType=inputFile.split(".")[1].toLowerCase();switch(fileType){case"csv":convertCSV(file);break;case"tsv":convertTSV(file);break;case"txt":convertTXT(file);break;case"xml":convertXML(file)}