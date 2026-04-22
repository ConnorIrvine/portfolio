import { Text, Button, AlertDialog, Flex, Badge } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import oilstainlabsimg from '../assets/oilstainlabscfd.png';
import fsae from '../assets/fsae1.png';
import lyriq from '../assets/lyriq1.png';
import lyriqcool from '../assets/lyriqcool.png';
import lyriqcals from '../assets/lyriqcals.png';
import scalar from '../assets/scalar1.png';
import leetbuddy from '../assets/leetbuddy.png';
import heatsink from '../assets/heatsink.png';
import pacemaker from '../assets/pacemaker.png';
import { DoubleArrowRightIcon, LayersIcon } from '@radix-ui/react-icons';


const sharedBackground = 'linear-gradient(135deg, var(--red-5), var(--red-9))';
const sharedTextColor = 'white';

const projects = [
{
  title: 'HF-11 Underbody Aero Design',
  image: oilstainlabsimg,
  description: 'Designed and optimized underbody aerodynamics of the HF-11 Hypercar with venturi channels/flaps using CFD and wind tunnel validation.',
  tag: 'Rhino, Ansys Fluent, CFD, Aerodynamic Design',
  link: 'https://drive.google.com/file/d/1BtjN2IYbhY-BlZYUS-iY8AX5fj5Cyl-W/view?usp=sharing', 
},
    {
    title: 'SCR1 Race Telemetry Platform',
    image: scalar,
    description:
      'Developed a real-time telemetry platform, including streaming processing pipelines, cloud storage, customizable dashboards, and plug-n-play hardware & wiring harnesses.',
    tag: 'Python, Kafka, Kubernetes, CANBus, Docker, Azure SQL, MQTT, Quix',
    link: 'https://drive.google.com/file/d/1Awff38ZsXIIIJX95C6_uSioEuL-ADvmQ/view?usp=sharing/'
  },
  {
    title: 'Cadillac Lyriq Aero Package',
    image: lyriq,
    description:
      'Designed aero components and validated drag reduction through CFD. Developed automation scripts to increase efficiency in the CFD workflow.',
    tag: 'Siemens NX, Ansys Fluent, CFD, Python, Aerodynamic Design',
    link: 'https://www.macecocar.ca/'
  },
  {
    title: 'Formula Student Aero Genetic Algorithm',
    image: fsae,
    description:
      'Developing genetic algorithms to automate and optimize aero component setups, including AoA, position, and scale.',
    tag: 'OpenFOAM, Python, CFD, Genetic Programming',
    link: 'https://github.com/brianmano/openfoamautomation'
  },
    {
    title: 'Cadillac Lyriq Internal Thermal System',
    image: lyriqcool,
    description:
      'Designed and integrated an internal thermal system, decreasing ambient temperatures of rear computer modules. Validated through thermal fluid studies.',
    tag: 'Siemens NX, Thermal Fluids',
    link: 'https://drive.google.com/file/d/1MycHKIV_fjeRdH1LXnZ22IIs5Ie6UfUq/view?usp=sharing'
  },
      {
    title: 'Cadillac Lyriq Control System Validation & Fault Analysis',
    image: lyriqcals,
    description:
      'Contributed towards a root-cause analysis for low RPM torque bogging of an EV motor using a data-driven process to prove control system accuracy and isolated third-part defects.',
    tag: 'Matlab Simulink, CANApe, AVL',
    link: 'https://www.macecocar.ca/'
  },
  //       {
  //   title: 'EcoLift - Automated Robotic Spotter',
  //   image: lyriqcals,
  //   description:
  //     'Designed and manufactured an automated robotic spotter that detects failure modes in power lifts and assists users to safety.',
  //   tag: 'SolidWorks, FEA, Manufacturing, Control Systems',
  //   link: 'https://www.macecocar.ca/'
  // },

        {
    title: 'CPU Heatsink Design',
    image: heatsink,
    description:
      'Designed a custom CPU Heatsink using natural convection to reduce maximum temperatures compared to a factory design by 33%.',
    tag: 'Fusion360, Thermal Analysis, Material Design, Manufacturing',
    link: 'https://drive.google.com/file/d/1i6HKiGWrDh3BUJud11zgsxfElHyp_LHL/view?usp=sharing', 
  },
    {
    title: 'LeetBuddy',
    image: leetbuddy,
    description:
      'Developed a Google Chrome Extension (3000+ active users) leveraging Generative AI to provide real-time, context-aware support for LeetCode problems to personalize software interview preparation.',
    tag: 'React, Tailwind, Express.js, Generative AI, Redis, Docker',
    link: 'https://chromewebstore.google.com/detail/leetbuddy-your-ai-powered/nlemdecocfoaimdbfgpilfgdmcllhphn'
  },
      {
    title: 'Pacemaker Project',
    image: pacemaker,
    description:
      'Engineered a modern pacemaker, using Simulink code logic with a user-friendly GUI, and using an NXP FRDM K64F for serial communication.',
    tag: 'Python, Simulink, Serial Communication, NXP FRDM K64F Board',
    link: 'https://github.com/brianmano/Pacemaker_Project', 
  },

];

