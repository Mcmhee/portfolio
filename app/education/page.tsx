import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Education built the blueprint, the workshop made it real.
        </PageHeaderHeading>

        <PageHeaderDescription>
          My degree in{" "}
          <strong>Computer Science & Applications (B.Sc. Hons)</strong>
          from Lovely Professional University gave me the foundations of
          algorithms, system design, and problem-solving. Graduating with{" "}
          <strong>Distinction</strong>
          prepared me to think like an engineer.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond the classroom, I treated every project like a
          workshop—experimenting, debugging, and refining. Along the way,
          earning my
          <strong>Chartered Project Management (CIMP)</strong> certification
          helped me bridge theory with execution, sharpening both technical and
          leadership skills.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {/* B.Sc */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            B.Sc (Hons) Computer Science & Applications · Lovely Professional
            University, India
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Distinction
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2014 - 2018
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Graduated with distinction in Computer Science & Applications.
            Gained a strong foundation in programming, system architecture, and
            software engineering while working on hands-on projects and
            research.
          </p>
        </li>

        {/* Chartered Project Management */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Chartered Project Management (CIMP) · Chartered Institute of Project
            Management
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan. 2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Certified in project planning, execution, and leadership.
            Strengthened ability to manage cross-functional teams, deliver
            projects on time, and align technology initiatives with business
            goals.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
