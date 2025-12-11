import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  buildDirectory: "dist",
  ssr: false,
  prerender: async ({ getStaticPaths }) => {
    const paths = await getStaticPaths();
    return ["/", ...paths];
  }
} satisfies Config;
