import { heroSection } from "../src/portfolioContents/heroSection";
const Resume = () => {
  return null;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: heroSection.resume,
      permanent: false,
    },
  };
}

export default Resume;
