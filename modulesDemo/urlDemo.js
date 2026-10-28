import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObject = new URL(urlString);

// console.log(urlObject);

// console.log(url.format(urlObject));

// console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.searchParams.get("q"));
urlObject.searchParams.append("limit", 5);
urlObject.searchParams.delete("q");
console.log(urlObject.searchParams);
