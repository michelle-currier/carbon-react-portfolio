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
    IconSkeleton,
  } from '@carbon/react';
import {
    Advocate,
    Globe,
    AcceleratingTransformation,
    WatsonxAi,
    ExtendTheDataCenter,
    AiReady,
    Feedback_01,
    Feedback_02,
    EnterpriseDesignThinking_01,
    EnterpriseDesignThinking_02,
    DesignLeadership,
    Research,
    ProcessAutomation,
    Process,
    SaasEnablement,
    DataProcessing,
    Troubleshooting,
    Productivity,
    RedefiningFinancialServices,
    ResetHybridCloud,
    DesignAndDevelopment_01,
    SystemsDevopsBuild,
    DesignAndDevelopment_02,
    Printer,
    IbmZAndCloudModernizationStack,
    IbmCloud,
    Rocket,
    User,
    Bee,
    SmallComponentsMakingALargerWhole,
    SoftlayerEnablement,
    UserInsights,
    Overview,
    AccessManagement,
    Visionary,
    TextLayout,
    Javascript,
    IbmAutomationPlatform,
    GlobalTechnologyServices,
    FocusOnCode,
    FullyManaged,
    FasterInnovationWithPartners,
    Flexibility_02,
    GraphicDesign,
    InfrastructureAsAService,
    InfrastructureSecurity,
    NewFinancialCustomerExperiences,
    AiTransparency,
    ConceptExpansion,
    PersonalityInsights,
    AppDeveloper,
    UserExperienceDesign,
    DesignResearch,
    Ideate,
    RichTextFormat,
    MasterThreatHunting,
    Sports,
    DeliverInsights,
    HighFive,
    Cupcake,
    Docker,
    UserAnalytics
  } from '@carbon/pictograms-react';
import { TileSection, TileCard } from '@/components/Tile/Tile';


