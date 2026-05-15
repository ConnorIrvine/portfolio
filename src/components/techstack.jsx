import { Text, Badge } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import {
  GearIcon,
  CodeIcon,
  CubeIcon,
} from '@radix-ui/react-icons';

const TechStack = () => {
  const sharedTitleStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, var(--indigo-5) 0%, var(--indigo-9) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    width: '100%',
    paddingBottom: '0.75rem',
  };

  const badgeStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
    color: 'black',
    background: 'rgba(212, 212, 212, 0.06)', // soft glassy background
    border: '1px solid rgba(255, 255, 255, 0.2)', // subtle border
    borderRadius: '12px',
    padding: '0.35rem 0.75rem',
    backdropFilter: 'blur(10px)', // frosted glass effect
    WebkitBackdropFilter: 'blur(10px)', // Safari support
    boxShadow: '0 1px 2px rgba(255, 255, 255, 0.15), 0 4px 8px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
    display: 'inline-block',
  };

  const listStyle = {
    listStyleType: 'none',      
    paddingLeft: '0',           
    marginTop: '0.1rem',
    display: 'flex',            
    flexWrap: 'wrap',           
    gap: '0.25rem',              
  };

  const badgeFixedWidth = {
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <div
      className="grid gap-2 w-full h-full p-3"
      style={{
        gridTemplateColumns: '2fr 2fr 2fr',
        gridTemplateRows: 'auto',
        overflowY: 'auto',
        display: 'grid',
      }}
    >
      {/* Column 1: Languages */}
      <div style={{ paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'var(--indigo-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <CodeIcon />
            Languages
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'Python', 'C#', 'SQL', 'Java', 'Kotlin', 'JavaScript', 'HTML', 'CSS', 'C++', 'JSON',
          ].map((lang, idx) => (
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {lang}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Frameworks & Libraries */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'var(--indigo-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <GearIcon />
            Frameworks & Libraries
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'PyTorch', 'scikit-learn', 'pandas', 'FastAPI', 'React', 'Node.js',
            'Selenium', 'REST', 'Robot Framework', 'Jupyter',
          ].map((fw, idx) => (
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {fw}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Tools and Platforms */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'var(--indigo-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <CubeIcon />
            Tools & Platforms
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'Git', 'Docker', 'AWS', 'Azure', 'Ignition', 'VS Code',
            'Visual Studio', 'PyCharm', 'IntelliJ', 'SolidWorks', 'Onshape',
            'LTSpice', 'MATLAB', 'Simulink', 'OpenSim',
          ].map((tool, idx) => (
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {tool}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;