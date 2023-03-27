// const puppeteer = import("puppeteer");

// const username = document.getElementById("username").value;

// async function scraperProduct(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newePage();
//   await page.goto(url);

//   const [el] = await page.$x(
//     '//*[@id="pageContent"]/div[4]/div/div[7]/div[1]/div[1]/div[1]'
//   );
//   const src = await el.getProperty("src");
//   const srcTxt = await src.jsonValue();
//   console.log({ srcTxt });
// }

// scraperProduct(`https://codeforces.com/profile/${username}`);
