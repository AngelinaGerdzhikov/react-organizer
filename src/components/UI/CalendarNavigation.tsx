interface FuncProps {
  title: string;
  onPreviousClick(): void;
  onNextClick(): void;
}

const CalendarNavigation: React.FC<FuncProps> = (props) => {
  return (
    <nav>
      <button onClick={props.onPreviousClick}>{"<"}</button>
      <h1>{props.title}</h1>
      <button onClick={props.onNextClick}>{">"}</button>
    </nav>
  );
};

export default CalendarNavigation;
