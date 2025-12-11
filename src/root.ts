import App from "@/App";
import ErrorBoundary from "@/ErrorBoundry";
import Layout from "@/Layout";
import links from "@/links";
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./app.css";

fontawesomeConfig.autoAddCss = false;

export { ErrorBoundary, Layout, links };
export default App;
