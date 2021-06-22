const MonthNavigation: React.FC<{ monthName: string; year: number }> = (
  props
) => {
  const getPreviousMonthHandler = () => {
    console.log('Get previous month');
  }

  const getNextMonthHandler = () => {
    console.log('Get next month')
  }

  return (
    <nav>
      <button onClick={getPreviousMonthHandler}>{'<'}</button>
      <h1>
        {props.monthName} {props.year}
      </h1>  
      <button onClick={getNextMonthHandler}>{'>'}</button>
    </nav>
  );
};

export default MonthNavigation;
