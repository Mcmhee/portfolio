import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Noel</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just code—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a dedicated Software Engineer with over 6+ years of experience
          building scalable web, mobile, and cloud-based applications. My
          journey began with a curiosity for solving real-world problems, which
          has grown into a passion for architecting user-centric, reliable, and
          future-proof solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Skilled across technologies like{" "}
          <strong>
            Flutter, Laravel, Node.js/NestJS, React, Next.js, and AWS
          </strong>
          , I thrive at bridging frontend, backend, and cloud. From leading
          teams as a CTO to delivering production-ready mobile apps, I bring
          both technical depth and product-focused execution.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I value collaboration, mentorship, and creative
          problem- solving. I aim to contribute to impactful projects that not
          only perform well at scale but also make a meaningful difference in
          users’ lives.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
