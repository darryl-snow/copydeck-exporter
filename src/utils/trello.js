const Trello = require("node-trello");

const trello = new Trello("5e2338229bbfde5aa814186f5fcb4551", "2e13495ac57cea7cffaa989ba654045ea58c46d953a5a91afc5353cd7c91beba");

const getList = (app) => {
  switch(app) {
    case "fordpass":
      return "59649f0ea7325436d5236576";
    case "lincolnway":
      return "59649f1991e8fce2e8d57c69";
  }
}

export const getCards = (app) => {
  const list = getList(app);
  return trello.get(`/1/lists/${list}/cards?fields=name,desc,shortUrl`, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
