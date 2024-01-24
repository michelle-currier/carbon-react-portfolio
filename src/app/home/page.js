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

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        {/* <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb> */}
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
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">Who is Michelle?</h2>
                  <p className="landing-page__p">
                    Michelle Currier has over a decade of professional
                    expertise, I seamlessly integrate a formal foundation in
                    print, web, and graphic design with a proven track record of
                    accomplishments in Software as a Service (SaaS) and app
                    development. My specializations crosscut video editing,
                    DJing, Front-end development, and UX/UI design, reflecting a
                    comprehensive skill set and a history of success in crafting
                    engaging and user-friendly digital experiences.
                  </p>
                  <a
                    href="https://ibm.box.com/v/portfolioMichelleCurrier"
                    target="blank"
                  >
                    <Button>Portfolio Packet</Button>
                  </a>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
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
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">
                    Consulting Academy processes and best practices
                  </h2>
                  <p className="landing-page__p">
                    During my time with the Consulting Academy, my efforts have
                    extended to fostering proficient usage of Github and the
                    deploy manager within the UI team. The adoption of these
                    tools has led to a notable reduction in code overwriting
                    instances, and we have now established robust best practices
                    for code management.
                  </p>

                  <p className="landing-page__p">
                    The implementation of version control further enhances our
                    development process by providing the capability to revert
                    the codebase to previous states when necessary. This
                    newfound capability ensures greater stability and
                    accountability in our projects, contributing to overall
                    efficiency and adherence to professional standards.
                  </p>
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
            heading="AI training"
            body="Generative AI & watsonx for IBM <br> Carbon React Tutorial and converted that to a portfolio site deploying from GitHub using Vercel.app to deploy."
            icon={() => <WatsonxAi size={32} />}
          />
          <InfoCard
            heading="Other education"
            body=""
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