const Projects = () => {
  return (
    <div
      className="grid gap-4 w-full h-full p-3"
      style={{
        gridTemplateRows: '0.1fr 1fr',
        display: 'grid',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div className="flex items-center justify-start pl-4">
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.5rem, 2vw, 3rem)',
            fontWeight: 600,
            background: sharedBackground,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          as="div"
        >
          Projects
        </Text>
      </div>

      {/* Scrollable Grid Container */}
      <div
        className="custom-scroll projects-grid"
        style={{
          overflowY: 'auto',
          paddingRight: '0.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          maxHeight: '80vh',
          justifyItems: 'center',
        }}
      >
        {projects.map((project, index) => (
          <AlertDialog.Root key={index}>
            <AlertDialog.Trigger asChild>
                <div
                className="hover-scale"
                style={{
                    position: 'relative',
                    background: sharedBackground,
                    color: sharedTextColor,
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateRows: 'auto auto auto', // Allow rows to auto size
                    width: '100%',
                    minHeight: '240px', // Increased minHeight
                    padding: '1rem',
                    gap: '0.5rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    boxSizing: 'border-box',
                }}
                >
                {/* Top Row: Image + Title & Description */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                    <div
                    style={{
                        width: '40%',
                        aspectRatio: '1.4',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                    >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                <Text
                as="div"
                style={{
                    fontSize: 'clamp(0.3rem, 0.8vw, 1.25rem)', // Reasonable clamp
                    fontWeight: 700,
                    lineHeight: 1.4, // More breathing room
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                }}
                >
                {project.title}
                </Text>

                <Text
                as="div"
                style={{
                    fontSize: 'clamp(0.4rem, 0.6vw, 1rem)', // Adjusted clamp
                    opacity: 0.85,
                    marginTop: '0.25rem',
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                }}
                >
                {project.description}
                </Text>

                  </div>
                </div>

                {/* Bottom Row: Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '0.3srem',
                  }}
                >
                  {project.tag.split(',').map((tagItem, tagIndex) => (
                    <Badge
                    key={tagIndex}
                    color="ruby"
                    variant="soft"
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(0.4rem, 0.6vw, 2rem)',
                        color: 'var(--red-11)',
                        fontWeight: 300,
                    }}
                    >
                    {tagItem.trim()}
                    </Badge>
                  ))}
                </div>

                {/* View More Button (absolute position) */}
                <div
                style={{
                    alignSelf: 'flex-end',
                    backgroundColor: 'rgba(17, 17, 17, 0.3)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                }}
                >
                View <DoubleArrowRightIcon />
                </div>
              </div>
            </AlertDialog.Trigger>

            {/* AlertDialog Content */}
                <AlertDialog.Content
                style={{
                    maxWidth: 600,
                    width: '90vw',
                    maxHeight: '80vh',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    backgroundColor: '#eeeeee',
                    color: '#000',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
                >
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    }}
                />
                <AlertDialog.Title
                    style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    }}
                >
                    {project.title}
                </AlertDialog.Title>
                <Text
                    style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    }}
                >
                    {project.description}
                </Text>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tag.split(',').map((tagItem, tagIndex) => (
                    <Badge style={{ fontFamily: 'Inter, system-ui, sans-serif' }} key={tagIndex} color="gray" variant="soft">
                        {tagItem.trim()}
                    </Badge>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                    }}
                >
                    <Button
                    className="project-details-button"
                    style={{
                        background: 'var(--amber-9)',
                        color: 'black',
                        display: 'flex',
                        gap: '0.4rem',
                        padding: '1rem 2rem', // Larger padding
                        fontSize: '1rem',           // Larger font
                        alignItems: 'center',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: 'none',
                        borderRadius: '0.5rem',
                    }}
                    >
                    <LayersIcon />
                        Click Here For Project Details
                    </Button>
                </a>

                <Flex justify="end" mt="auto">
                    <AlertDialog.Cancel>
                    <Button
                        className="close-button"
                        style={{
                        background: 'var(--red-8)',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: 'none',
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        }}
                    >
                        <Text style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Close</Text>
                    </Button>
                    </AlertDialog.Cancel>
                </Flex>
                </AlertDialog.Content>

                        </AlertDialog.Root>
                        ))}
      </div>

      {/* Enhanced CSS with Button Hover Effects */}
        <style>{`
        .hover-scale {
            transition: transform 0.3s ease;
        }
        .hover-scale:hover {
            transform: scale(1.03);
        }

        /* Project Details Button Hover Effect */
        .project-details-button:hover {
            background: var(--amber-10) !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .project-details-button:active {
            transform: translateY(0px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        /* Close Button Hover Effect */
        .close-button:hover {
            background: var(--red-9) !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .close-button:active {
            transform: translateY(0px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* Additional subtle animations for icons */
        .project-details-button:hover svg {
            transform: translateX(2px);
            transition: transform 0.2s ease;
        }

        /* Responsive grid: 1 column on smaller screens */
        @media (max-width: 768px) {
            .projects-grid {
            grid-template-columns: 1fr !important;
            }
        }
        `}</style>
    </div>
  );
};

export default Projects;
