import { LintConfig } from "@x.render/render-lint";
const lintConfig: LintConfig = {
  eslint: {
    type: "common-ts",
  },
  stylelint: {
    type: "react",
  },
  commitlint: {
    type: "common",
  },
};
export default lintConfig;
