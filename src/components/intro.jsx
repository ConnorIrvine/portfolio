import { useState, useEffect } from 'react';
import { Badge, Text, Button, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, RocketIcon } from "@radix-ui/react-icons"
import '@radix-ui/themes/styles.css';
import connorimage from '../assets/connor-background-free.png';

const TypingAnimation = ({ texts, typingSpeed = 100, pauseTime = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // which text from the list
  const [charIndex, setCharIndex] = useState(0); // which character of current text
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (!deleting && charIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (charIndex > currentText.length && !deleting) {
      // Pause before deleting
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }
  }, [charIndex, deleting, index, texts, typingSpeed, pauseTime]);

  return <span>{displayedText}|</span>;
};

const Intro = () => {
  return (
    <div
      className="grid gap-2 w-full h-full"
      style={{
        gridTemplateColumns: '1.3fr 1.3fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '2fr 1fr',
        overflow: 'hidden',
      }}
    >
      {/* Box 1: spans 2 cols × 2 rows */}
      <div
        className="rounded-lg"
        style={{
          gridColumn: 'span 2',
          gridRow: 'span 2',
          background: 'linear-gradient(135deg, var(--indigo-5) 0%, var(--indigo-9) 100%)',
          boxShadow: '8px 8px 32px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={connorimage}
          alt="Connor"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            zIndex: 2,
          }}
        />
      </div>

      {/* Box 2: spans 4 cols × 1 row */}
      <div
        className="lg flex flex-col justify-between p-6"
        style={{
          gridColumn: '3 / span 4',
          gridRow: '1',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            height: '1px',
            backgroundColor: 'rgba(204, 204, 204, 1)',
          }}
        />
        {/* Top: Tag */}
        <Badge
          color="amber"
          size="2"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--amber-9)',
            color: 'var(--amber-1)',
            alignSelf: 'flex-start',
          }}
        >
          <RocketIcon />
          <Text
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(0.65rem, 0.9vw, 1rem)',
              fontWeight: 500,
              color: 'var(--amber-1)',
            }}
            as="span"
            wrap="pretty"
          >
            Seeking full time employment
          </Text>
        </Badge>

        {/* Bottom: Text */}
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.4rem, 2.2vw, 3rem)',
            fontWeight: 600,
            background: 'linear-gradient(135deg, var(--indigo-5) 0%, var(--indigo-9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: '0.4rem',
          }}
          as="div"
        >
          Connor Irvine
        </Text>
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(0.8rem, 0.9vw, 1.25rem)',
            fontWeight: 300,
            color: 'var(--gray-8)',
            marginTop: '-0.06rem',
            marginBottom: '-0.4rem',
            minHeight: '1.5rem', // keep space steady
          }}
          as="div"
        >
          <TypingAnimation
            // texts={['Aerodynamics.', 'Race Telemetry.', 'Vehicle Dynamics.', 'Calibration & Validation.']}
            texts={['Software Developer',' Systems Engineer']}
            typingSpeed={120}
            pauseTime={1500}
          />
        </Text>
      </div>

      {/* Box 3 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '3',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip content="LinkedIn">
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: 'clamp(2rem, 2.6vw, 3rem)',
                height: 'clamp(2rem, 2.6vw, 3rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="https://www.linkedin.com/in/connor-john-irvine/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <LinkedInLogoIcon 
                style={{ 
                    width: 'clamp(2rem, 2.6vw, 3rem)',
                    height: 'clamp(2rem, 2.6vw, 3rem)',
                    color: 'var(--indigo-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>

      {/* Box 4 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '4',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip 
            content="Github"
        >
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: 'clamp(2rem, 2.6vw, 3rem)',
                height: 'clamp(2rem, 2.6vw, 3rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="https://github.com/ConnorIrvine" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <GitHubLogoIcon 
                style={{ 
                    width: 'clamp(2rem, 2.6vw, 3rem)',
                    height: 'clamp(2rem, 2.6vw, 3rem)',
                    color: 'var(--indigo-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>

      {/* Box 6 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '5',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip content="Email">
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: 'clamp(2rem, 2.6vw, 3rem)',
                height: 'clamp(2rem, 2.6vw, 3rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="mailto:connorjohnirvine@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <EnvelopeClosedIcon 
                style={{ 
                    width: 'clamp(2rem, 2.6vw, 3rem)',
                    height: 'clamp(2rem, 2.6vw, 3rem)',
                    color: 'var(--indigo-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>
    </div>
  );
};

export default Intro;
