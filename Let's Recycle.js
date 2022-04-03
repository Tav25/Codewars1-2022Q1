/*
Задание
Вам будет дан список объектов. Каждый объект имеет тип, материал и, возможно, второй материал.
 Существующие материалы: бумага, стекло, органика и пластик.

Ваша задача - рассортировать эти объекты по 4 контейнерам для вторсырья в соответствии с их материалом (и вторым материалом, если он есть), перечислив типы объектов, которые должны попасть в эти контейнеры.

Примечания
Контейнеры должны располагаться в том же порядке, что и материалы, перечисленные выше.
Все корзины должны быть перечислены в выводе, даже если некоторые из них пусты.
Если объект сделан из двух материалов, его тип должен быть указан в обоих соответствующих корзинах.
Порядок следования типов в каждой корзине должен быть таким же, как порядок следования соответствующих объектов во входном списке.
Пример

input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]


paper, glass, organic,plastic
*/

function recycle(array) {
  let recycleArray = [[], [], [], []];
  array.forEach((el) => {
    if (el.material === "paper" || el.secondMaterial === "paper") {
      //   console.log(el);
      recycleArray[0].push(el.type);
    }
    if (el.material === "glass" || el.secondMaterial === "glass") {
      //   console.log(el);
      recycleArray[1].push(el.type);
    }
    if (el.material === "organic" || el.secondMaterial === "organic") {
      //   console.log(el);
      recycleArray[2].push(el.type);
    }
    if (el.material === "plastic" || el.secondMaterial === "plastic") {
      //   console.log(el);
      recycleArray[3].push(el.type);
    }
  });
  return recycleArray;
}

const input = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(recycle(input));

//!
const recyclerMaterials = ["paper", "glass", "organic", "plastic"];

function recycle(objects) {
  return recyclerMaterials.map((m) =>
    objects
      .filter((o) => o.material == m || o.secondMaterial == m)
      .map((o) => o.type)
  );
}

function recycle(arr) {
  let paper = [],
    glass = [],
    organic = [],
    plastic = [];

  arr.forEach((obj) => {
    if (obj.material === "paper" || obj.secondMaterial === "paper")
      paper.push(obj.type);
    if (obj.material === "glass" || obj.secondMaterial === "glass")
      glass.push(obj.type);
    if (obj.material === "organic" || obj.secondMaterial === "organic")
      organic.push(obj.type);
    if (obj.material === "plastic" || obj.secondMaterial === "plastic")
      plastic.push(obj.type);
  });

  return [paper, glass, organic, plastic];
}
