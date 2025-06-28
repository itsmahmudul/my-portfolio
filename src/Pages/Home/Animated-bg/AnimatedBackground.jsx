import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';

const AnimatedBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 -z-10"
            options={{
                background: {
                    color: "#000000", // pure black background
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 3 },
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#222222" }, // dark gray particles
                    links: {
                        color: "#111111", // very dark gray lines
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: { enable: false },
                    move: { enable: true, speed: 1, outModes: "bounce" },
                    number: { value: 50, density: { enable: true, area: 900 } },
                    opacity: { value: 0.1 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
    );
};

export default AnimatedBackground;
