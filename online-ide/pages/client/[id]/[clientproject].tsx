import { useRouter } from "next/router";
// class based components to withRouter
const portfolioProject = () => {
  const router = useRouter();

  console.log(router.pathname);

  return <div>Client Project</div>;
};
export default portfolioProject;
