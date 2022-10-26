const exampleList = require("./init/testExampleList");
const getId = require("@store/getId");

module.exports = {
  addExample(data) {
    // TODO: Определить как должна выглядеть модель
    exampleList.push({
      id: getId(),
      user: data.user || "Noname",
    });
  },

  deleteExampleByList(exampleIdList) {
    for (let  i = 0; i < exampleIdList.length; i++) {
      const exampleId = exampleIdList[i];
      const target = exampleList.find(item => item.id == exampleId);
      const index = exampleList.indexOf(target);
      exampleList.splice(index, 1);
    }
  },

};
