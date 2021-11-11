import {test} from "@playwright/test";

const list = ["https://www.youtube.com/playlist?list=PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi",
"https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD"];
    list.forEach(url => {
        test("scrapping of data in youtube playlist" + Date.now(), async({page})=>{
            await page.goto(url)
            //page.waitForNavigation()
            const videos = await page.$$("ytd-thumbnail-overlay-time-status-renderer span")
            console.log(videos.length)
            let totalMinutes = 0;
            await Promise.all(
                videos.map(async ele =>{
                    const duration = await ele.innerText();
                    const timeslices = duration.trim().split(":");
                    let minutes =0;
                    let seconds =0;
                    if(timeslices.length == 2){
                        minutes = Number(timeslices[0])
                        seconds = Number(timeslices[1])
                        minutes += seconds /60;
                    }else if(timeslices.length == 3){
                        let hours = Number(timeslices[0])
                        minutes = Number(timeslices[1])
                        seconds = Number(timeslices[2])
                        minutes += ((hours*60) + (seconds/60))
                    }
                        totalMinutes += minutes;
                })
            
            )
            console.log(totalMinutes);
            const hours = Math.floor(totalMinutes/60);
            const minutes = Math.trunc(totalMinutes % 60);
            const seconds = Math.trunc((totalMinutes - Math.trunc(totalMinutes))* 60)
            const title = await page.title();
            console.log(`${hours}h ${minutes}m ${seconds}s`);
        })
    });
