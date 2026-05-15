import { Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { BackpackIcon } from '@radix-ui/react-icons';

const Education = () => {
  return (
    <div
      className="grid gap-2 w-full h-full p-3"
      style={{
        gridTemplateColumns: '2.5fr 5fr',
        gridTemplateRows: '1fr', // Only one row now
        overflow: 'hidden',
        display: 'grid',
      }}
    >
      {/* Column 1: Left side, centered vertically and aligned left */}
      <div
        className="flex items-center justify-start"
        style={{
          paddingLeft: '1rem',
        }}
      >
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.5rem, 2vw, 3rem)',
            fontWeight: 600,
            background: 'linear-gradient(135deg, var(--indigo-5) 0%, var(--indigo-9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          as="div"
        >
          Education
        </Text>
      </div>

      {/* Column 2: Right side */}
        <div
        className="rounded-lg"
        style={{
            background: 'transparent', // Transparent background
            boxShadow: 'none',         // Remove shadow
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',   // Stack vertically
            alignItems: 'flex-start',  // Align to the left
            justifyContent: 'center',
            padding: '1rem',           // Add spacing inside box
            gap: '0.1rem',             // Space between texts
        }}
        >
        <div
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem', // space between icon and text
        }}
        >
        <BackpackIcon
            style={{
            width: '1.5em',
            height: '1.5em',
            color: 'var(--gray-5)', // match the text color or choose your own
            }}
        />
        <Text
            style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(0.8rem, 1.4vw, 2rem)',
            fontWeight: 700,
            color: 'var(--gray-5)',
            }}
            as="span"
            wrap="pretty"
        >
            University of Waterloo
        </Text>
        </div>

        <Text
            style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(0.5rem, 0.8vw, 1.5rem)',
            fontWeight: 400,
            color: 'var(--gray-10)',
            }}
            as="span"
            wrap="pretty"
        >
            September 2021 - April 2026
        </Text>

        <Text
            style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(0.6rem, 0.8vw, 1.75rem)',
            fontWeight: 400,
            color: 'var(--gray-2)',
            }}
            as="span"
            wrap="pretty"
        >
            BASc  - Bachelors of Biomedical Engineering
        </Text>
        </div>

    </div>
  );
};

export default Education;
