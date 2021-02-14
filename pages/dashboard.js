import React from "react";
import Router from "next/router";
import Head from "next/head";

import { useFetchUser } from "../utils/user";
import { ResponsiveDrawer, Spinner, CustomizedTables } from "../components";

export default function Dashboard() {
  const { user, loading } = useFetchUser();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    Router.push("/");
    return null;
  }
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <ResponsiveDrawer>
        <button
          style={{
            background: "var(--primary-color)",
            outline: "none",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            width: "100%",
            padding: "0.8rem 0",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#eee",
          }}
          onClick={(e) => {
            e.preventDefault();
            Router.push("/api/logout");
          }}
        >
          Logout
        </button>
        <div style={{ marginTop: "2rem" }}>
          <CustomizedTables />
        </div>
      </ResponsiveDrawer>
    </>
  );
}
