import { Grid, Typography, Chip, Box } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const ProjectCard = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(6),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(1.3),
  color: "#ff6b6b", // Red color to indicate failure
}));

const Duration = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontStyle: "italic",
  marginBottom: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const ReasonBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 107, 107, 0.1)",
  border: "1px solid rgba(255, 107, 107, 0.3)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const LessonsList = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  marginTop: theme.spacing(1),
}));

const LessonItem = styled("li")(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
  lineHeight: 1.6,
}));

const TechChipsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const TechChip = styled(Chip)(({ theme }) => ({
  // backgroundColor: "rgba(82, 33, 230, 0.1)",
  // color: theme.palette.primary.light,
  // border: `1px solid ${theme.palette.primary.light}`,
}));

interface IFailedProjectCardProps {
  title: string;
  description: string;
  duration: string;
  reasonForFailure: string;
  lessonsLearned: string[];
  technologies: string[];
  image: string;
}

const FailedProjectCard = ({
  title,
  description,
  duration,
  reasonForFailure,
  lessonsLearned,
  technologies,
  image,
}: IFailedProjectCardProps) => {
  return (
    <ProjectCard>
      <Grid container spacing={4}>
        <Grid component={Box} item xs={12} md={6}>
          <img src={image} width={600} alt={title} />
        </Grid>

        <Grid component={Box} item xs={12} md={6}>
          <Title variant="h3">{title}</Title>
          <Duration variant="body2">{duration}</Duration>

          <Typography variant="body1" color="textSecondary" paragraph>
            {description}
          </Typography>

          <SectionTitle variant="h5">Why it failed:</SectionTitle>
          <ReasonBox>
            <Typography variant="body2" color="textSecondary">
              {reasonForFailure}
            </Typography>
          </ReasonBox>

          <SectionTitle variant="h5">Lessons learned:</SectionTitle>
          <LessonsList>
            {lessonsLearned.map((lesson, index) => (
              <LessonItem key={index}>
                <Typography
                  variant="body2"
                  component="span"
                  color="textSecondary"
                >
                  {lesson}
                </Typography>
              </LessonItem>
            ))}
          </LessonsList>

          <SectionTitle variant="h5">Technologies used:</SectionTitle>
          <TechChipsContainer>
            {technologies.map((tech, index) => (
              <TechChip
                key={index}
                label={tech}
                variant="outlined"
                size="small"
              />
            ))}
          </TechChipsContainer>
        </Grid>
      </Grid>
    </ProjectCard>
  );
};

export default FailedProjectCard;
