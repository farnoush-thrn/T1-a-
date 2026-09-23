# T1-a-
# Appliance Energy Visualisation Website (COS30045)

## Overview
This is a demonstration website built for the Data Visualisation unit (COS30045). The website acts as an explanatory platform to help Australian consumers explore the energy consumption of televisions currently available in the market.

## The Data Story
* **Audience:** Everyday Australian consumers looking to purchase a new television.

* **Interest:** Consumers are often overwhelmed by technical jargon (OLED vs. LCD) and varying screen sizes. Their primary goal is to find a balance between a good viewing experience (size/tech) and long-term running costs (power consumption/energy rating). This visualisation guides them through the market landscape and highlights the trade-offs between screen size, technology, and energy efficiency.

## About the Data
* **Data Source:** The dataset is published by the Australian Government (data.gov.au), specifically the "Energy Rating Data for household appliances – Labelled Products" (Televisions).

* **Data Processing:** Processing was conducted using KNIME Analytics Platform. Key steps included:
  - Filtering for products with an "Available" status.
  - Removing duplicate models (keeping the latest Submit_ID).
  - Filtering for models sold in "Australia".
  - Transforming data (e.g., converting screen sizes from cm to inches, standardizing brand names to uppercase).

* **Privacy:** The dataset contains publicly available product specifications and compliance data. It does not contain Personally Identifiable Information (PII) or sensitive human data.

* **Accuracy and Limitations:** The data relies on manufacturer submissions and laboratory testing for energy ratings. A limitation is that "Avg_mode_power" is a standardized metric and actual power consumption may vary based on user settings (e.g., brightness, usage hours).

* **Ethics:** The presentation of this data is designed to be objective. No visual ma

## Features
- **Multi-page Structure:** Includes Home, Televisions, and About Us pages.
- **JavaScript Navigation:** The top navigation menu uses JavaScript event listeners (`window.location.href`) to swap between pages seamlessly.
- **Interactive UI:** Includes mouse-over feedback (hover effects) and highlights the currently active page.
- **Custom Styling:** Styled using pure CSS to match the project's logo color scheme (Brown, Yellow, Orange).
- **Data Placeholders:** Features a dedicated section to display KNIME charts answering 7 core questions.

## GenAI Acknowledgement & Reflection
As permitted by the unit guidelines, Generative AI (GitHub Copilot) was utilized during the development of this project.

* **How it was used:** AI assisted in scaffolding the initial HTML layout, writing the JavaScript routing logic (`e.preventDefault()`), and drafting the CSS structure to match the provided logo colors.

* **Reflection:** Getting help from GenAI reduced the time spent on boilerplate coding and debugging syntax errors. It allowed me to focus more on the logical structure of the data presentation and the overall design aesthetics. However, I ensured that I thoroughly understood the code (specifically the DOM manipulation in `script.js`) so that I could confidently explain and modify it.
