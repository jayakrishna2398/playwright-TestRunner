const url = "https://www.amazon.in/Silver-Storage-Additional-Exchange-Offers/dp/B08LRDK8Z5?ref_=Oct_DLandingS_D_c7250b1f_61&smid=A14CZOWI0VEHLG"

import {test} from "@playwright/test";
import * as auth from "../auth2.json"

const nodeMailer = require("nodemailer")
test("Amazon price notification", async({page})=>{
    await page.goto(url);
    const rate = await page.$eval("#priceblock_dealprice", el=> el.textContent);
    const currentPrice = rate?.replace('₹', '')
    console.log(currentPrice)
    sendEmailNotification(currentPrice)
})
    function sendEmailNotification(currentPrice: string | undefined){
        const { MY_EMAIL, MY_PASS } = process.env;
        console.log(MY_EMAIL, MY_PASS);
        const transporter = nodeMailer.createTransport({
            auth: {
                user: MY_EMAIL,
                pass: MY_PASS
            }
    })
    transporter.sendMail({
        from: 'MY_EMAIL',

        // Comma separated list of recipients
        to: 'jayakrishnaarasu34@gmail.com',
        subject:'Amazon price notification',
        text: `The price of the product ${url} has dropped to ${currentPrice}`,
        html: `<p>The price of the product has dropped to ${currentPrice}</p><a href =${url} >open this link<a>`
    },(err:any,info:any)=>{
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}

