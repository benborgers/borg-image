import render from "../lib/render"

export default async (req, res) => {
  const title = req.query.title || "Ben Borgers"

  const html = `
    <head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      <style>
        * {
          font-family: "Inter";
          margin: 0;
        }

        body {
          height: 100vh;
          display: grid;
          place-items: center center;
          background-color: black;
          padding: 0 128px;
        }

        .logo {
          font-weight: 500;
          background-color: hsl(0, 0%, 90%);
          color: black;
          font-size: 32px;
          padding: 4px 16px;
          border-radius: 99px;
          max-width: max-content;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 70px;
          font-weight: 700;
          color: white;
          max-width: max-content;
          line-height: 1.25;
        }

        ${title.length < 15 ? `
          .logo {
            margin: 0 auto;
          }

          h1 {
            font-size: 100px;
          }
        ` : ""}
      </style>
    </head>

    <body>
      <main>
        ${title !== "Ben Borgers" ? `<p class="logo">Ben Borgers</p>` : ""}
        <h1>${title}</h1>
      </main>
    </body>
  `

  await render(res, html)
}