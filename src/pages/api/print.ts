// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import edgeChromium from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';

// const generatePDF = async (html = '') => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.setContent(html, { waitUntil: 'networkidle0' })
//   const pdfBuffer = await page.pdf({ format: 'a4' })

//   await page.close()
//   await browser.close()

//   return pdfBuffer
// };

const setDomainLocalStorage = async (
  browser: any,
  url: string,
  values: any
) => {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (r: any) => {
    r.respond({
      status: 200,
      contentType: 'text/plain',
      body: 'tweak me.',
    });
  });
  await page.goto(url);
  await page.evaluate((values: any) => {
    for (const key in values) {
      localStorage.setItem(key, values[key]);
    }
  }, values);
  await page.close();
};

const generatePDFFromUrl = async (url = '') => {
  // Edge executable will return an empty string locally.
  const executablePath = await edgeChromium.executablePath;

  let browser;
  if (!executablePath) {
    const puppeteerDev = await import('puppeteer');
    // throw new Error('BOUM!');
    browser = await puppeteerDev.launch();
  } else {
    browser = await puppeteer.launch({
      executablePath,
      args: edgeChromium.args,
      headless: false,
    });
  }

  // set localstorage for default theme
  const localStorage = { theme: 'light' };
  await setDomainLocalStorage(browser, url, localStorage);

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({
    format: 'a4',
    scale: 0.52,
    margin: {
      // top: '1cm',
      top: '0cm',
    },
  });

  await page.close();
  await browser.close();

  return pdfBuffer;
};

export default async function printPdf(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pdf = await generatePDFFromUrl(req.query.url as string);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', pdf.length);
  res.send(pdf);
}

// export default async function printPdf(req: NextApiRequest, res: NextApiResponse) {
//   const pdf = await generatePDF(req.body);
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Length', pdf.length);
//   res.send(pdf);
// }
