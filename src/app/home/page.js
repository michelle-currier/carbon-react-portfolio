'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Link,
} from '@carbon/react';
import {
  Advocate,
  Globe,
  AcceleratingTransformation,
  WatsonxAi,
  ExtendTheDataCenter,
  AiReady,
  EnterpriseDesignThinking_01,
} from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';

import Image from 'next/image';
// import { AspectRatio } from ''

// import background from "./floppy_ibm_disk.jpeg";

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column
        lg={16}
        md={8}
        sm={4}
        className="landing-page__banner"
        style={{ backgroundImage: 'url(./floppy_ibm_disk.jpeg)' }}
      >
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">A Designer who codes...</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>Consulting</Tab>
            <Tab>Process &amp; practices</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={8}
                  lg={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <div className="float-r">
                    <Image
                      className="responsive-img"
                      src="/headshot.png"
                      alt="Michelle Currier headshot"
                      width={240}
                      height={270}
                    />
                  </div>
                  <h2 className="landing-page__subheading">Who is Michelle?</h2>
                  <p className="landing-page__p">
                    Michelle Currier has over a decade of professional
                    expertise, they seamlessly integrate a formal foundation in
                    print, web, and graphic design with a proven track record of
                    accomplishments in Software as a Service (SaaS) and app
                    development. Their specializations crosscut video editing,
                    DJing, Front-end development, and UX/UI design, reflecting a
                    comprehensive skill set and a history of success in crafting
                    engaging and user-friendly digital experiences.
                  </p>
                  <p>Downloads:</p>
                  <ul>
                    <li>
                      <Link
                        href="https://drive.google.com/file/d/1oJ4x2FpTC3pL-Zh5OLMLLBRlLC7e3gfX/view?usp=drive_link"
                        target="blank"
                      >
                        Portfolio Packet
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://drive.google.com/file/d/1LFJ3i7QD5EQVY2Voi4R8rEX4-sr6H_Rd/view?usp=sharing"
                        target="_blank"
                      >
                        CV/Resume
                      </Link>
                    </li>
                    <li>
                      {/* <Link
                        href="https://ibm.box.com/v/michelleCurrier-CV"
                        target="_blank"
                      >
                        IBM CV/Resume
                      </Link> */}
                      <Link
                        href="https://drive.google.com/file/d/1t3WqbzuZS1oM-a-y9R0OorVysiDlRE6H/view?usp=sharing"
                        target="_blank"
                      >
                        IBM CV/Resume
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://drive.google.com/file/d/1bl1TFnyOfbcJhKgxW8xdvIwPEw7kwipj/view?usp=drive_link"
                        target="_blank"
                      >
                        Consulting Academy Case Study
                      </Link>
                    </li>
                    <li>&nbsp;</li>
                    <li>
                      {' '}
                      <Link
                        href="https://calendly.com/michellecurrier/30min"
                        target="_blank"
                      >
                        {' '}
                        <Button>Book a meeting</Button>
                      </Link>
                    </li>
                  </ul>
                </Column>
                <Column md={6} lg={{ span: 8, offset: 9 }} sm={4}>
                  <Image
                    className="responsive-img"
                    // src="/tab-illo.png"
                    src="/IBM_Think.jpg"
                    alt="Carbon illustration"
                    width={480}
                    height={540}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={8}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">
                    Custom games with L&amp;K web components
                  </h2>

                  <p className="landing-page__p">
                    Addressing the absence of expertise within the team to
                    execute this transition, I proactively took the initiative
                    to lead the effort. By stepping up and assuming
                    responsibility for the task at hand, I contributed to the
                    successful migration of our games to a more adaptable and
                    forward-looking framework. This initiative has not only
                    bolstered the technical foundation of our projects but has
                    also demonstrated my commitment to delivering impactful
                    solutions and fostering a sustainable development
                    environment.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1LCAjcWYcKizXFCGjGBNFz04pF05_KaHL/edit?usp=sharing&ouid=117809990728886596970&rtpof=true&sd=true"
                    target="_blank"
                  >
                    <Button>Game Development Specifications</Button>
                  </a>
                </Column>
                <Column md={6} lg={{ span: 8, offset: 9 }} sm={12}>
                  <Image
                    className="responsive-img"
                    src="/games.jpg"
                    alt="documentation for the Consulting Academy template"
                    width={480}
                    height={540}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={8}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">
                    Consulting Academy processes and best practices
                  </h2>
                  <p className="landing-page__p">
                    During my tenure with the Consulting Academy, my efforts
                    have extended to fostering proficient usage of Github and
                    the deploy manager within the UI team. The adoption of these
                    tools has led to a notable reduction in code overwriting
                    instances, and we have now established robust best practices
                    for code management.
                  </p>

                  <p className="landing-page__p">
                    Integrating version control into our development workflow
                    significantly elevates our processes, enabling seamless
                    storage, modification, and collaboration. This invaluable
                    feature fosters heightened stability and accountability
                    across our projects, ultimately bolstering efficiency and
                    upholding the highest professional standards.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1bl1TFnyOfbcJhKgxW8xdvIwPEw7kwipj/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button>Consulting Academy Case Study</Button>
                  </a>
                </Column>
                <Column md={6} lg={{ span: 8, offset: 9 }} sm={4}>
                  {/* <Column md={6} lg={{ span: 8, offset: 8 }} sm={4}> */}

                  <Image
                    className="responsive-img"
                    src="/gulp_how.png"
                    alt="documentation for the Consulting Academy template"
                    width={480}
                    height={540}
                  />
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <h1 className="p-l">Portfolio packet key takeaways</h1>
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4}>
                  <Image
                    className="responsive-img"
                    src="/portfolio_packet_bestpractices.png"
                    alt="documentation for the Consulting Academy template"
                    width={1400}
                    height={767}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4}>
                  <Image
                    className="responsive-img"
                    src="/portfolio_packet_consulting_academy.png"
                    alt="documentation for the Consulting Academy template"
                    width={1400}
                    height={767}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4}>
                  <Image
                    className="responsive-img"
                    src="/portfolio_packet_credentials.png"
                    alt="documentation for the Consulting Academy template"
                    width={1400}
                    height={767}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4}>
                  <Image
                    className="responsive-img"
                    src="/portfolio_packet_games.png"
                    alt="documentation for the Consulting Academy template"
                    width={1400}
                    height={767}
                  />
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="Certifications &amp; trainings" className="">
          <InfoCard
            heading="Enterprise Design Thinking"
            body="Current projects include the NA CIC Website rebrand and CMS build with Vue. Sitting in with the Expression Journal app as a Design Consultant."
            icon={() => <EnterpriseDesignThinking_01 size={32} />}
          />
          <InfoCard
            heading="AI Training"
            body="Generative AI for Code with watsonx Code Assistant Sales Foundation. Generative AI & watsonx for IBM Carbon React Tutorial and converted that to a portfolio site deploying from GitHub using Vercel.app to deploy."
            icon={() => <WatsonxAi size={32} />}
          />
          <InfoCard
            heading="Other Education"
            body="Generative AI & watsonx for IBM Carbon React tutorial and converting to a portfolio.
            /n
            AWS Elevate Days 2023,
            
            User Research – Methods and Best Practices*
            "
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
