import './app-filter.css'

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники', colorRed: false},
    {name: 'rise', label: 'На повышение', colorRed: false},
    {name: 'moreThan1000', label: 'З/П больше 1000$', colorRed: true},
  ];

  const buttons = buttonsData.map(({name, label, colorRed}) => {

    const active = props.filter === name;
    const clazz = active ? "btn btn-light" : "btn-outline-light";
    const style = colorRed ? {color: 'red'} : null
    
    return (
      <button 
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}>
        {label}
      </button>
    )
  })
  
  return (
    <div className="btn-group">
      {buttons}
      {/* <button 
        className="btn btn-light"
        type="button">
          Все сотрудники
      </button>
      <button 
        className="btn btn-outline-light"
        type="button">
          На повышение
      </button>
      <button 
        className="btn btn-outline-light"
        type="button">
          З/П больше 1000$
      </button> */}
    </div>
  )
}

export default AppFilter;