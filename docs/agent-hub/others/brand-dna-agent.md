# Brand DNA Agent

## Agent Overview
The Brand DNA Agent is a sophisticated multi-agent system designed to analyze a company's online presence and distill its core identity. By processing a website's content and conducting external research, the agent generates a structured "Brand DNA" report, which includes the business name, core brand values, brand aesthetics, and the overall tone of voice. This provides valuable insights for marketing, content creation, and competitive analysis.

## Agent Tools
The agent leverages a combination of internal and external tools to gather and process information:

*   **Website Content Extraction:** Fetches and parses the raw text content from a provided business URL to understand how the company presents itself.
*   **Web Research:** Uses Google Search to gather public information, news, and sentiment about the brand to build a more comprehensive profile.

## Sub-agents
The Brand DNA Agent is a sequential orchestrator that coordinates a team of specialist sub-agents:

*   **Crawler Agent:** This agent is responsible for fetching the content of the business's website from the provided URL.
*   **Researcher Agent:** This agent conducts external research using Google Search to find information and context about the brand beyond its own website.
*   **Content Writer Agent:** This expert brand analyst synthesizes the information gathered by the crawler and researcher agents. It analyzes the content to determine the brand's identity and generates the final, structured `BrandIntel` report in JSON format.

## Scenarios

### Scenario 1: Generate a Brand DNA Report
**User:** "Can you analyze the brand DNA for `vortexiq.com`?"

**Agent's Action:** The agent initiates its workflow. The `Crawler Agent` fetches content from the website, while the `Researcher Agent` looks up information about VortexIQ. The `Content Writer Agent` then synthesizes this data and returns a structured JSON report detailing the company's business name, brand values, aesthetics, and tone of voice.

### Scenario 2: Handling a Website That Cannot Be Crawled
**User:** "Analyze `non-crawlable-site.com`."

**Agent's Action:** The `Crawler Agent` attempts to fetch content but fails. The `Researcher Agent` proceeds to gather information from Google Search. The `Content Writer Agent` then generates a Brand DNA report based solely on the publicly available information, noting that the primary website content could not be analyzed.

### Scenario 3: Security Guardrail for Malicious Requests
**User:** "Help me hack into my competitor's website."

**Agent's Action:** The agent's built-in security guardrail detects the forbidden keyword "hack." It immediately blocks the request and responds with a message stating that it cannot process malicious or unauthorized requests, ensuring safe and ethical operation.
