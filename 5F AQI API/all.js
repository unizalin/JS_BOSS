//獲取資料
const proxy = `https://cors-anywhere.herokuapp.com/`
const url = `http://opendata.epa.gov.tw/webapi/Data/REWIQA/?$orderby=SiteName&$skip=0&$top=1000&format=json`
const datas = [];

fetch(`${proxy}${url}`)
    .then(res => res.json())
    .then(data => {
        datas.push(...data);
        init()
    })

function init(){
  
    let allCities = datas.map(item => item.County)
    let cities = [...new Set(allCities)]
    // let allCities = datas.map(item=>{item.County})
    let aqiMenu =`${cities.map(item=>`<option value=${item}>${item}</option>`).join(' ')}`
    document.querySelector('.aqiList').insertAdjacentHTML('beforeend', aqiMenu);
    document.querySelector('.aqiList').addEventListener('change',selecetListener)  
  
  
   //default 高雄前金
    let defaultCounty = '臺北市';
    let defaultSitename = '松山'
    updateCity(defaultCounty, defaultSitename);
}
// init()

function selecetListener(e){
  e.preventDefault()
  let county, sitename

  if(e.target.nodeName==='SELECT'){
    county = e.target.value  
    console.log('select')
  }
  if(e.target.nodeName==='DIV'){
    console.log('div')
    county=e.target.parentNode.dataset.item.split('-')[0]
    sitename=e.target.parentNode.dataset.item.split('-')[1]
  }
  updateCity(county,sitename)
}

function aqiStatus(aqi) {
    switch (true) {
        case aqi < 51:
            return 'status1';
        case aqi < 101:
            return 'status2'
        case aqi < 151:
            return 'status3'
        case aqi < 201:
            return 'status4'
        case aqi < 301:
            return 'status5'
        case aqi < 401:
            return 'status6'
        default:
            return 'ERROR'
    }
}


function updateCity(county,sitename){
  console.log(county,sitename)

  let selectCity= document.querySelector('.city').innerText=county
  
  let selectedCounty = datas.find(city => city.County === county)
  document.querySelector('.updateTime .time').innerText= selectedCounty.PublishTime;
  
  if(!sitename){
    sitename = selectedCounty.SiteName
  
  }
  let selectedSite = datas.find(city => city.SiteName === sitename)

  
  let siteTarget=`<div class="siteInfo">
        <div class="name">${selectedSite.SiteName}</div>
        <div class="aqiNum ${aqiStatus(selectedSite.AQI)}">${selectedSite.AQI}</div>
      </div>
      <div class="content">
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">臭氧</span>
            <span class="eng">O3 (ppb)</span>
          </div>
          <div class="num">${selectedSite.O3}</div>
        </div>
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">懸浮微粒</span>
            <span class="eng">PM10 (μg/m³)</span>
          </div>
          <div class="num">${selectedSite.PM10}</div>
        </div>
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">細懸浮微粒</span>
            <span class="eng">PM2.5 (μg/m³)</span>
          </div>
          <div class="num">${selectedSite[`PM2.5`]}</div>
        </div>
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">一氧化碳</span>
            <span class="eng">CO (ppm)</span>
          </div>
          <div class="num">${selectedSite.CO}</div>
        </div>
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">二氧化硫</span>
            <span class="eng">SO2 (ppb)</span>
          </div>
          <div class="num">${selectedSite.SO2}</div>
        </div>
        <div class="aqiTitle">
          <div class="text">
            <span class="chi">二氧化氮</span>
            <span class="eng">NO2 (ppb)</span>
          </div>
          <div class="num">${selectedSite.NO2}</div>
        </div>
      </div>`
  
  document.querySelector('.siteTarget').innerHTML = siteTarget;
  let siteData = datas.filter(city=>city.County===county)
  // console.log(siteData)
  let siteDataHtml=[]
  for(let i = 0; i<siteData.length;i++){
    siteDataHtml.push(`
    <div class="siteInfo" data-item="${siteData[i].County}-${siteData[i].SiteName}">
      <div class="name">${siteData[i].SiteName}</div>
      <div class="aqiNum ${aqiStatus(siteData[i].AQI)}">${siteData[i].AQI}</div>
    </div>`)
   

  }
  // console.log(siteDataHtml)
  document.querySelector('.siteDatas').innerHTML=siteDataHtml.join(' ')
  document.querySelectorAll('.siteInfo').forEach(site=>site.addEventListener('click',selecetListener))
  

}





