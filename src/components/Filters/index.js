import { FILTER_OPTIONS } from '../../constants';
const Filter = (props) => {
  const { currentFilter, changeFilter } = props;
  const changeFilterFn = (value) => {
    value && changeFilter(value);
  };

  return (
    <div className="filters">
      <select
        className="filter-dropdown"
        onChange={(e) => changeFilterFn(e.target.value)}
        value={currentFilter}
      >
        {FILTER_OPTIONS.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {FILTER_OPTIONS.map((option, index) => {
        return (
          <div
            className={`each-filter ${
              currentFilter === option.value ? 'active' : ''
            }`}
            key={index}
            onClick={() => changeFilterFn(option.value)}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
