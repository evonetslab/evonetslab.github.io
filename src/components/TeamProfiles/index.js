import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';

const TeamList = [
  {
    name: 'Mariana P Braga',
    role: 'Principal Investigator',
    email: 'mariana.braga[at]slu.se',
    github: 'maribraga',
    scholar: 'https://scholar.google.com/citations?user=jhRKaPAAAAAJ&hl=en',
    photo: '/img/team/Mariana.jpg', 
  },
  {
    name: 'Sille Holm',
    role: 'Researcher',
    email: 'sille.holm[at]slu.se',
    scholar: 'https://scholar.google.com/citations?user=LuUQoBEAAAAJ&hl=en&oi=ao',
    photo: '/img/team/Sille.png',
  },
  {
    name: 'Martina Bovolenta',
    role: 'PhD Student',
    email: 'martina.bovolenta[at]slu.se',
    photo: '/img/team/Martina.png', 
  },
  {
    name: 'Karin Alexandersson Ros',
    role: 'PhD Student',
    email: 'karin.alexandersson.ros[at]slu.se',
    photo: '/img/team/Karin.jpeg',
  },
  {
    name: 'Stenio Foerster',
    role: 'Postdoc',
    email: 'stenio.foerster[at]slu.se',
    github: 'foersterst',
    scholar: 'https://scholar.google.com/citations?user=pGhwR30AAAAJ&hl=en&oi=ao',
    photo: '/img/team/Stenio.jpg', 
  },
  {
    name: 'Katharina Schneider',
    role: 'Postdoc',
    email: 'katharina.schneider[at]slu.se',
    github: 'kschneider99',
    scholar: 'https://scholar.google.com/citations?user=1W1WipYAAAAJ&hl=en&oi=ao',
    photo: '/img/team/Kathi.jpg',
  },
  {
    name: 'Elena Quintero',
    role: 'Postdoc',
    email: 'elena.quintero[at]slu.se',
    github: 'elequintero',
    scholar: 'https://scholar.google.com/citations?user=Trdeq3cAAAAJ&hl=en&oi=ao',
    photo: '/img/team/Elena.jpg',
  },
];

function ProfileCard({name, role, email, github, scholar, photo}) {
  return (
    <div className={clsx('col col--4', styles.profileCol)}>
      <div className={clsx('card', styles.profileCard)}>
        <div className="card__image text--center padding-top--lg">
          <img src={photo} alt={name} className={styles.profileImage} />
        </div>
        <div className="card__body text--center">
          <Heading as="h3">{name}</Heading>
          <p className={styles.roleText}>{role}</p>
          <div className={styles.contactIcons}>

            {/* Email */}
            {email && (
              <a href={`mailto:${email}`} title="Email">
                <EmailIcon />
              </a>
            )}
            
            {/* Google Scholar */}
            {scholar && (
              <a href={scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <SchoolIcon />
              </a>
            )}

            {/* GitHub */}
            {github && (
              <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" title="GitHub">
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



const PastMembersList = [
  {
    name: 'Erik Danielsson',
    role: 'Undergrad. Implementation of efficient inference for the host repertoire model in TreePPL',
    currentPos: 'Master student, Lund University',
    github: 'ErikDanielsson',
  },
];



export default function TeamProfiles() {
  return (
    <section className="padding-vert--lg">
      <div className="container">
        <Heading as="h2" className="margin-bottom--lg">Current Members</Heading>
        <div className="row">
          {TeamList.map((props, idx) => (
            <ProfileCard key={idx} {...props} />
          ))}
        </div>

        <div className="margin-top--xl">
          <Heading as="h2" className="margin-bottom--md">Past Members</Heading>
          <div className={styles.pastMembersContainer}>
            <table className={styles.pastMembersTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role in Group</th>
                  <th>Current Position</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {PastMembersList.map((member, idx) => (
                  <tr key={idx}>
                    <td><strong>{member.name}</strong></td>
                    <td>{member.role}</td>
                    <td>{member.currentPos}</td>
                    <td>
                      <div className={styles.contactIcons}>
                        {member.github && (
                          <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon sx={{ fontSize: 18 }} />
                          </a>
                        )}
                      </div>                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
