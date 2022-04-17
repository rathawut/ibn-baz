import * as React from 'react';
import './styles.scss';
import projects from '../data/projects.json';

const IndexPage = () => {
  return (
    <section class="section">
      <div class="container">
        <div style={{ textAlign: 'center', paddingBottom: 24 }}>
          <h1 class="title">
            مؤسسة ابن باز لتعلُّم العلوم الإسلامية
            <br />
            Ibn Baz Institute for Islamic Studies
          </h1>
          <p class="subtitle">โครงการแปลตำราในเครือสำนักพิมพ์อัซซาบิกูน</p>
        </div>
        <div class="columns is-multiline">
          {projects.map((project) => {
            return (
              <div class="column is-4" key={project.id}>
                <div class="card">
                  <div class="card-content">
                    <p class="title">{project.name}</p>
                    <p class="subtitle">โดย{project.author}</p>
                    <p>แปล {`${project.progress.translation}%`}</p>
                    <progress
                      class="progress is-small is-primary"
                      value={project.progress.translation}
                      max="100"
                    >{`${project.progress.translation}%`}</progress>
                    <p>ตรวจคำแปล {`${project.progress.checking}%`}</p>
                    <progress
                      class="progress is-small is-link"
                      value={project.progress.checking}
                      max="100"
                    >{`${project.progress.checking}%`}</progress>
                    <p>ตรวจคำผิด {`${project.progress.proofreading}%`}</p>
                    <progress
                      class="progress is-small is-info"
                      value={project.progress.proofreading}
                      max="100"
                    >{`${project.progress.proofreading}%`}</progress>
                    <p>ปกและรูปเล่ม {`${project.progress.artwork}%`}</p>
                    <progress
                      class="progress is-small is-success"
                      value={project.progress.artwork}
                      max="100"
                    >{`${project.progress.artwork}%`}</progress>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
