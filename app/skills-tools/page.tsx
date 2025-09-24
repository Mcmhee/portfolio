import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { mySkills } from "@/constants";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
   <PageHeaderHeading className="mt-2 text-muted-foreground">
  Crafting software like a well-built workshop tool.
</PageHeaderHeading>
<PageHeaderDescription>
  I approach engineering as a craft—designing systems, shaping mobile apps, 
  and refining cloud solutions with precision. With experience across 
  <strong>Flutter, Laravel, Node.js/NestJS, React, Next.js, and AWS</strong>, 
  I build products that are reliable, scalable, and user-focused.
</PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}

      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: "mr-2 size-4",
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <CodeSnippet title="skills.ts" code={code.skillsTools} />

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
