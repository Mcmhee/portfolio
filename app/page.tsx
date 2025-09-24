import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Noel Owolabi</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Turning complex problems into simple, scalable software.
        </PageHeaderHeading>
        <PageHeaderDescription>
           I am a Senior Software Engineer with over 6+ years of experience 
            designing and shipping web, mobile, and cloud-based solutions. 
            I specialize in Flutter for mobile, Laravel and Node.js for backend, 
            and modern frontend frameworks like React and Next.js. 
            Having worked as both a consultant and CTO, I thrive at bridging 
            business needs with technical execution — from architecting systems 
            on AWS to delivering user-centric apps that scale. 
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
