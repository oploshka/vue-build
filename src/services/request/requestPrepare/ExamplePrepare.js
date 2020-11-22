// тут более грязная работа (что то вытащить из запроса и тд и тп...)

import ExamplePrepare from '../prepare/ExamplePrepare';

export default (response) => {
  for (let i = 0; i < response.content.length; i++) {
    response.content[i] = ExamplePrepare(response.content[i]);
  }
  return response;
};
