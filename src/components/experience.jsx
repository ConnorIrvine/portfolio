import { Text, Button, AlertDialog, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import oilstainlabsimg from '../assets/oilstainlabs.jpg';
import fsae from '../assets/fsae.jpg';
import lyriq from '../assets/lyriq.jpg';
import scalar from '../assets/scalar.jpg';
import rbr from '../assets/rbr.jpg';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

const experiences = [
  {
    title: 'Software Engineer Industrial Placement',
    company: 'Red Bull Racing',
    duration: 'July 2025 – Present',
    location: 'Milton Keynes, UK',
    image: rbr,
    description: [
      '',
    ],
    skills: ['C#', '.NET', 'Python'],
  },
  {
    title: 'Aerodynamics Design Engineer Intern',
    company: 'Oilstainlab',
    duration: 'April 2025 – September 2025',
    location: 'Remote',
    image: oilstainlabsimg,
    description: [
      '▷ Designed underbody aero for HF-11 Hypercar through CFD analysis.',
      '▷ Preprocessed geometry and independent mesh studies to balance detail and meshability.',
      '▷ Validated CFD results (<5% deviation) with wind tunnel data.',
      '▷ Generated technical reports on pressure, streamlines, and force data.',
    ],
    skills: ['Ansys Fluent', 'Rhino', 'CFD', 'Wind Tunnel Validation'],
  },
  {
    title: 'Aerodynamics Lead',
    company: 'McMaster EcoCAR EV Challenge',
    duration: 'September 2023 – Present',
    location: 'Hamilton, ON',
    image: lyriq,
    description: [
      '▷ Automated CFD setup/post-processing with Python.',
      '▷ Ran and validated multi-condition CFD simulations.',
      '▷ Designed aero components in Siemens NX, resulting in 10% drag reduction.',
      '▷ Validated control systems using CANape, Simulink, and AVL tools.',
      '▷ Modeled suspension in Altair MotionView for design iterations.',
    ],
    skills: ['Python', 'Ansys Fluent', 'Siemens NX', 'MATLAB Simulink', 'Altair MotionView', 'AVL', 'CANape'],
  },
    {
    title: 'Aerodynamics Team Member',
    company: 'McMaster Formula Student',
    duration: 'April 2025 – Present',
    location: 'Hamilton, ON',
    image: fsae,
    description: [
      '▷ Designing aero components, including multi element rear wing, underbody and front wing.',
      '▷ Ran and validating multi-condition CFD simulations.',
      '▷ Developed genetic algorithms for optimal setups of aerodynamic components.',
    ],
    skills: ['Python', 'OpenFOAM', 'Siemens NX'],
  },
    {
    title: 'Race Telemetry Engineer Intern',
    company: 'Scalar Performance Inc.',
    duration: 'May 2024 – September 2024',
    location: 'Toronto, ON',
    image: scalar,
    description: [
      '▷ Built F1 telemetry platform using Quix, Kafka, Docker, and Kubernetes.',
      '▷ Processed CANbus data in Python (50ms latency).',
      '▷ Created real-time dashboard via Websockets for race engineers.',
      '▷ Integrated Raspberry Pi with custom CANBus telemetry system.',
      '▷ Developed hybrid controls in Simulink delivering 200+ HP.',
    ],
    skills: ['Python', 'Kafka', 'Quix Cloud', 'Kubernetes', 'Docker', 'Websockets', 'CANbus', 'MQTT', 'MATLAB Simulink'],
  },
  {
    title: 'System Design and Integration Team Member',
    company: 'McMaster EcoCAR EV Challenge',
    duration: 'September 2022 – September 2023',
    location: 'Hamilton, ON',
    image: lyriq,
    description: [
      '▷ Redesigned rear subfloor for inverter and computer modules.',
      '▷ Developed duct and thermal systems, reduced module temps by 16.6%.',
    ],
    skills: ['Siemens NX', 'FEA', 'Thermal Analysis', 'System Integration'],
  },

];



const Experience = () => {
  const sharedBackground = 'linear-gradient(135deg, var(--red-5), var(--red-9))';
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
            background: sharedBackground,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
                      ? 'linear-gradient(135deg, var(--indigo-5), var(--indigo-9))'
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
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.company} logo`}
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
                backgroundColor: '#eeeeee',
                color: '#000',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Image */}
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
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
                        backgroundColor: 'var(--red-6)',
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
                      background: 'var(--red-8)',
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
