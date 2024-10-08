import { Grid } from "@material-ui/core";
import { MutableRefObject } from "react";

import SectionContainer from "../Common/SectionContainer/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import { IStory, stories } from "./storiesContent";
import StoryCard from "./StoryCard";

interface IStoriesProps {
  sectionRef: MutableRefObject<any>;
}

const Stories = ({ sectionRef }: IStoriesProps) => {
  return (
    <SectionContainer sectionRef={sectionRef}>
      <SectionHeader
        title="ARTICLES"
        description="A few articles about my journey and personal life."
        subtitle="Stories"
        marginBottom={2}
      />
      <Grid container spacing={4}>
        {stories.map((story: IStory) => {
          return (
            <StoryCard
              title={story.title}
              description={story.description}
              imageFileName={story.imageFileName}
              link={story.link}
              key={story.title}
            />
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default Stories;
