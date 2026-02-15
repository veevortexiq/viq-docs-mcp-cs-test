# Connector Agent

## Agent Overview
The Connector Agent is a master orchestrator designed to discover API credential requirements for various platforms. It automates the process of finding API key information by coordinating multiple specialist agents, crawling documentation, and extracting relevant details. Its primary goal is to produce a standardized validation payload that can be used to configure connectors, even for platforms with unsupported authentication methods.

## Agent Tools
The agent's capabilities are primarily delivered through the orchestration of its sub-agents:

*   **API Credential Discovery:** Orchestrates a complex workflow to find API key requirements for a given platform.
*   **Documentation Crawling:** Scans web pages to find technical documentation and examples.
*   **Payload Generation:** Creates a standardized validation payload with the discovered API key requirements.

## Sub-agents
The Connector Agent orchestrates a team of specialist sub-agents to handle specific tasks:

*   **Discovery Agent:** Searches for API authentication details and `curl` commands for a given platform.
*   **RAG Agent:** Searches internal documentation for supplementary information about the platform.
*   **Crawler Agent:** Crawls documentation URLs provided by the Discovery Agent to find more information.
*   **Extractor Agent:** Analyzes HTML/Markdown content from the Crawler Agent to extract `curl` commands.
*   **Validation Generator Agent:** Takes a `curl` command and other platform details to generate a final, standardized validation payload.

## Scenarios

### Scenario 1: Successful API Key Discovery
**User:** "Find the API key for Mailchimp."
**Agent's Action:** The agent delegates the request to the `discovery_agent` and `rag_agent`. The `discovery_agent` finds a `curl` command example in the official documentation. The orchestrator then passes this command to the `validation_generator_agent` to create a standardized validation payload, which is returned to the user.

### Scenario 2: Discovery via Web Crawling
**User:** "I need to connect to the 'SuperCool API', can you find its credentials?"
**Agent's Action:** The `discovery_agent` fails to find a `curl` command but returns URLs to the developer documentation. The orchestrator passes these URLs to the `crawler_agent`. The `crawler_agent` fetches the content, and the `extractor_agent` successfully finds a `curl` command within a tutorial page. This command is then used by the `validation_generator_agent` to create the final payload.

### Scenario 3: Unsupported Authentication
**User:** "Get the API key for 'LegacySystem API'."
**Agent's Action:** The `discovery_agent` determines that the platform uses an unsupported authentication method. The orchestrator then calls an internal tool to generate a standardized empty payload, indicating that the platform is of type "Other" and cannot be automatically configured.
