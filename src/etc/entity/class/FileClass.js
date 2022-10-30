// import ParentClass from "@service/class/ParentClass";

const FileClass = function (option = {}) {
  
  const field = {
    id  : '',
    src : '',
    file: {},
  };
  
  const init = (option = {}) => {
    field.id   = option.id   || '';
    field.src  = option.src  || '';
    field.file = option.file || {};
  };
  
  init(option);
  
  this.getId   = ()     => { return field.id;   };
  this.getSrc  = ()     => { return field.src;  };
  this.getFile = ()     => { return field.file; };
  
  this.setSrc  = (src ) => { return field.src  = src;  };
  this.setFile = (file) => { return field.file = file; };
  
  
  this.toString = () => {
    return field.src;
  };
  this.toObject = () => {
    return Object.assign({}, field);
  };
  this.toJSON  = () => { return this.toObject(); }; // JSON.stringify
};

export default FileClass;
