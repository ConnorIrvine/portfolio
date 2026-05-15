import { Theme, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { motion } from 'framer-motion';
import Intro from './components/intro';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import TechStack from './components/techstack';

const MotionBox = motion(Box);

function App() {
  return (
    <Theme accentColor="indigo" appearance="dark" radius="large">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="h-screen w-screen flex flex-col"
      >
        <main className="flex-1 min-h-0 overflow-y-auto p-4">
          {/* Mobile layout - single column with scroll */}
          <div className="md:hidden">
              <div className="grid gap-4 grid-cols-1 p-2">
                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  style={{
                    minHeight: '200px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Intro />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{
                    minHeight: '100px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Education />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    minHeight: '150px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Experience />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{
                    minHeight: '150px',
                    maxHeight: '600px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Projects />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    minHeight: '300px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <TechStack />
                </MotionBox>
              </div>
          </div>

          {/* Desktop layout - two columns */}
          <div
            className="hidden md:flex gap-4"
            style={{ height: 'calc(100vh - 2rem)' }}
          >
            {/* Left column */}
            <div className="flex flex-col gap-4" style={{ flex: '1', minWidth: 0, minHeight: 0 }}>
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ flex: 5, minHeight: '180px', backgroundColor: '#eeeeee', backdropFilter: 'blur(8px)' }}
              >
                <Intro />
              </MotionBox>
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ flex: 3, minHeight: '110px', backgroundColor: '#eeeeee', backdropFilter: 'blur(8px)' }}
              >
                <Education />
              </MotionBox>
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ flex: 8, minHeight: '200px', backgroundColor: '#eeeeee', backdropFilter: 'blur(8px)' }}
              >
                <Experience />
              </MotionBox>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4" style={{ flex: '1.2', minWidth: 0, minHeight: 0 }}>
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ flex: 10, minHeight: '300px', backgroundColor: '#eeeeee', backdropFilter: 'blur(8px)' }}
              >
                <Projects />
              </MotionBox>
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ flex: 6, minHeight: '200px', backgroundColor: '#eeeeee', backdropFilter: 'blur(8px)' }}
              >
                <TechStack />
              </MotionBox>
            </div>
          </div>
        </main>
      </motion.div>
    </Theme>
  );
}

export default App;
