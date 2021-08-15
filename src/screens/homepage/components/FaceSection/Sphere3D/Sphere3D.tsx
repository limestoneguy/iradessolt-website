import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import './Sphere3D.css';
import { BufferAttribute, BufferGeometry, TextureLoader } from 'three';




function Box() {
    const mesh: any = useRef();
    useFrame(() => {
        mesh.current.rotation.y += 0.01;
        mesh.current.rotation.x += 0.005;
    });

    return (
        <points ref={mesh} scale={1}>
            <sphereBufferGeometry attach='geometry' args={[2.5, 32, 32]} />
            <pointsMaterial transparent={true} size={0.02} attach='material' color='#ffffff' />
        </points>
    );
}

function Background_1() {
    const mesh: any = useRef();
    let mouseX = 0;
    let mouseY = 0;

    useFrame(() => {
        mesh.current.rotation.y += ((0.02 / 10) - (mouseY / 100000));
        mesh.current.rotation.x -= ((0.005 / 10) * (mouseX / 1000000));
    });

    document.addEventListener('mousemove', animateParticles);

    const loader = new TextureLoader();
    const star = loader.load('./1.png')

    const particleGeometry = new BufferGeometry();
    let particlesCount = 1000;
    const posArr = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArr[i] = (Math.random() - 0.5) * 12;
    }

    function animateParticles(event: any) {
        mouseX = event.clientX || 0;
        mouseY = event.clientY || 0;
    }

    particleGeometry.setAttribute('position', new BufferAttribute(posArr, 3));


    return (
        <points ref={mesh} scale={1} geometry={particleGeometry}>
            <pointsMaterial transparent={true} size={0.05} map={star} attach='material' color='#00e676' opacity={0.8} />
        </points>
    );
}
function Background_0() {
    const mesh: any = useRef();
    let mouseX = 0;
    let mouseY = 0;

    useFrame(() => {
        mesh.current.rotation.y += ((0.02 / 10) - (mouseY / 100000));
        mesh.current.rotation.x -= ((0.005 / 10) * (mouseX / 1000000));
    });

    document.addEventListener('mousemove', animateParticles);

    const loader = new TextureLoader();
    const star = loader.load('./0.png')

    const particleGeometry = new BufferGeometry();
    let particlesCount = 1000;
    const posArr = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArr[i] = (Math.random() - 0.5) * 12;
    }

    function animateParticles(event: any) {
        mouseX = event.clientX || 0;
        mouseY = event.clientY || 0;
    }

    particleGeometry.setAttribute('position', new BufferAttribute(posArr, 3));


    return (
        <points ref={mesh} scale={1} geometry={particleGeometry}>
            <pointsMaterial transparent={true} size={0.05} map={star} attach='material' color='#00e676' opacity={0.8} />
        </points>
    );
}

export default function Sphere3D() {
    return (
        <Canvas>
            <pointLight position={[30, 30, 30]} color='#00e676' />
            <Suspense fallback={null}>
                <Background_1 />
                <Background_0 />
                <Box />
            </Suspense>
        </Canvas>
    );
}