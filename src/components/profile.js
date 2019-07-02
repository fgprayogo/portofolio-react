import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profile from './img/profile.svg'
import Fade from 'react-reveal/Fade'



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <Fade bottom>
            <div style={{textAlign: 'center'}}>
              <img
                src={profile}
                alt="avatar"
                style={{height: '200px'}}
                 />
                
            </div>
            </Fade>
            <Fade bottom delay={50}>
            <h2 style={{paddingTop: '2em'}}>Fitroh Galih Prayogo</h2>
            </Fade>
            <Fade bottom delay={100}>
            <h4 style={{color: 'grey'}}>Kota Bumi, 18 November 1999</h4>
            </Fade>
            <Fade bottom delay={150}>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Fade>
            <Fade bottom delay={200}>
            <p>Saya seorang yang menyukai hal baru. Terutama dalam dunia teknologi.</p>
            </Fade>
            <Fade bottom delay={250}>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Fade>
            <Fade bottom delay={300}>
            <h5>Address</h5>
            <p>Jl. Tegal Mlati, Gg. Anggrek No.112c</p>
            <h5>Phone</h5>
            <p>(+62) 85789757664</p>
            <h5>Email</h5>
            <p>fitrohgalih@gmail.com</p>
            <h5>Web</h5>
            <p>https://fgprayogo.web.app/</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Fade>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <Fade bottom delay={350}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={'Sekarang'}
              schoolName="Universitas Gadjah Mada"
              schoolDescription="Program Studi D3 Ilmu Komputer dan Sistem Informasi"
               />
</Fade>
<Fade bottom delay={400}>
               <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="SMA YP Unila Bandar Lampung"
                 schoolDescription="Jurusan IPA"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
                </Fade>
                <Fade bottom delay={450}>
              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Director Of Education USC"
              jobDescription="Suatu komunitas pasar modal yang mewadahi mahasiswa dan mahasiswi UGM untuk belajar tentang pasar modal"
              />
</Fade>
<Fade bottom delay={500}>
              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Jaringan Fakultas Gadjah Lampung"
                jobDescription="Menangani hal-hal yang berkaitan tentang external organisasi dalam bidang jaringan atau networking keanggotaan serta acara lainya."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              </Fade>
              <Fade bottom delay={550}>
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                </Fade>
                <Fade bottom delay={600}>
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  </Fade>
                  <Fade bottom delay={650}>
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    </Fade>
                    <Fade bottom delay={700}>
                    <Skills
                      skill="React"
                      progress={50}
                      />
                </Fade>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
