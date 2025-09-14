import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import { User, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (!canvasRef.current || !inView) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });

    renderer.setSize(400, 300);
    renderer.setClearColor(0x000000, 0);

    // Create an abstract avatar representation
    const group = new THREE.Group();

    // Head
    const headGeometry = new THREE.SphereGeometry(1, 32, 16);
    const headMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2563eb, 
      transparent: true, 
      opacity: 0.8 
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1;
    group.add(head);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.8, 1.2, 2, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x06b6d4, 
      transparent: true, 
      opacity: 0.7 
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -1;
    group.add(body);

    // Floating elements around avatar
    for (let i = 0; i < 8; i++) {
      const cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const cubeMaterial = new THREE.MeshPhongMaterial({ 
        color: Math.random() > 0.5 ? 0x2563eb : 0x06b6d4,
        transparent: true,
        opacity: 0.6
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      cube.position.x = Math.cos(angle) * radius;
      cube.position.z = Math.sin(angle) * radius;
      cube.position.y = (Math.random() - 0.5) * 2;
      
      group.add(cube);
    }

    scene.add(group);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 8;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      group.rotation.y += 0.005;
      group.children.forEach((child, index) => {
        if (index > 1) { // Skip head and body
          child.rotation.x += 0.01;
          child.rotation.z += 0.015;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [inView]);

  // const stats = [
  //   { icon: Award, label: 'Years Experience', value: '8+' },
  //   { icon: Target, label: 'Projects Completed', value: '10+' },
  //   { icon: User, label: 'Happy Clients', value: '100+' },
  //   { icon: Lightbulb, label: 'Technologies', value: '25+' }
  // ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed"><b>

I’m an aspiring Computer Science student with a strong foundation in Python (OOP), C/C++, JavaScript, HTML, and CSS. I hold certifications including OCI AI Foundations (1Z0-1122-25), Google Generative AI, Introduction to LLMs, and Responsible AI, reflecting my focus on emerging technologies.
            </b>
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed"> <b>
As a GSSoC’25 contributor, I gained hands-on experience in open-source collaboration, sharpening my problem-solving and software development skills. My interests span AI, software development, and cloud computing, where I strive to build solutions that are simple, functional, and impactful.
            </b></p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed"><b>
                Beyond the screen, I’m someone who enjoys chai and occasionally overthinks variable names. 
           </b> </p>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${inView ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

        {/* Photo Avatar */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative">

            <img
              src="\Public\PP.jpg"   
              alt="Profile"
              className="rounded-2xl shadow-lg max-w-xs md:max-w-sm lg:max-w-md "
            />
          </div>
        </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;