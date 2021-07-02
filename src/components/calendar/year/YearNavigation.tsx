/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/store-hooks";
import { calendarActions } from "../../../store/calendar-slice";

interface RouteParams {
  year: string;
  month: string;
}

const YearNavigation = () => {
  const dispatch = useAppDispatch();
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;

  useEffect(() => {
      dispatch(
        calendarActions.setCurrent({
          monthNumber: 1,
          yearNumber: currentYearNumberParam,
        })
      );
  }, [currentYearNumberParam]);

  return (
    <nav>
      <Link to={`/year/${+currentYearNumberParam - 1}`} className="btn">
        {"<"}
      </Link>
      <h1>{currentYearNumberParam}</h1>
      <Link to={`/year/${+currentYearNumberParam + 1}`} className="btn">
        {">"}
      </Link>
    </nav>
  );
};

export default YearNavigation;
