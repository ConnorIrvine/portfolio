import { Text, Button, AlertDialog, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import stmarys from '../assets/logo-stmarys.png';
import firstontario from '../assets/logo-firstontario.png';
import telus from '../assets/logo-telus.png';
import miovision from '../assets/logo-miovision.png';
import medchart from '../assets/logo-medchart.png';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

const experiences = [
  {
    title: 'Systems Engineer Intern',
    company: 'St. Marys Cement',
    duration: 'Jan. 2025 – Aug. 2025',
    location: 'St Marys, ON',
    image: stmarys,
    description: [
      '▷ Built a Python-scripted web platform from scratch to deliver real-time HMI screen data to 20+ concurrent field users with sub-500ms responsiveness, serving as the foundation for full plant HMI modernization.',
      '▷ Drove migration of plant HMI screens from RSView32 to the new platform, advancing completion from 10% to 90% in a single 8-month term — a transition stalled for over two years.',
      '▷ Partnered with field operators to implement Python-driven improvements including dynamic item visibility, submenu logic, and UI animations, winning over an initially resistant user base.',
    ],
    skills: ['Python', 'JavaScript', 'Ignition', 'HMI', 'RSView32'],
  },
  {
    title: 'Junior Application Developer',
    company: 'First Ontario Credit Union',
    duration: 'Apr. 2024 – Aug. 2024',
    location: 'Hamilton, ON',
    image: firstontario,
    description: [
      '▷ Developed an end-to-end certificate management system pulling from live data tables via a JavaScript API, eliminating 5 hours of weekly administrative work per employee.',
      '▷ Automated coaching form management with a scheduled PowerShell script and custom workflows to reassign staff records and revoke access on org changes, eliminating up to 6-month administrative delays.',
    ],
    skills: ['JavaScript', 'PowerShell', 'REST APIs', 'Workflow Automation'],
  },
  {
    title: 'Automation Software Developer',
    company: 'TELUS Health',
    duration: 'Sep. 2023 – Dec. 2023',
    location: 'Cambridge, ON',
    image: telus,
    description: [
      '▷ Audited the existing Python/Selenium test suite to identify and resolve selectors vulnerable to frontend structural changes (iframes, DOM shifts), reducing test case failures by 15%.',
      '▷ Consistently delivered 2x the expected test case output using Python and Selenium, earning recognition from senior developers for reliability and pace.',
    ],
    skills: ['Python', 'Selenium', 'Robot Framework', 'Test Automation'],
  },
  {
    title: 'Software Developer',
    company: 'Miovision',
    duration: 'Jan. 2023 – Apr. 2023',
    location: 'Waterloo, ON',
    image: miovision,
    description: [
      '▷ Migrated thousands of customers and staff from Traffop to Miovision\'s identity platform across dev, testing, and production environments using JavaScript.',
      '▷ Developed Kotlin-based decoder services to extract and decode traffic data from existing monitoring infrastructure, populating metrics across 100+ system deployments throughout Canada.',
    ],
    skills: ['JavaScript', 'Kotlin', 'Platform Migration', 'Identity Management'],
  },
  {
    title: 'Full Stack Developer',
    company: 'MedChart',
    duration: 'May 2022 – Aug. 2022',
    location: 'Toronto, ON',
    image: medchart,
    description: [
      '▷ Streamlined user authorization business logic by implementing asynchronous generic-type C# methods, reducing lines of code by more than 75%.',
      '▷ Connected Marble API to multiple REST-based medical record databases in 3 days against a 2-week timeline, presenting the new infrastructure directly to the CTO.',
      '▷ Extended the Marble API receipt system with API call duration and Azure Operation ID fields, giving developers pinpoint error traceability that previously required manual log searching.',
    ],
    skills: ['C#', 'REST APIs', 'Azure', 'Full Stack', 'ASP.NET'],
  },
];



const Experience = () => {
  const sharedBackground = 'linear-gradient(135deg, var(--teal-5), var(--teal-9))';
  const sharedTextColor = 'white';

  return (
    <div
      className="grid gap-2 w-full h-full p-3"
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
            color: 'var(--teal-9)',
          }}
          as="div"
        >
          Experience
        </Text>
      </div>

      {/* Horizontal Scrollable Cards */}
        <div
        className="custom-scroll"
        style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '1rem',
            padding: '1rem 0',
        }}
        >
        {experiences.map((exp, index) => (
          <AlertDialog.Root key={index}>
            <AlertDialog.Trigger asChild>
              <div
                style={{
                  flex: '0 0 calc(100% / 3 - 1rem)',
                  minWidth: '250px',
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, var(--teal-5), var(--teal-9))'
                      : sharedBackground,
                  color: sharedTextColor,
                  borderRadius: '1rem',
                  scrollSnapAlign: 'start',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <div
                  className="hover-scale"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100% - 2.5rem)',
                    transition: 'transform 0.3s ease',
                    paddingBottom: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      height: '45%',
                      overflow: 'hidden',
                      borderTopLeftRadius: '1rem',
                      borderTopRightRadius: '1rem',
                      position: 'relative',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      filter: 'brightness(0.93)',
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.company} logo`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      flexGrow: 1,
                    }}
                  >
                    <Text
                      as="div"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                      }}
                    >
                      {exp.title}
                    </Text>
                    <Text as="div" style={{ fontSize: '0.9rem' }}>
                      {exp.company}
                    </Text>
                    <Text as="div" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                      {exp.duration}
                    </Text>
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(17, 17, 17, 0.3)',
                    padding: '0.5rem',
                    paddingRight: '2rem',
                    textAlign: 'right',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span>Learn More</span>
                  <DoubleArrowRightIcon />
                </div>
              </div>
            </AlertDialog.Trigger>

            {/* Alert Dialog Content */}
            <AlertDialog.Content
              style={{
                maxWidth: 600,
                width: '90vw',
                maxHeight: '80vh',
                padding: '1.5rem',
                borderRadius: '1rem',
                backgroundColor: '#191919',
                color: '#e5e5e5',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '140px',
                backgroundColor: 'white',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
              }}>
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <AlertDialog.Title
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  lineHeight: 1.0,
                }}
              >
                {exp.title}
              </AlertDialog.Title>

              <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, fontSize: '1.2rem' }}>
                {exp.company}
              </Text>

              <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', opacity: 0.7 }}>
                {exp.duration}
              </Text>

                <ul
                style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    paddingLeft: '1.25rem',
                    margin: 0,
                }}
                >
                {exp.description.map((bullet, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
                ))}
                </ul>

              {/* Skills */}
              {exp.skills && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1rem',
                  }}
                >
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'var(--teal-6)',
                        color: 'white',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <Flex gap="3" mt="auto" justify="end">
                <AlertDialog.Cancel>
                  <Button
                    style={{
                      background: 'var(--teal-8)',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', color: 'inherit' }}>Close</Text>
                  </Button>
                </AlertDialog.Cancel>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        ))}
      </div>

      <style>{`
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Experience;
