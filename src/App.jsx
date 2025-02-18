import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import CreatePostOneAccount from "./Pages/CreatePostOneAccount";
import ViewPosts from "./Pages/ViewPosts";
import ViewPostOneAccount from "./Pages/ViewPostOneAccount";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    username: "",
    profileImage: "https://via.placeholder.com/60",
    isActive: false,
    posts: 0,
    time: "",
  });
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated by looking for token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set authenticated if token is available
  }, []);

  // Fetch accounts from the API
  useEffect(() => {
    if (isAuthenticated) {
      const fetchAccounts = async () => {
        try {
          const accountsResponse = await fetch(
            "http://localhost:5000/api/accounts/"
          );
          if (accountsResponse.ok) {
            const data = await accountsResponse.json();
            setAccounts(data); // Update the state with the fetched accounts
          } else {
            console.error("Failed to fetch accounts:", accountsResponse.status);
          }
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      };

      fetchAccounts(); // Call the fetch function when authenticated
    }
  }, [isAuthenticated]);

  // Function to add a new account
  const addAccountHandler = async () => {
    if (newAccount.username.trim()) {
      const validNewAccount = {
        ...newAccount,
        time: new Date().toISOString(), // Add a timestamp
      };

      try {
        const response = await fetch("http://localhost:5000/api/accounts/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validNewAccount),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Account successfully created:", data);

          // Fetch the updated accounts list after adding a new account
          const accountsResponse = await fetch(
            "http://localhost:5000/api/accounts/"
          );
          if (accountsResponse.ok) {
            const updatedAccounts = await accountsResponse.json();
            setAccounts(updatedAccounts); // Update the accounts state
          }

          // Clear the new account form
          setNewAccount({
            username: "",
            profileImage: "https://via.placeholder.com/60",
            isActive: false,
            posts: 0,
            time: "",
          });
        } else {
          console.error("Failed to create account:", response.status);
        }
      } catch (error) {
        console.error("Error while creating account:", error);
      }
    } else {
      console.log("No username provided, cannot create account.");
    }
  };

  const handleToggleActive = (username) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.username === username
          ? { ...account, isActive: !account.isActive }
          : account
      )
    );
  };

  const handleCreatePost = (account) => {
    setSelectedAccount(account);
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {!isAuthenticated ? (
          <Routes>
            {/* Only render Login or Register if not authenticated */}
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            {/* Show main layout if authenticated */}
            <Navbar />
            <div className="flex flex-grow pt-[80px]">
              <Sidebar />
              <div className="flex-1 p-6 ml-[70px]">
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                    path="/home"
                    element={
                      <Home
                        accounts={accounts}
                        setAccounts={setAccounts}
                        newAccount={newAccount}
                        setNewAccount={setNewAccount}
                        addAccountHandler={addAccountHandler}
                        handleToggleActive={handleToggleActive}
                        handleCreatePost={handleCreatePost}
                      />
                    }
                  />
                  <Route
                    path="/create-post"
                    element={
                      <CreatePost
                        accounts={accounts}
                        setAccounts={setAccounts}
                      />
                    }
                  />
                  <Route
                    path="/create-post-one-account"
                    element={<CreatePostOneAccount account={selectedAccount} />}
                  />
                  <Route path="/view-posts" element={<ViewPosts />} />
                  <Route
                    path="/view-posts-one-account"
                    element={<ViewPostOneAccount />}
                  />
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
