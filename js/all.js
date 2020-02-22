
const xhr = new XMLHttpRequest();

xhr.open('get','https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314',true);

xhr.send(null);

xhr.onload=function(){
    const data=JSON.parse(xhr.responseText);
    const location=data.records.locations[0].location;
    const locaall=location.length;
   
    const area=document.querySelectorAll('.area ul');
    const msg=document.querySelector('.msg');
    const temp=document.querySelector('.temp');
    const sunny=document.querySelector('.sunny');
    const cloudy=document.querySelector('.cloudy');
    const rainnday=document.querySelector('.rainnday');
    const allarea=area.length;
    for(let i=0; i<allarea; i++){
        area[i].addEventListener('click',function(e){
            e.preventDefault();
            const place=e.target.textContent;
            const no=e.target.nodeName;
            if(no!=='A'){return}
            let str_msg='';
            let str_temp='';
            for(let i=0; i<locaall; i++){
                // console.log(location[i].locationName); 
                if(place==location[i].locationName){
                    str_msg+='<h4 class="place">'+location[i].locationName+'</h4>\
                    <h4 class="wea">天氣狀況: '+location[i].weatherElement[6].time[0].elementValue[0].value+'</h4>\
                    <h4 class="rain">降雨機率: '+location[i].weatherElement[0].time[0].elementValue[0].value+'%</h4>\
                    <h4 class="uv">紫外線: '+location[i].weatherElement[9].time[0].elementValue[0].value+'</h4>\
                    <h4 class="uv">曝曬指數: '+location[i].weatherElement[9].time[0].elementValue[1].value+'</h4>\
                    <h4 class="time-s">時間: '+location[i].weatherElement[1].time[0].startTime+'</h4>\
                    <h4 class="time-e">至 '+location[i].weatherElement[1].time[0].endTime+'</h4>'

                    str_temp+='<h5>平均: </h5><h4 class="avg">'+location[i].weatherElement[1].time[0].elementValue[0].value+'°C</h4>\
                    <h4 class="low">最低: '+location[i].weatherElement[8].time[0].elementValue[0].value+'°C</h4>\
                    <h4 class="high">最高: '+location[i].weatherElement[12].time[0].elementValue[0].value+'°C</h4>'

                    const wea=location[i].weatherElement[6].time[0].elementValue[1].value;
                    if(wea=='01'||wea=='02'||wea=='03'){
                        sunny.style.display='block';
                        cloudy.style.display='none';
                        rainnday.style.display='none';
                    }
                    else if(wea=='04'||wea=='05'||wea=='06'||wea=='07'){
                        sunny.style.display='none';
                        cloudy.style.display='block';
                        rainnday.style.display='none';
                    }
                    else{
                        sunny.style.display='none';
                        cloudy.style.display='none';
                        rainnday.style.display='block';
                    }
                    
                }
             
            }
            msg.innerHTML=str_msg;
            temp.innerHTML=str_temp;
        })
    }
    
}

