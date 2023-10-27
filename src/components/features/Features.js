import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Branding"
          des=" I specialize in creating compelling brand stories, visual identities, and memorable experiences. My commitment to consistency, unique positioning, and impactful brand strategies sets you apart in the market."
         
        />
        <Card
          title="Web Development"
          des="I craft tailored, responsive, and user-focused websites, ensuring seamless performance on all devices.all while maintaining a commitment to scalability and efficiency."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="I can implement on-page SEO best practices, helping the website rank higher in search engine results. This is crucial for increasing organic traffic and reaching potential customers."
          icon={<SiProgress />}
        />
        <Card
          title="Domain Management"
          des="I handle domain registration, DNS configuration, and ensure your web address is always secure and operational. 
          I'm here to make your digital journey seamless and effortless."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I can create an intuitive and enjoyable user experience, which can positively impact customer satisfaction, retention, and conversion rates."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des=" i can Host websites for individuals or businesses, making them accessible on the internet,ensuring security and regular maintainence"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features