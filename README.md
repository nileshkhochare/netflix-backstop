# 🎬 Netflix-GPT - AI-Powered Movie Discovery

A React application that combines Netflix's UI with AI-powered movie recommendations using OpenAI and TMDB APIs. Includes visual regression testing with BackstopJS.

## 🛠️ Tech Stack

- React.js
- Redux (or Context API)
- OpenAI API
- TMDB API
- BackstopJS (Visual Regression Testing)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key
- TMDB API key

### Installation

**Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/netflix-gpt.git
   cd netflix-gpt

### Install Dependencies
```bash
npm install

### Set Up Environment Variables
Create a `.env` file in the root directory with the following content:

```env
REACT_APP_OPENAI_KEY=your_openai_api_key_here
REACT_APP_TMDB_KEY=your_tmdb_api_key_here

## 🚀 Quick Start

### Run the Development Server
```bash
npm start

## 🧪 Visual Regression Testing

### Install BackstopJS Globally
```bash
npm install -g backstopjs

### Create Reference Screenshots
```bash
npx backstop reference

### Run Test
```bash
npx backstop test
