import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import './Sphere3D.css';
import { BufferAttribute, BufferGeometry, TextureLoader } from 'three';
import { CustomOrbitControls } from './controls/OrbitControls';

let mouseX: number;
let mouseY: number;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX || 0;
    mouseY = event.clientY || 0;
});

function Box() {
    const mesh: any = useRef();
    useFrame(() => {
        mesh.current.rotation.y += 0.007;
        mesh.current.rotation.x += 0.002;
    });

    const loader = new TextureLoader();
    const star = loader.load(process.env.PUBLIC_URL + '/star.png');

    return (
        <points ref={mesh} scale={1}>
            <sphereBufferGeometry attach='geometry' args={[2.5, 32, 32]} />
            <pointsMaterial transparent={true} map={star} size={0.02} attach='material' color='#ffffff' />
        </points>
    );
}

function Background_1() {
    const mesh: any = useRef();
    useFrame(() => {
        mesh.current.rotation.y += ((0.02 / 10) - (mouseY / 100000));
        mesh.current.rotation.x -= ((0.005 / 10) * (mouseX / 1000000));
    });

    const loader = new TextureLoader();
    const star = loader.load(process.env.PUBLIC_URL + '/1.png');

    const particleGeometry = new BufferGeometry();
    let particlesCount = 1000;
    const posArr = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArr[i] = (Math.random() - 0.5) * 12;
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

    useFrame(() => {
        mesh.current.rotation.y += ((0.02 / 10) - (mouseY / 100000));
        mesh.current.rotation.x -= ((0.005 / 10) * (mouseX / 1000000));
    });

    const loader = new TextureLoader();
    const star = loader.load(process.env.PUBLIC_URL + '/0.png');

    const particleGeometry = new BufferGeometry();
    let particlesCount = 1000;
    const posArr = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArr[i] = (Math.random() - 0.5) * 12;
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
            {/* <Suspense fallback={null}> */}
                <Box />
                <Background_1 />
                <Background_0 />
            {/* </Suspense> */}
            <CustomOrbitControls />
        </Canvas>
    );
}