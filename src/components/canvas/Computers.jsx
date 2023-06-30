import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity = {0.15} groundColor='black' />
      <pointLight intensity = {1}/>
      <spotLight
        position = {[-20, 50, 10]}
        angle = {0.12}
        penumbre = {1}
        intensity = {1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale = {isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3.25, -1.5] :[0,-3.25, -2.2]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add an event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
     // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

   // Define a callback function (function which is to be executed after another function has finished execution) to handle the changes made to the Screen Size (change in value of media Query)
    const handleMediaQueryChange = (event) => {setIsMobile(event.matches);}

    //Add the callback function as an event listener for the changes made to the Media Query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Remove the Event Lister when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }}, [])

  return(
    <Canvas
      frameLoop='demand'
      shadows
      camera = {{position: [20,3,5], fov: 25}}
      gl ={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Set the maxium reach able angle to plus/minus 90 degrees (180 degree periphery)
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile = {isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>

  )

}

export default ComputersCanvas;
