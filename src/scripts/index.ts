import "@altshiftab/styles/common.css";
import "@altshiftab/styles/common_header_footer.css";
import {addErrorEventListeners, refreshSession} from "@altshiftab/http_service_utils_js";
import "@altshiftab/web_components/button";
import "@altshiftab/web_components/footer"
import "@altshiftab/web_components/header"

import "../styles/index.css";

addErrorEventListeners();
refreshSession(new URL("https://login.alt-shift.se/api/session/refresh"), {method: "POST"}, new URL("https://login.alt-shift.se/"));