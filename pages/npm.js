import { packages } from "../src/constants/npm-packages";
import NpmPackageCard from "../src/components/NpmPackageCard/npm-package-card.component";
import { Typography, Box } from "@material-ui/core";
import CustomHead from "../src/components/Head/head";

const Npm = () => {
  return (
    <>
      <CustomHead title="NPM stats" />
      <Box style={{ width: "100%" }}>
        <Typography variant="h3" align="center" gutterBottom>
          NPM packages
        </Typography>

        {packages.map((p, id) => (
          <NpmPackageCard packageName={p} key={id} />
        ))}
      </Box>
    </>
  );
};

export default Npm;
