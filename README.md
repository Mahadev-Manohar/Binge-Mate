# Binge-Mate 🎬

**Binge-Mate** is a Netflix-inspired movie streaming frontend built with React. It enables users to explore trending, popular, and genre-specific movies fetched from **The Movie Database (TMDb) API**, and watch trailers via embedded YouTube players.

## 🌟 Features

* 🎥 Dynamic movie banners from trending movies
* 📁 Categorized movie sections (Action, Comedy, Horror, Romance, Documentaries, etc.)
* 📺 Play trailers directly on the app
* 🎨 Responsive and clean UI using CSS
* 🧠 Built with functional components and React hooks

## 🔧 Tech Stack

* **Frontend**: React (with hooks)
* **Styling**: Plain CSS
* **API Integration**: Axios + TMDb API
* **Media Player**: react-youtube

## 📂 Project Structure

```
src/
├── App.js                   # Main component
├── Components/
│   ├── NavBar/              # Top navigation bar
│   ├── Banner/              # Hero banner with trending movie
│   └── RowPost/             # Movie rows per category
├── constants/               # API keys and image URL constants
├── urls.js                  # Category-based API endpoints
└── axios.js                 # Pre-configured Axios instance
```

## 🔑 Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/binge-mate.git
   cd binge-mate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Get your TMDb API Key:**

   * Create an account at [TMDb](https://www.themoviedb.org/)
   * Navigate to **Settings → API** and generate an API key

4. **Create a `.env` file:**

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

## 💡 How It Works

* On app load, `Banner` fetches trending movies and shows a random one.
* `RowPost` fetches movies based on genre URLs from `urls.js`.
* Clicking a movie triggers a call to TMDb’s videos API and plays the trailer with `react-youtube`.

> Inspired by Netflix. Built for learning and showcasing React skills.
