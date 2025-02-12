import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";


type Certification = (typeof RESUME_DATA)["certifications"][number]

interface CertificationList {
  certifications: readonly Certification[];
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function CertificationList({ certifications, className }: CertificationList) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {certifications.map((certification) => (
        <li key={certification.name}>
          <a href={certification.link} target="_blank" rel="noopener noreferrer">
            <Image src={certification.image} alt={certification.name} width={100} height={100} />
          </a>
        </li>
      ))}
    </ul>
  );
}

interface CertificationsProps {
    certifications: readonly Certification[];
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="skills-section">
        Certifications
      </h2>
      <CertificationList certifications={certifications} aria-labelledby="skills-section" />
    </Section>
  );
}
