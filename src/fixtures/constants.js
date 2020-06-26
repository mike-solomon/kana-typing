const aRow = {
  あ: ["a"],
  い: ["i"],
  う: ["u"],
  え: ["e"],
  お: ["o"],
};

const kaRow = {
  か: ["ka"],
  き: ["ki"],
  く: ["ku"],
  け: ["ke"],
  こ: ["ko"],
};

const gaRow = {
  が: ["ga"],
  ぎ: ["gi"],
  ぐ: ["gu"],
  げ: ["ge"],
  ご: ["go"],
};

const kyaRow = {
  きゃ: ["kya"],
  きゅ: ["kyu"],
  きょ: ["kyo"],
};

const gyaRow = {
  ぎゃ: ["gya"],
  ぎゅ: ["gyu"],
  ぎょ: ["gyo"],
};

const saRow = {
  さ: ["sa"],
  し: ["shi"],
  す: ["su"],
  せ: ["se"],
  そ: ["so"],
};

const zaRow = {
  ざ: ["za"],
  じ: ["ji"],
  ず: ["zu"],
  ぜ: ["ze"],
  ぞ: ["zo"],
};

const shaRow = {
  しゃ: ["sha"],
  しゅ: ["shu"],
  しょ: ["sho"],
};

const jaRow = {
  じゃ: ["ja"],
  じゅ: ["ju"],
  じょ: ["jo"],
};

const taRow = {
  た: ["ta"],
  ち: ["chi"],
  つ: ["stu"],
  て: ["te"],
  と: ["to"],
};

const daRow = {
  だ: ["da"],
  ぢ: ["ji", "dji", "jyi"],
  づ: ["dzu", "zu"],
  で: ["de"],
  ど: ["do"],
};

const chaRow = {
  ちゃ: ["cha"],
  ちゅ: ["chu"],
  ちょ: ["cho"],
};

const dyaRow = {
  ぢゃ: ["dya"],
  ぢゅ: ["dyu"],
  ぢょ: ["dyo"],
};

const hiraganaToValidRomajiMap = {
  ...aRow,
  ...kaRow,
  ...gaRow,
  ...kyaRow,
  ...gyaRow,
  ...saRow,
  ...zaRow,
  ...shaRow,
  ...jaRow,
  ...taRow,
  ...daRow,
  ...chaRow,
  ...dyaRow,
};

module.exports = {
  hiraganaToValidRomajiMap,
};
