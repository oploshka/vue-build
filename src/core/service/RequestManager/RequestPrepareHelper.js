/**
 *
 * @param {RmGetListObject} obj
 * @returns {{filter: Object, pageNumber: number, pageSize: number, sort: Object}}
 * @constructor
 */
export const RequestPrepareGetList = (obj) => {
  const sort = obj.sort || {};
  const filter = obj.filter || {};

  if (!obj.notActiveLoad) {
    filter.isActive = { EQ: true };
  }

  return {
    sort: sort,
    filter: filter,
    pageNumber: obj.page || 0,
    pageSize: obj.size || 10,
  };
};

export const RequestPrepareDynFieldList = (obj) => {
  const dynField = [];
  for (let key in obj) {
    if (key.startsWith('DIN_FIELD::')) {
      let id = parseInt(key.substring(11));
      // TODO: fix
      let value = obj[key];
      if (value === null || value === undefined) {
        value = '';
      }
      value = value.toString();
      dynField.push({ id: id, value: value });
    }
  }
  return dynField;
};

export const DateToBackFormat = (dateTime) => {
  return dateTime ? dateTime.format('YYYY-MM-DD') : null;
};
export const DateTimeToBackFormat = (dateTime) => {
  return dateTime ? dateTime.format('YYYY-MM-DDThh:mm:ss') : null;
};
