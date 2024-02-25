import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const resumeItems = [
    {
        role: 'Program Assistant',
        company: 'Kaimore',
        type: 'Contract',
        date: 'January 2024 - Present',
        location: '',
        bullet1:
            'Manage and optimize backend pre-event workflows, demonstrating precise control over program schedules, refining booking systems, and orchestrating efficient registrant data management with proficiency in event management software and technologies like Google Apps Script',
        bullet2:
            "Enhance organization's website by restructuring based on research and user flow analysis, and implement advanced functionalities, such as the integration of an AI assistant chat powered by the OpenAI API"
    },
    {
        role: 'Freelance Web Developer',
        company: 'Independent',
        type: 'Contract',
        date: 'July 2023 - Present',
        location: '',
        bullet1:
            'Collaborated closely with clients to understand their specific requirements, translating concepts into functional and visually appealing websites that increased customer engagement',
        bullet2:
            'Demonstrated backend proficiency through the use of languages like TypeScript, frameworks such as Next.js, and technologies including CMS platforms, third-party APIs, and cloud services like AWS',
        bullet3:
            'Implemented effective SEO strategies and spearheaded page speed optimization initiatives'
    },
    {
        role: 'Peer Educator',
        company: 'UC Riverside',
        type: 'Part-Time',
        date: 'September 2021 - June 2023',
        location: 'Riverside, CA',
        bullet1:
            'Conducted 3-4 workshops weekly with 70+ first-year students in total, addressing topics such as networking, leadership strategies, proactive academic progression, time management, and mental health awareness',
        bullet2:
            'Demonstrated adeptness at delivering engaging and informative presentations, capturing the attention of diverse audiences, and excelled as a public speaker through clear articulation and adaptable communication style'
    },
    {
        role: 'Front Office Team Lead',
        company: 'Smile Creator',
        type: 'Full-Time',
        date: 'June 2021 - September 2021',
        location: 'Perris, CA',
        bullet1:
            'Leveraged insurance and financial options for 20+ patients weekly, analyzing treatment plans and ensuring clear comprehension of diagnoses, resulting in a 10% increase in treatment acceptance rate',
        bullet2:
            'Managed hygiene schedules in collaboration with assigned doctor, attracting a monthly average of 40+ new patients, maximizing practice growth',
        bullet3:
            'Earned a 5-Star Certification from the Scheduling Institute by successfully completing the 5-Star Call Challenge and demonstrating exceptional customer service skills in a dental receptionist role'
    }
];

const Experience = () => {
    const [scrollBehavior, setScrollBehavior] = React.useState('inside');

    return (
        <Box
            overflow={scrollBehavior === 'inside' ? 'auto' : 'hidden'}
            // bg="red"
            margin={{
                lg: '30px auto 0',
                md: '30px auto 0',
                sm: '30px auto 0'
            }}
            p="5"
            width="102%"
            height={{
                lg: '97%',
                md: '97%',
                sm: '117%'
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            // backgroundColor="pink"
        >
            {scrollBehavior === 'inside' ? (
                <Box
                    // backgroundColor="yellow"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="flex-start"
                >
                    <VStack>
                        {resumeItems.map((item, index) => (
                            <VStack
                                key={index}
                                // backgroundColor="gray"
                                width="100%"
                            >
                                <Text
                                    // backgroundColor="lightblue"
                                    textAlign="left"
                                    width="100%"
                                    fontSize="larger"
                                    fontWeight="extrabold"
                                    marginBottom="-10px"
                                >
                                    {item.role}
                                </Text>
                                <Text
                                    // backgroundColor="limegreen"
                                    textAlign="left"
                                    width="100%"
                                    fontSize={{ lg: 'md', md: 'md', sm: 'sm' }}
                                    marginBottom="-10px"
                                    color="GrayText"
                                >
                                    {item.company} • {item.type} • {item.date}
                                </Text>
                                <Text
                                    // backgroundColor="limegreen"
                                    textAlign="left"
                                    width="100%"
                                    fontSize={{ lg: 'md', md: 'md', sm: 'sm' }}
                                    marginBottom="10px"
                                    color="GrayText"
                                >
                                    {item.location}
                                </Text>
                                {Object.keys(item)
                                    .filter((key) => key.startsWith('bullet'))
                                    .map((key, bulletIndex) => (
                                        <Text
                                            key={bulletIndex}
                                            // backgroundColor="limegreen"
                                            textAlign="left"
                                            width="100%"
                                            fontSize={{
                                                lg: 'md',
                                                md: 'md',
                                                sm: 'sm'
                                            }}
                                            marginBottom="10px"
                                        >
                                            {item[key]}
                                        </Text>
                                    ))}
                            </VStack>
                        ))}
                    </VStack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Experience;

// #ffbde8 (255,189,232) - Lighter Shade: #ffdaf1 (255,218,241)
// #bde8ff (189,232,255) - Lighter Shade: #d8f0ff (216,240,255)
// #e8ffbd (232,255,189) - Lighter Shade: #f0ffdb (240,255,219)
// #ffe8bd (255,232,189) - Lighter Shade: #fff2d1 (255,242,209)
// #e8bdff (232,189,255) - Lighter Shade: #f4d1ff (244,209,255)
