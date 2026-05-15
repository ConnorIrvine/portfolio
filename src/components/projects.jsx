import { Text, Button, AlertDialog, Flex, Badge } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import calmcoach from '../assets/calmcoach.png';
import semg from '../assets/semg.jpg';
import rehabilitation from '../assets/rehabilitation.jpg';
import emg from '../assets/emg.png';
import { LayersIcon, Link2Icon } from '@radix-ui/react-icons';


const sharedBackground = 'linear-gradient(135deg, var(--teal-5), var(--teal-9))';
const sharedTextColor = 'white';

const projects = [
  {
    title: 'sEMG Processing for Prosthesis Control',
    image: semg,
    description:
      'Used ML to generate prosthetic control signals — classifying 9 hand gestures from 134-channel sEMG data with a CNN (79.6% accuracy) and predicting 18 joint angles via ridge regression (R²=0.68).',
    tag: 'Python, PyTorch, scikit-learn, CNN, SVM, PCA',
    link: 'https://drive.google.com/file/d/1YQOnnBgigSR6Ye_8bqJyX7nzq-FLhhji/view?usp=sharing',
  },
  {
    title: 'CalmCoach — HRV Biofeedback Sleep Aid',
    image: calmcoach,
    objectFit: 'contain',
    description:
      'Built a real-time PPG biosignal processing pipeline with bandpass filtering and custom peak detection to compute HRV metrics (RMSSD, RSA amplitude) via FastAPI, validated against ECG ground truth at 5.55ms MAE.',
    tag: 'Python, FastAPI, React Native, Arduino, Signal Processing, HRV',
    link: 'https://drive.google.com/file/d/1L6Ct2RXC9STMA5dIJE-QnpQ1SJZb_WQR/view?usp=sharing',
  },
  {
    title: 'Finger Rehabilitation Device',
    image: rehabilitation,
    objectFit: 'contain',
    description:
      'Developed a motorized prototype to quantify recovery progress in stroke patients with hemiparesis, writing Arduino code for motor control and force measurement, and leading the 3D printing process to ensure precise part tolerances.',
    tag: 'SolidWorks, C++, PrusaSlicer, LTSpice, Arduino',
    link: 'https://drive.google.com/file/d/1J8DGRq2tvMU3EBoxxOOeBH70DTPBfbI7/view?usp=sharing',
  },
  {
    title: 'Motorized EMG Driving Prosthesis',
    image: emg,
    objectFit: 'contain',
    description:
      'Prototyped an EMG-controlled prosthesis capable of gripping and turning a steering wheel, leading the 3D-printed mechanical design while conducting FEA to ensure stress resilience, meeting peer-reviewed standards.',
    tag: 'SolidWorks, C++, PrusaSlicer, LTSpice, Arduino',
    link: 'https://drive.google.com/file/d/1_KZzCBbWcrCG2ZSpFJjV0-bsMhDYKfak/view?usp=sharing',
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
            color: 'var(--teal-9)',
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
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minWidth: 0,
                    minHeight: '200px',
                    padding: '1rem',
                    paddingBottom: '2.5rem',
                    gap: '0.75rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                }}
                >
                {/* Image + Text column */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', minWidth: 0, flexShrink: 0 }}>
                  {/* Image */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    flexShrink: 0,
                    borderRadius: '0.6rem',
                    overflow: 'hidden',
                    backgroundColor: project.objectFit === 'contain' ? 'white' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: project.objectFit || 'cover',
                        display: 'block',
                        padding: project.objectFit === 'contain' ? '0.4rem' : '0',
                      }}
                    />
                  </div>
                  {/* Title + Description */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', minWidth: 0, flexGrow: 1 }}>
                    <Text as="div" style={{
                      fontSize: 'clamp(0.75rem, 1vw, 1.1rem)',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      filter: 'brightness(0.93)',
                    }}>
                      {project.title}
                    </Text>
                    <Text as="div" style={{
                      fontSize: 'clamp(0.6rem, 0.75vw, 0.9rem)',
                      lineHeight: 1.5,
                      opacity: 0.9,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}>
                      {project.description}
                    </Text>
                  </div>
                </div>

                {/* Tags — always visible, pushed to bottom */}
                <div style={{ marginTop: 'auto' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {project.tag.split(',').map((tagItem, tagIndex) => (
                    <Badge
                    key={tagIndex}
                    color="teal"
                    variant="soft"
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(0.6rem, 0.7vw, 1rem)',
                        color: 'var(--teal-11)',
                        fontWeight: 300,
                    }}
                    >
                    {tagItem.trim()}
                    </Badge>
                  ))}
                </div>

                {/* Link icon */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.6rem',
                  right: '0.6rem',
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  borderRadius: '50%',
                  width: '1.6rem',
                  height: '1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Link2Icon style={{ color: 'black', width: '1rem', height: '1rem' }} />
                </div>

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
                    backgroundColor: '#191919',
                    color: '#e5e5e5',
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
                        background: 'var(--teal-8)',
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
            background: var(--teal-9) !important;
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
