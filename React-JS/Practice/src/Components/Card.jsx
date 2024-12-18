import React from "react";
import "./Styles/Card.css"; // Optional CSS file for styling

const TeamMemberCard = ({ name, role, imageUrl, socialLinks }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={`${name}'s profile`} className="team-card__image" />
      <div className="team-card__content">
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__role">{role}</p>
        <div className="team-card__social">
          {socialLinks?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__social-link"
            >
              <i className={`fab fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
