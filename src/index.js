import React from "react";
import ReactDOM from "react-dom/client";
// import store from "./redux/config/configStore";
// import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </QueryClientProvider>
);
