export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { getGitHubStatsServerAction } from "../actions/getGitHubStatsServerAction";
import GitHubGraphs from "./GitHubGraphs";
import Pager from "@/components/pager";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-105 ${className}`}
  >
    <div className="card-content">
      <h3 className="text-lg font-semibold tracking-tight card-title text-muted-foreground">
        {title}
      </h3>
      <span className="text-5xl font-bold leading-tight tracking-tight card-value">
        {value}
      </span>
    </div>
  </div>
);

const Stats = async () => {
  const githubStats = await getGitHubStatsServerAction();

  const githubStatCards = [
    {
      title: "Hireable",
      value: githubStats.hireable && "Yes",
      className: githubStats.hireable && "bg-green-500/20",
    },
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Followers",
      value: githubStats.followers,
    },
    {
      title: "Following",
      value: githubStats.following,
    },
    {
      title: "Current Company",
      value: githubStats.company && "Why Not Yours",
    },
    {
      title: "Location",
      value: githubStats.location && "LAGOS",
    },
  ];

  return (
    <>
      {/* About this portfolio */}
      <PageHeader>
        <PageHeaderHeading>About this portfolio</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about this portfolio website
        </PageHeaderDescription>
      </PageHeader>

      {/* About GitHub Stats */}
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      {/* GitHub Graphs */}
      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <GitHubGraphs />
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={
                card.value ?? (card.title == "Location" ? "LAGOS" : "NOT FOUND")
              }
              className={card.className}
            />
          ))}
        </div>
      </div>

      <Pager
        prevHref="/contact"
        nextHref="/"
        prevTitle="Contact"
        nextTitle="Home"
      />
    </>
  );
};

export default Stats;
