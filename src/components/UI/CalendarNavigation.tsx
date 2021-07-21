import Button from "../UI/Button";
import classes from "./CalendarNavigation.module.css";
import { ReactComponent as LeftArrowSvg } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/icons/arrow-right.svg';

interface FuncProps {
  title?: string;
  onPreviousClick(): void;
  onNextClick(): void;
}

const CalendarNavigation: React.FC<FuncProps> = (props) => {
  return (
    <nav className={classes["calendar-nav"]}>
      <Button
        className={`
          ${classes["calendar-nav__arrow"]}
          ${classes["calendar-nav__arrow--left"]}
        `}
        onClick={props.onPreviousClick}>
          <LeftArrowSvg />
      </Button>
      {props.title && <h1 className={classes['calendar-nav__title']}>{props.title}</h1>}
      {props.children}
      <Button
        className={`
          ${classes["calendar-nav__arrow"]}
          ${classes["calendar-nav__arrow--right"]}
        `}
        onClick={props.onNextClick}>
          <RightArrowSvg />
      </Button>
    </nav>
  );
};

export default CalendarNavigation;
