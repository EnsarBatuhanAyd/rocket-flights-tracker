const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation();

    await page.goto('https://www.rocketlaunch.live/');
    await page.setViewport({ width: 1440, height: 744 });
    await navigationPromise;
    const nl = await page.$('.nextlaunch')
    const nlt = await nl.$('.mission_name') 
    const nld= await nl.$('.launch_date')
    const nlw = await nl.$('.launch_weather') 
    const nlti= await nl.$('.launch_time')
    const nlv = await nl.$('.rlt-vehicle') 
    const nlp= await nl.$('.rlt-provider')
    const nll= await nl.$('.rlt-location')
    
    const nextlaunchtitle = await (await nlt.getProperty('textContent')).jsonValue()
    const nextlaunchdate = await (await nld.getProperty('textContent')).jsonValue() 
    const nextlaunchtime = await (await nlti.getProperty('textContent')).jsonValue()
    const nextlaunchweather= await (await nlw.getProperty('textContent')).jsonValue() 
    const nextlaunchtvehicle = await (await nlv.getProperty('textContent')).jsonValue()
    const nextlaunchprovider= await (await nlp.getProperty('textContent')).jsonValue() 
    const nextlaunchlocation= await (await nll.getProperty('textContent')).jsonValue() 
    
    console.log("Next Mission Name:" + nextlaunchtitle)
    console.log("Next Launch Date:" + nextlaunchdate)
    console.log("Next Launch Time:" + nextlaunchtime)
    console.log("Next Launch Weather:" + nextlaunchweather)
    console.log("Next Launch Vehicle:" + nextlaunchtvehicle)
    console.log("Next Launch Provider:" + nextlaunchprovider)
    console.log("Next Launch Location:" + nextlaunchlocation)
   
   
    await browser.close();
  } catch (e) {
    console.log(`Error while fetching datas ${e.message}`);
  }
})();