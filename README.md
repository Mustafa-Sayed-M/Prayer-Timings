# 🕌 Prayer Timings

A React.js application to display accurate prayer timings for any location.
Users can select their country, and the app will fetch the corresponding prayer times.
Built with React, Tailwind CSS, and React Query for efficient data fetching and state management. [Live Site](https://prayer-timings-two.vercel.app/)

# 🌟 Features

- Prayer Timings API Integration

  Displays prayer times based on user-selected location using [Aladhan API](https://aladhan.com/prayer-times-api).

- Dynamic Country Selection

  Users can select their country from a dropdown powered by [REST Countries API](https://restcountries.com/).

- Modern UI Design

  Styled with Tailwind CSS for a responsive and clean design.

- Optimized Data Fetching

  Efficient API calls and caching using React Query.

# 🚀 Technologies Used

- React.js for building the UI.
- React Query for API state management.
- React Select for enhanced dropdown functionality.
- Tailwind CSS for styling.
- REST API integration for dynamic data.

# 📂 Project Structure

    src/
    ├── Components/
    │   ├── Filter/       # Country selection dropdown
    │   ├── Header/       # App header
    │   └── Timings/      # Display prayer timings
    ├── Utils/
    │   ├── api.js        # API fetch endpoints and configuration
    │   └── handlers.js   # functions and helpers
    ├── App.js            # Main app component

# 🔧 Installation and Setup

1. Clone the Repository

   ```
   git clone https://github.com/your-username/prayer-timings.git
   cd prayer-timings
   ```

2. Install Dependencies

   ```
   npm install
   ```

3. Add Environment Variables

   Create a `.env` file in the root directory and add the following:

   ```
   REACT_APP_TIMINGS_PRAYER_API=https://api.aladhan.com/v1
   REACT_APP_COUNTRIES_API=https://restcountries.com/v3.1
   ```

4. Start the Development Server
   ```
   npm start
   ```

# 🌐 APIs Used

- [Aladhan API](https://aladhan.com/prayer-times-api)

  Provides prayer timings for any location.

- [REST Countries API](https://restcountries.com/)

  Used to fetch the list of countries for the dropdown.

# 📜 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

# 👨‍💻 Author

- Mustafa Sayed

  Front-End Developer specializing in React.js.

  - [LinkedIn](https://www.linkedin.com/in/mustafa-sayed-95088b336/)
  - [GitHub](https://github.com/Mustafa-Sayed-M)

# 🌟 Star the Repo

If you found this project helpful, please give it a ⭐ on [GitHub!](https://github.com/Mustafa-Sayed-M/Prayer-Timings) 😊
