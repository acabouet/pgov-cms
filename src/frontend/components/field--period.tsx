export function FieldPeriod({startTime, endTime}) {
  if (!startTime) {
    return (
      <span className={`padding-x-105 font-sans-3xs`}>
        default
      </span>
    )
  }
  const startDate = new Date(startTime);
  const endDate = new Date(endTime)
  const dateOptions: Intl.DateTimeFormatOptions = {year: "numeric"}
  return (
    <span className={`padding-x-105 font-sans-3xs`}>
      {startDate.toLocaleDateString('en-US', dateOptions)}-{endDate.toLocaleDateString('en-US', dateOptions).substr(-2)}
    </span>
  );
}

