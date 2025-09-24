// code-snippets.ts
export const code = {
  welcome: `// app/api/welcome/main.go
package main

import (
  "encoding/json"
  "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
  response := map[string]string{
    "message": "System online. Emmanuel (Noel) Owolabi’s portfolio API is live 🚀",
  }
  json.NewEncoder(w).Encode(response)
}

func main() {
  http.HandleFunc("/welcome", handler)
  http.ListenAndServe(":8080", nil)
}
`,

  aboutMe: `String superpower() => 
  "Transforming ideas into scalable apps with clean, reliable code.";

void main() {
  print("My superpower is: \${superpower()}");
}
`,

  skillsTools: `my_skills = [
  "Flutter", "Dart", "JavaScript", "TypeScript",
  "React", "Next.js", "Laravel", "Node.js", "NestJS",
  "PostgreSQL", "MySQL", "MongoDB", "Firebase",
  "AWS", "Docker", "CI/CD", "Git", "TailwindCSS"
]

def get_skills():
    return f"🚀 Skilled across mobile, web & cloud: {', '.join(my_skills)}." \
        if my_skills else "⚠️ Skills database not found!"

print(get_skills())
`,

  contact: `type Contact = {
  name: string;
  email: string;
  mobile: string;
  location: string;
  linkedIn: string;
  github: string;
};

const contactDetails: Contact = {
  name: "Noel Owolabi",
  email: "emmanuelowolabiadebayo@gmail.com",
  mobile: "+234 8156170216",
  location: "Lagos, Nigeria",
  linkedIn: "linkedin.com/in/owolabi-emmanuel/",
  github: "github.com/mcmhee",
};

function reachOut(details: Contact): void {
  console.log(\`📩 Reach me at: \${details.email}\`);
  console.log(\`🔗 LinkedIn: \${details.linkedIn}\`);
}

reachOut(contactDetails);
`,

  experience: `package main

import "fmt"

type Job struct {
  Role     string
  Company  string
  Duration string
  Skills   []string
}

func main() {
  jobs := []Job{
    {"Chief Technology Officer", "Resq-X", "Nov 2024 - Present", []string{"System Overhauls", "App Security", "Scalable Architecture", "Leading Teams"}},
    {"Software Engineering Consultant", "ROFCOM Energy", "Feb 2023 - 2024", []string{"AWS Magic", "Cloud Architecture", "Team Leadership", "Launching Products"}},
    {"Mobile Developer", "Treegar Inc.", "Jun 2022 - Present", []string{"Flutter", "iOS & Android Apps", "TDD", "Unit & Integration Testing"}},
    {"Full-Stack Developer", "Errand360", "Aug 2021 - Jul 2022", []string{"Laravel", "Flutter", "Fintech APIs", "AWS Services"}},
    {"Freelancer", "Upwork & Fiverr", "2020 - 2021", []string{"Client Communication", "Remote Collaboration", "Flutter Projects"}},
  }

  for _, job := range jobs {
    fmt.Printf("👨‍💻 %s at %s (%s)\\n", job.Role, job.Company, job.Duration)
    fmt.Printf("🚀 Skills: %v\\n\\n", job.Skills)
  }
}
`,

  projects: `class Project {
  final String name;
  final String type;
  final List<String> stack;

  Project(this.name, this.type, this.stack);

  void show() {
    print("📱 \$name — \$type [Stack: \${stack.join(", ")}]");
  }
}

void main() {
  final projects = [
    Project("Xpad", "Fintech App", ["Flutter"]),
    Project("Treegar", "Investment App", ["Flutter"]),
    Project("PennyTree", "Financial App", ["Flutter"]),
    Project("Errand360", "Logistics App", ["Flutter", "Laravel"]),
  ];

  projects.forEach((p) => p.show());
}
`,

  educationJourney: `education = {
    "degree": "B.Sc (Hons) Computer Science & Applications",
    "institution": "Lovely Professional University, India",
    "gpa": "Distinction",
    "certifications": ["Chartered Project Management - CIMP"]
}

print(f"🎓 Degree: {education['degree']}")
print(f"🏫 Institution: {education['institution']} (GPA: {education['gpa']})")

for cert in education['certifications']:
    print(f"📜 Certified in: {cert}")
`,
};
