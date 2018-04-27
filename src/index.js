import Core from './core';
const create = ({
  engine,
}) => {
  return new Core({
    engine,
  })
}

export {
  create,
}