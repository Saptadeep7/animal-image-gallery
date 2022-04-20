const Filter = (props) => {
  const { currentFilter, changeFilter } = props;
  const changeFilterFn = (value) => {
    value && changeFilter(value);
  };
  return (
    <div className="filters">
      <div
        className={
          currentFilter === 'elephant' ? 'each-filter active' : 'each-filter'
        }
        onClick={() => changeFilterFn('elephant')}
      >
        Elephant
      </div>
      <div
        className={
          currentFilter === 'tiger' ? 'each-filter active' : 'each-filter'
        }
        onClick={() => changeFilterFn('tiger')}
      >
        Tiger
      </div>
      <div
        className={
          currentFilter === 'monkey' ? 'each-filter active' : 'each-filter'
        }
        onClick={() => changeFilterFn('monkey')}
      >
        Monkey
      </div>
      <div
        className={
          currentFilter === 'dog' ? 'each-filter active' : 'each-filter'
        }
        onClick={() => changeFilterFn('dog')}
      >
        Dog
      </div>
      <div
        className={
          currentFilter === 'marmoset' ? 'each-filter active' : 'each-filter'
        }
        onClick={() => changeFilterFn('marmoset')}
      >
        Marmoset
      </div>
    </div>
  );
};

export default Filter;
