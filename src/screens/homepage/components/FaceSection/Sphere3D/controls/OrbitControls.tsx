import { extend, ReactThreeFiber, useFrame, useThree, } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}


extend({ OrbitControls });
interface OrbitRef {
    update: Function
}
export const CustomOrbitControls = () => {
    const ref = useRef<OrbitRef>();
    const { camera, gl } = useThree();
    useFrame(() => {
        if (ref && ref.current) {
            ref.current.update()
        }
    });

    return (
        <orbitControls
            ref={ref}
            args={[camera, gl.domElement]}
            enableDamping={true}
            enableZoom={false}
        />
    );
};