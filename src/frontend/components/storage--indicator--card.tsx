import Link from 'next/link'
import { NodePlanProps } from "lib/types";
import Image from "next/image";
import AgencyInfoBox from './agency-info-box';
import { FieldGoalType } from './field--goal-type';
import { FieldPeriod } from './field--period';
import IndicatorChart from './indicator-chart';

export function StorageIndicatorCard({ goal, ...props }: any) {
  const { description, objective } = goal;
  // console.log(goal)
  const chartData = objective.indicators.find((indicator) => (indicator.id == goal.id));
  // console.log(agency);
  // const { acronym: agencyAcronym, logo: agencyLogo, title: agencyTitle } = agency;
  return (
    <div className="goal-card padding-1">
      <Link href={objective.goal.path}>
      <div className="padding-y-1 bg-white usa-card margin-bottom-0">
        <div className="usa-card__container" >
          <div className="grid-row flex-justify padding-top-1 padding-x-2">
            <FieldGoalType field_goal_type={'indicator'} />
            <FieldPeriod
              startTime={objective.goal.plan.administration.dateRange.start.time}
              endTime={objective.goal.plan.administration.dateRange.end.time}
            />
          </div>
          <div className="usa-card__header">
            <h4 className="usa-card__heading">{description.value}</h4>
          </div>
          <div className="usa-card__body grid-row flex-column flex-align-center">
            <IndicatorChart
              names={chartData.dates}
              values={chartData.values}
              targetValues={chartData.targetValues}
              size={"small"}
            />
          </div>
          <div className="usa-card__footer padding-bottom-1 border-top-2px border-base-lighter">
            <AgencyInfoBox
              title={objective.goal.plan.agency.title}
              logo={objective.goal.plan.agency.logo}
              acronym={objective.goal.plan.agency.acronym}
            />
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
