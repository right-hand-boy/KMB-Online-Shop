const { json } = require("express");
const fs = require("fs");
const http = require("http");
const url = require("url");

// data
const templOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const templProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const templCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
function replaceTemplalrtes(temp, product) {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%PRODUCTid%}/g, product.id);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%FROM%}/g, product.from);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "NOT-ORGANIC");
  return output;
}
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
// console.log(dataObj);
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //   overview
  if (pathname == "/" || pathname == "/overview") {
    const cardsHtml = dataObj.map((el) => replaceTemplalrtes(templCard, el));
    const output = templOverview.replace(/{%PRODUCTCARDS%}/g, cardsHtml);
    res.writeHead(200, { "content-type": "text/html" });
    res.end(output);
  }
  // products
  else if (pathname == "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(templProduct);
    console.log(query);
  }
  // api

  // 404
  else {
    res.writeHead(404, { "content-type": "html/text" });
    res.end("<h1>page not found</h1>");
  }
});
// server
server.listen("900", "127.0.0.1", () => {
  console.log("server succesfully started");
});
