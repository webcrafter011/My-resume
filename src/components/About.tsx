import React from 'react';
import {
  FlaskConical,
  Flame,
  Microscope,
  Beaker,
  FileText,
  Code2,
  Database,
  GitBranch,
  Sparkles,
  ShieldCheck,
  Atom,
  Zap,
  Users,
  LucideIcon, // Import the type for Lucide icons
} from 'lucide-react';

//=========== TYPE DEFINITIONS ===========//

// Type for an individual interactive skill with an icon
interface InteractiveSkill {
  name: string;
  icon: LucideIcon;
}

// Type for a group of skills listed by category
interface SkillGroup {
    category: string;
    items: string[];
}

// Type for a feature card with an icon and description
interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}


//=========== INTERACTIVE SKILLS COMPONENT ===========//

// Data for the interactive skills grid
const interactiveSkillsData: InteractiveSkill[] = [
  { name: 'React.js', icon: Beaker },
  { name: 'JavaScript (ES6+)', icon: Flame },
  { name: 'Node.js + Express', icon: FlaskConical },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Sparkles },
  { name: 'REST APIs', icon: Microscope },
  { name: 'Git / GitHub', icon: GitBranch },
  { name: 'Clean Code', icon: FileText },
  { name: 'Responsive Design', icon: Code2 },
  { name: 'Security Best Practices', icon: ShieldCheck },
];

const InteractiveSkills: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {interactiveSkillsData.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-bb-dark/50 border border-bb-green/20 rounded-xl p-4 hover:scale-105 transform transition duration-300 hover:border-bb-yellow hover:bg-bb-gray/50"
          >
            <Icon className="h-8 w-8 text-bb-green mb-2 transition-transform duration-300 group-hover:animate-spin" />
            <span className="text-sm text-gray-300 font-mono">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};


//=========== MAIN ABOUT COMPONENT ===========//

const App: React.FC = () => {
    // Data for the main skills list
    const skills: SkillGroup[] = [
        { category: "Frontend Chemistry", items: ["React", "TypeScript", "Three.js", "Next.js", "Tailwind CSS"] },
        { category: "Backend Formula", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL"] },
        { category: "Lab Equipment", items: ["Three.js", "React Three Fiber", "Blender", "WebGL", "GSAP"] },
        { category: "Distribution Network", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
    ];

    // Data for the feature cards
    const features: Feature[] = [
        { icon: Beaker, title: "MERN Stack Chemist", description: "Mixing MongoDB, Express.js, React, and Node.js with the precision of a master chemist." },
        { icon: Atom, title: "3D Molecular Structures", description: "Creating immersive 3D web experiences using Three.js and WebGL with atomic precision." },
        { icon: Zap, title: "99.1% Pure Performance", description: "Optimizing applications for maximum efficiency with code splitting and lazy loading." },
        { icon: Users, title: "Empire Building", description: "Scaling applications and teams with modern workflows and collaborative methodologies." },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-bb-dark via-bb-gray to-bb-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 font-oswald tracking-wider">
                        <span className="bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange bg-clip-text text-transparent">
                            THE FORMULA
                        </span>
                    </h2>
                    <div className="text-xl text-gray-300 max-w-4xl mx-auto font-mono space-y-4">
                        <p>Chemistry is the study of change. – Walter White</p>
                        <p>
                            I'm Manuj Chaudhari, a MERN stack developer and student of Computer Applications.
                            I use my interest in clean code, design, and logic to build scalable and responsive web apps.
                        </p>
                        <p>
                            I believe good code is like a perfect formula — tested, balanced, and built to last.
                        </p>
                    </div>
                </div>

                {/* Project Video Slider */}
                {/* <ProjectVideoSlider /> */}

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Origin Story & Interactive Skills */}
                    <div className="bg-bb-gray/50 border border-bb-green/30 rounded-xl p-8">
                        <div className="flex items-center mb-6">
                            <FlaskConical className="h-8 w-8 text-bb-green mr-3" />
                            <h3 className="text-2xl font-semibold font-oswald text-bb-green">
                                MY ORIGIN STORY
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
                            I'm currently pursuing my BCA and have a strong interest in MERN stack development.
                            I started building projects to improve my skills and learn by doing.
                        </p>
                        <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                            From cloning websites to creating full-stack apps, every project helps me grow.
                            My goal is to write clean, efficient code and build apps that actually solve problems.
                        </p>

                        <div className="bg-gradient-to-r from-bb-green/10 to-bb-yellow/10 p-6 rounded-xl border border-bb-green/30">
                            <h4 className="text-lg font-semibold mb-3 text-bb-yellow font-oswald">
                                INTERACTIVE LAB EQUIPMENT
                            </h4>
                            <p className="text-gray-300 text-sm mb-4 font-mono">
                                These tools and technologies represent the skills I've been learning and using in my projects.
                            </p>
                            <InteractiveSkills />
                        </div>
                    </div>

                    {/* Right Column: Feature Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 bg-bb-gray/30 rounded-xl border border-bb-green/20 hover:border-bb-yellow hover:bg-bb-gray/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Icon className="h-10 w-10 text-bb-green mb-4" />
                                    <h4 className="text-lg font-semibold mb-2 font-oswald text-bb-yellow">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-mono">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Chemical Composition Section */}
                <div>
                    <h3 className="text-3xl font-semibold text-center mb-8 font-oswald text-bb-green">
                        CHEMICAL COMPOSITION
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup) => (
                            <div
                                key={skillGroup.category}
                                className="p-6 bg-bb-gray/20 rounded-xl border border-bb-green/20 hover:border-bb-yellow transition-all duration-300"
                            >
                                <h4 className="text-lg font-semibold mb-4 text-bb-yellow font-oswald">
                                    {skillGroup.category}
                                </h4>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <div
                                            key={skill}
                                            className="px-3 py-2 bg-bb-dark/50 rounded-full text-sm text-gray-300 hover:bg-bb-green/20 hover:text-bb-green transition-colors duration-200 font-mono border border-bb-green/10"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Quote Section */}
                <div className="text-center mt-16">
                    <div className="bg-bb-gray/30 border border-bb-yellow/30 rounded-xl p-8 max-w-2xl mx-auto">
                        <p className="text-xl text-bb-yellow font-mono mb-4">
                            I am the one who codes!
                        </p>
                        <p className="text-gray-300 font-mono text-sm">
                            If you're looking for someone who's learning fast and building cool things, let's connect.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App;
