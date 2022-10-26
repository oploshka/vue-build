/**
 * @param {String} str
 * @returns {DateTime}
 */
export const FieldToDateTime = (str) => {
  return str ? new DateTime.utc(str).local() : null;
};

