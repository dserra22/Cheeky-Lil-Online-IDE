import { useRouter } from "next/router";
// class based components to withRouter
const portfolioProject = () => {
  const router = useRouter();

  console.log(router.pathname);

  return <div>project{router.query.portfolioid}</div>;
};
export default portfolioProject;
