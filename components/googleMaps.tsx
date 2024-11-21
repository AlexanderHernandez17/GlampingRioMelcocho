import React from "react";

const Mapa: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.6602672786684!2d-75.1564654!3d5.92748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46b93ef1b3fa0f%3A0x3384293682536b55!2sGLAMPING%20RIO%20MELCOCHO!5e0!3m2!1sen!2sco!4v1699967472562!5m2!1sen!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
