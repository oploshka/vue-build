
const storeExample = require('@store/example');

module.exports = {
    'get-all': function exampleGetAll(data) {
        return {
            list: storeExample.getExampleList(data)
        };
    },
    'get': function (data) {
      return storeExample.getExample(data);
    },
    'add': function (data) {
        storeExample.addExample(data);
        return {};
    },
    'update': function ({ id, data }) {
        return storeExample.updateExampleById(id, data);
    },
    'delete': (data) => {
        storeExample.deleteExampleByList(data.listId);
        return {};
    }
};
