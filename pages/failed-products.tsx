"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import SectionContainer from "@/components/Common/SectionContainer";
import SectionHeader from "@/components/Common/SectionHeader";
import FailedProjectCard from "@/components/Common/FailedProjects/FailedProjectCard";
import {
  type IFailedProject,
  failedProjects,
} from "@/portfolioContents/failedProjects";

const Container = styled(Grid)(({ theme }) => ({
  // background: theme.palette.primary.dark,
  // minHeight: "100vh",
  // paddingTop: theme.spacing(0),
}));

export default function FailedProductsPage() {
  return (
    <SectionContainer>
      <Container container>
        <Grid>
          <SectionHeader
            title="FAILED PRODUCTS"
            subtitle="Learning from failures and setbacks"
            description="Every failure is a stepping stone to success. Here are some products that didn't work out as planned, but taught me valuable lessons along the way."
          />
        </Grid>

        {failedProjects.map((project: IFailedProject) => (
          <FailedProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            duration={project.duration}
            reasonForFailure={project.reasonForFailure}
            lessonsLearned={project.lessonsLearned}
            technologies={project.technologies}
          />
        ))}
      </Container>
    </SectionContainer>
  );
}
