import React from "react";

const NoTasksBanner = () => {
  return (
    <div style={styles.banner}>
      <h1 style={styles.header}>🌟 No Tasks Available 🌟</h1>
      <p style={styles.text}>✨ Your task list is currently empty! ✨</p>
      <p style={styles.text}>Take this opportunity to:</p>
      <ul style={styles.list}>
        <li>
          ➕ <strong>Add new tasks</strong>
        </li>
        <li>💡 Plan your next steps</li>
        <li>🎯 Set new goals</li>
      </ul>
      <p style={styles.text}>
        Get started by adding a task now and stay productive! 💪
      </p>
    </div>
  );
};

const styles = {
  banner: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
    fontSize: "18px",
  },
};

export default NoTasksBanner;