export function DisciplinesPage() {
  return (
    <Grid className="tile-container">
      <Column lg={16} md={8} sm={4} >

        

      <TileSection heading="Research Design" className='purple' id='Research'>
        <TileCard
            heading="User interviews"
            body="Understand user pain points through generative prompts and research activities."
            icon={() => <UserAnalytics size={32} />}
          />
        <TileCard
            heading="Persona development"
            body="Establish guidelines based on common pain points and key tasks users go through."
            icon={() => <User size={32} />}
          />
        <TileCard
            heading="Usability testing"
            body="Identify usability issues to improve the user experience."
            icon={() => <Research size={32} />}
          />
        <TileCard
            heading="User interviews"
            body="Understand user pain points through generative prompts and research activities."
            icon={() => <DesignResearch size={32} />}
        />
        </TileSection>  
        <TileSection heading="Design process" className='magenta'>
            <TileCard
                heading="Prioritization"
                body="Rank and agree on the importance of a piece of work as it relates to resources and goals."
                icon={() => <Productivity size={32} />}
            />
            <TileCard
                heading="Sprint cycles"
                body="Keep the team iterating on a agree upon and established cadence."
                icon={() => <Process size={32} />}
            />
            <TileCard
                heading="Agile process"
                body="Break down implementation of user experiences in a consumable and scalable way."
                icon={() => <SaasEnablement size={32} />}
            />
            <TileCard
                heading="Cross-disciplinary"
                body="Unite people from different roles to get stuff done."
                icon={() => <Overview size={32} />}
            />
            <TileCard
                heading="Grooming/triage"
                body="Gather pending requests, backlog items and bugs that need prioritization."
                icon={() => <DesignLeadership
                    size={32} />}
            />
            <TileCard
                heading="Scoping"
                body="Identify the minimum viable effort to enable and deliver a delightful experience."
                icon={() => <ProcessAutomation size={32} />}
            />
            <TileCard
                heading="Feedback"
                body="Provide empathetic and impersonal critique to any piece of work."
                icon={() => <Feedback_01 size={32} />}
            />
        </TileSection>
        <TileSection heading="Visual Design" className='orange' id='#Process'>
        <TileCard
                heading="Branding"
                body="Design scalable artifacts and patterns that communicate a company's soul in a visual way."
                icon={() => <Rocket size={32} />}
            />
            <TileCard
                heading="Systems thinking"
                body="Apply patterns and concepts at scale across different environments and contexts"
                icon={() => <SystemsDevopsBuild size={32} />}
            />
            <TileCard
                heading="Print design"
                body="Communicate a message visually through printed media."
                icon={() => <Printer size={32} />}
            />
            <TileCard
                heading="Iconography"
                body="Create visual representations of actions, tasks and items at the smallest scale."
                icon={() => <Bee size={32} />}
            />
            <TileCard
                heading="UI components"
                body="Design re-usable and responsive components for use on screen media."
                icon={() => <SmallComponentsMakingALargerWhole
                    size={32} />}
            />
            <TileCard
                heading="Accessibility"
                body="Enable all types of users to be able to leverage and enjoy a tool."
                icon={() => <Visionary size={32} />}
            />
            <TileCard
                heading="Visual perception"
                body="Apply universal phycological principles to any design artifact."
                icon={() => <AcceleratingTransformation size={32} />}
            />
        </TileSection>
        <TileSection heading="User Experiences" className='yellow'>
        <TileCard
                heading="Wireframing"
                body="Build user flows in lo-fidelty to quickly communicate an idea."
                icon={() => <TextLayout size={32} />}
            />
            <TileCard
                heading="Problem definition"
                body="Scope a problem into a consumableand actionable format the team can understand"
                icon={() => <MasterThreatHunting size={32} />}
            />
            <TileCard
                heading="Information Architecture"
                body="Construct the connections between different areas of a product or app."
                icon={() => <ConceptExpansion size={32} />}
            />
            <TileCard
                heading="Motion design"
                body="Communicate interactive behavior through the use of motion principles and tools."
                icon={() => <Sports size={32} />}
            />
            <TileCard
                heading="User flows"
                body="Diagram the interaction of a user with a system, and the actions that occur between them."
                icon={() => <PersonalityInsights
                    size={32} />}
            />
            <TileCard
                heading="Prototyping"
                body="Experiment and test concepts through connecting multiple artifacts into one story."
                icon={() => <AppDeveloper size={32} />}
            />
            <TileCard
                heading="Concept development"
                body="Explore and ideate on large volume of possibilities in order to refine a direction."
                icon={() => <UserExperienceDesign size={32} />}
            />
        </TileSection>
        <TileSection heading="Leadership" className='green'>
        <TileCard
                heading="Mentoring"
                body="Become a go-to source of inspiration and advice to peers and colleagues alike."
                icon={() => <DeliverInsights size={32} />}
            />
            <TileCard
                heading="Facilitation"
                body="Enable conversations and activities between people across disciplines to reach a goal."
                icon={() => <FasterInnovationWithPartners size={32} />}
            />
            <TileCard
                heading="Conflict Resolution"
                body="Mediate between people when misunderstandings or frictions
                blocks any progress."
                icon={() => <HighFive size={32} />}
            />
            <TileCard
                heading="Customer-facing"
                body="Interface with real users and customers to understand their problems and build trust."
                icon={() => <Cupcake size={32} />}
            />
            <TileCard
                heading="Product stratedgy"
                body="Drive the direction, vision and mission of a product team or collective effort."
                icon={() => <GraphicDesign
                    size={32} />}
            />
            <TileCard
                heading="Eminence"
                body="Let yourself known to others through publishing or speaking engagements."
                icon={() => <Ideate size={32} />}
            />
            <TileCard
                heading="Roadmapping"
                body="Enable the behavior of UI components and their relationships ot one another."
                icon={() => <IbmAutomationPlatform size={32} />}
            />
        </TileSection>
        <TileSection heading="Front-end coding" className='teal'>
            <TileCard
                heading="HTML/CSS"
                body="Structure the skeleton and visual layer of a UI by building to design specs."
                icon={() => <RichTextFormat size={32} />}
            />
            <TileCard
                heading="Javascript"
                body="Build consumable and nimble applications following best practices."
                icon={() => <Javascript size={32} />}
            />
            <TileCard
                heading="Docker"
                body="Build platform as a service products that use OS-level virtualization to deliver software in packages called containers."
                icon={() => <Docker size={32} />}
            />
            <TileCard
                heading="Frameworks"
                body="Build consumable and nimble applications following best practices."
                icon={() => <AppDeveloper
                    size={32} />}
            />
            <TileCard
                heading="Component libraries"
                body="Compile a system of reusable components to be shared across teams and offerings."
                icon={() => <FullyManaged size={32} />}
            />
            <TileCard
                heading="Code accessibility"
                body="Enable all types of users to be able to use a tool to complete a job or task."
                icon={() => <FocusOnCode size={32} />}
            />
            <TileCard
                heading="Globalization"
                body="Consider the scale aspects of code structures and components."
                icon={() => <GlobalTechnologyServices size={32} />}
            />
        </TileSection>
        
        <TileSection heading="Content design" className='blue' id='content'>
        <TileCard
                heading="Documentation"
                body="Compile technical processes and requirements to follow in order to maximize a tool's impact."
                icon={() => <AiTransparency size={32} />}
            />
            <TileCard
                heading="User guidance & onboarding"
                body="Provide direction to the user to drive better adoption and use of an experience."
                icon={() => <NewFinancialCustomerExperiences size={32} />}
            />
            <TileCard
                heading="Usability"
                body="Provide content patterns to aid in accessibility cases."
                icon={() => <InfrastructureAsAService size={32} />}
            />
            
        </TileSection>
      </Column>
      </Grid>
      )
}
export default DisciplinesPage;