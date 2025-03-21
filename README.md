# 📌 City Events App

## Project Description

**City Events App** is a web application designed to browse and discover city events. It features a **landing page** that displays a **grid-based catalog** of events, allowing users to filter events by **category, location, date range, or title**. Clicking on an event redirects the user to a **Product Detail Page (PDP)** where more details are available, along with a **CTA button** to simulate purchasing a ticket.

---

## 🚀 Technologies Used

The project was built using the following stack:

- **Next.js 15.2.3** – React framework for server-side rendering and API routes
- **React 19** – Component-based UI development
- **Zustand** – Lightweight state management
- **React Datepicker** – Date selection for filtering events
- **Date-fns** – Utility functions for date manipulation
- **React Icons** – Icon library
- **TailwindCSS** – Styling framework for responsive design

---

## 🛠 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/rsolanoe/city-events-app
   cd city-events-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following content:

   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at **http://localhost:3000**.

---

## 📡 API & Data Handling

The application **does not use an external API**. Instead, it simulates API calls using **Next.js API routes**:

- **GET /api/events** → Returns a list of events (data from a mock file).
- **GET /api/events/:id** → Fetches a single event by ID.

Mock data is stored in the `/mocks` folder to simulate a real API request.

---

## 📂 Project Structure

The project is organized as follows:

```
src/
 ├── app/
 │    ├── grid/       # Event catalog (Landing Page)
 │    ├── purchase-flow/  # Event detail & ticket simulation (PDP)
 │    ├── api/events/ # API endpoints (mock data)
 │    ├── layout.tsx  # Global layout
 │    ├── globals.css # Global styles
 │    ├── loading.tsx, not-found.tsx # Loading and error pages
 │
 ├── components/  # Reusable UI components
 │    ├── Navbar/
 │    ├── Wrappers/
 │    ├── ActionFilters.tsx
 │
 ├── hooks/       # Custom React hooks
 │    ├── useInfiniteScroll.ts
 │
 ├── libs/        # Utility functions and API services
 │    ├── services/events/
 │    ├── utils/
 │
 ├── stores/      # Zustand stores for global state management
 │    ├── event/useEventStore.ts
 │
 ├── types/       # TypeScript type definitions
```

The project follows a **modular structure**, separating concerns such as:

- **API calls (services)**
- **Global state (store)**
- **Custom hooks (hooks)**
- **Mock data (mocks)**

This makes the app scalable and easy to maintain.

---

## ✨ Key Features (Updated)

- **Event Filtering** – Users can filter events by category, location, date range, or title.
- **Infinite Scroll** – Events load dynamically as the user scrolls down.
- **Back to Top Button** – After several scrolls, a button appears to quickly return to the top.
- **Skeleton Loaders** – Placeholder UI for better UX while fetching data.
- **Dynamic Routing** – Clicking on an event opens a dedicated event detail page (PDP).
- **Mock API** – Uses Next.js API routes to simulate real API requests.
- **Optimized Image Handling** – Uses Next.js `next/image`, which automatically applies **lazy loading, responsive sizes, and image compression** to optimize performance and reduce bandwidth usage, ensuring faster load times and better user experience.

---

## 📌 Technical Decisions

A few important architectural decisions include:

- **Dividing routes into two main sections (`grid` & `purchase-flow`)** – This makes it easier to scale the app if new flows are introduced.
- **Using Server-Side Rendering (SSR) for pages** – This ensures that every time a user refreshes the page, a new API request is made, fetching the most up-to-date event data. Given that events frequently change dates, locations, and other details, this approach eliminates the need to redeploy the application whenever event data changes. Additionally, SSR reduces the load on the client by pre-rendering content on the server before delivering it to the browser, enhancing performance and SEO.
- **Using Zustand as the single source of truth** – All event data and filtering logic are managed globally for consistency.
- **Organizing code into separate folders (`services`, `utils`, `store`, `mocks`, `types`)** – This improves maintainability and scalability.

## 🔮 Future Improvements

If I had more time, I would:

- **Improve UI/UX**: Enhance design, add animations, and refine responsiveness.
- **Implement real API integration**: Replace mock data with a real event database.
- **Implement authentication**: Allow users to sign in and manage their event bookings.

---

## 🏆 Challenges Faced

Developing **City Events App** presented several technical and architectural challenges:

- **Optimizing Server-Side Rendering (SSR)**: Ensuring that event data was always fresh while balancing performance trade-offs. Implementing SSR helped reduce client-side workload but required careful handling of API calls.
- **Managing Global State Efficiently**: Choosing **Zustand** over heavier state management solutions like Redux helped keep the store lightweight, but structuring it to handle filters dynamically was a challenge.
- **Implementing Infinite Scroll**: Handling dynamic pagination while maintaining smooth user experience and performance required debouncing logic and conditional fetching strategies.
- **Ensuring a Modular Project Structure**: Defining a clear separation of concerns in folders (`services`, `store`, `hooks`, etc.) to keep the codebase maintainable as features scaled.

---

## 📚 Learnings & Takeaways

Building this app reinforced key frontend principles:

- **SSR vs. CSR Trade-offs**: Understanding when to use Server-Side Rendering vs. Client-Side Rendering, especially in a data-driven app like this.
- **State Management Best Practices**: Zustand provided a simple yet effective way to handle global state without unnecessary complexity.
- **Performance Optimization**: Implementing **lazy loading, skeleton loaders, and infinite scrolling** helped improve the UX while optimizing resource usage.
- **Next.js API Routes for Mock Data**: This approach allowed the app to function like a real-world production application even without an external API.
- **Scalable Folder Structure**: A well-organized architecture made development more efficient and maintainable, reducing code duplication.

---

## 🚀 Deployment

This project is deployed on **Vercel** and can be accessed at:  
🔗 **[City Events App](https://city-events-app-eight.vercel.app/events)**

---

## 👤 Author

**Rodolfo Solano**  
📧 rjse31@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/rjsolanoe/)

---
