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
} from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';
import Image from 'next/image';
export default function PorfolioPage() {
  return (
    <Grid className="portfolio-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="portfolio-page__banner">
        {/* <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
        </Breadcrumb> */}
        <h1 className="portfolio-page__heading">
          Michelle Currier's portfolio
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>Documentation</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="portfolio-page">
                    Revolutionize Your Development Workflow: From overwriting
                    woes to seamless GitHub powered solutions
                  </h2>

                  <h3 className="portfolio-page">
                    Consulting Academy documentation
                  </h3>
                  <p className="landing-page__p">
                    An example of a Consulting Academy module template in
                    Github. This showcases the documentation with steps on
                    how-to run on your local with Gulp and preps for bundling to
                    deploy.
                  </p>
                  <a
                    href="https://github.ibm.com/Michelle-Currier/ca_barebones_translation"
                    target="_blank"
                  >
                    <Button>GitHub repo</Button>
                  </a>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 8 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/gulp_how.png"
                    alt="documentation for the Consulting Academy template"
                    width={480}
                    height={540}
                    // width={925}
                    // height={880}
                  />
                  http://mcurrier.com/ca_template_gulp.gif
                </Column>
              </Grid>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <p className="landing-page__p">
                    Tutorial on how to use Frontend coding basics like :
                    Terminal, Git, npm, Framework with Materialize + SASS
                    Tutorial
                  </p>
                  <p>
                    <a
                      href="http://mcurrier.com/materialize101/index.php"
                      target="_blank"
                    >
                      <Button>Check it out</Button>
                    </a>
                  </p>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 8 }} sm={4}>
                  <Image
                    className="landing-page__illo shadow"
                    src="/tutorial_materialize.jpg"
                    alt="Tutorial on using github, terminal, materialize, & sass"
                    width={480}
                    height={540}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h3>HitPath visuals & infographics</h3>
                  <p className="landing-page__p">
                    To the right is an example of the HitID Journey showcasing
                    my infographic capabilities. I break down the nuances of how
                    I travels and works.
                  </p>

                  <br></br>
                  <Image
                    className="landing-page__illo"
                    src="/hmc_poster.jpg"
                    alt="HitPath Masters Conference Poster"
                    width={405}
                    height={620}
                  />
                </Column>
                <Column md={4} lg={{ span: 8, offset: 8 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/hit_id.jpg"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                  <p className="landing-page__p">
                    To the left is the poster created for the HitPath Masters
                    Conference.
                  </p>
                </Column>
              </Grid>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={16}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2>Consulting Academy rebrand</h2>
                  <Image
                    className="responsive_img"
                    src="/Iterations_Timeline.jpg"
                    alt="Carbon illustration"
                    width={1500}
                    height={844}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} className="landing-page__tab-content">
                  Carbon provides styles and components in Vanilla, React, Next,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <h2>Certifications &amp; trainings</h2>
        <InfoSection
          heading="IBM's L&K Consulting Academy focus areas"
          className=""
        >
          <InfoCard
            heading="Consulting"
            body="My focus has been on diligently acquiring profound expertise in harnessing web components to explore novel possibilities beyond their creators' initial vision. As a result of my endeavors, I have achieved a notable milestone by successfully developing web games without relying on deprecated emulators. This accomplishment is of considerable significance, as it ensures our projects are built on a more sustainable codebase that allows for customization."
            icon={() => <Advocate size={32} />}
          />
          <InfoCard
            heading="Rebranding"
            body="In 2021 our team got the green light for the L&K Consulting Academy’s rebrand. The Consulting Academy is one of the main induction platforms for new band 7 - 9 consultants. The rebrand came from a need for a virtual campus due to the pandemic and folks working from home. Rebranding entailed creating and building an entirely new version of the virtual campus with IBM’s internal Your Learning portal called Comprehend and creating new learning modules from a common template."
            icon={() => <AcceleratingTransformation size={32} />}
          />
          <InfoCard
            heading="Best practices"
            body="The successful implementation of the Deploy Manager has led to its widespread adoption among team members for deployment purposes, while GitHub has been embraced for repository management and version control. Consequently, this adoption has significantly reduced issues related to overwriting, which were previously a major concern, resulting in enhanced collaboration on code bases. Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
