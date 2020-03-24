import usePage from "../lib/usePage"

export default async (res, html) => {
  const [page, closeBrowser] = await usePage()

  const fullHtml = "data:text/html," + html

  await page.setViewport({
    // Facebook's recommended og:image dimensions
    width: 1200,
    height: 630
  })

  await page.goto(fullHtml, { waitUntil: "networkidle0" })

  const screenshot = await page.screenshot()

  await closeBrowser()

  res.setHeader("content-type", "image/png")
  res.setHeader("content-disposition", `inline; filename="borg-image.png"`)
  res.setHeader("cache-control", "s-maxage=31536000") // cache for one year
  res.send(screenshot)
}