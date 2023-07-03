import AnimatedText from '@/components/AnimatedText';
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <main>
      <AnimatedText text="Passion Fuels Purpose!" />
    </main>
  )
}

export const metadata = {
  title: "About Me | Fiona Wu",
  description:
    "Hello! I'm an imaginative and enthusiastic individual bursting with creativity and a flair for fun ideas. I revel in the enchanting process of transforming my designs into captivating experiences using the magic of coding. As an avid self-learner, I'm always on the lookout for fresh knowledge and skills to enhance my problem-solving prowess. With a deep dedication to user experience, I craft solutions that not only address challenges but also guarantee the utmost satisfaction for every user. I thrive on the exhilarating journey of transforming abstract concepts into tangible realities, firmly believing that the fusion of design and code has the remarkable ability to conjure captivating and immersive experiences.",
};

export default About