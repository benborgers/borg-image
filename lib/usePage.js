import chrome from "chrome-aws-lambda"
import puppeteer from "puppeteer-core"

export default async () => {
  const isDev = process.env.NODE_ENV === "development"

  const devOptions = {
    args: [],
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true
  }

  const prodOptions = {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  }

  const options = isDev ? devOptions : prodOptions

  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()

  const closeBrowser = async () => {
    await browser.close()
  }

  return [page, closeBrowser]
}