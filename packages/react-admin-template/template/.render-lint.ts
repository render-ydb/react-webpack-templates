import { LintConfig } from "@x.render/render-lint";

const lintConfig: LintConfig = {
  eslint: {
    type: "common-ts",
  },
  commitlint: {
    type: "common",
  },
  stylelint: {
    lintType: "react",
  },
};
export default lintConfig;
