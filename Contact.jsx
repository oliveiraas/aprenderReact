import React from 'react';

function Contact() {
  const alunos = [
    {
      nome: 'Vanessa Dores Ferreira',
      linkedin: 'https://www.linkedin.com/in/vanessadoresferreira',
      github: 'https://github.com/vanessadoresferreira',
      whatsapp: 'https://wa.me/5563999139698',
      area: 'UI/UX Designer',
    },
    {
      nome: 'Maria Oliveira',
      linkedin: 'https://www.linkedin.com/in/mariaoliveira',
      github: 'https://github.com/mariaoliveira',
      whatsapp: 'https://wa.me/5511888888888',
      area: 'Desenvolvedor Full-stack',
    },
    {
      nome: 'Carlos Souza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: 'https://github.com/carlossouza',
      whatsapp: 'https://wa.me/5511777777777',
      area: 'Desenvolvedora Front-end',
    },
    // Adicione mais alunos conforme necessário
  ];

  return (
    <div className="contact">
      <h2>Contato</h2>
      <p>Conheça as pessoas participantes deste projeto:</p>
      <div className="alunos-list">
        {alunos.map((aluno, index) => (
          <div key={index} className="aluno-card">
            <h3>{aluno.nome}</h3>
            <p><strong>Área Profissional:</strong> {aluno.area}</p>
            <div className="aluno-links">
              <a href={aluno.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href={aluno.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={aluno.whatsapp} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;