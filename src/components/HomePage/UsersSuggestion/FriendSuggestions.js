import React from "react";
import { Card, CardContent, Avatar, Typography, Button } from "@mui/material";
import { friendSuggestions, footer } from "./SuggestionsData";
function FriendSuggestions() {
  return (
    <Card
      sx={{
        color: "white",
        marginTop: "20px",
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Avatar
            src={require("../../../assets/moath.jpeg")}
            alt="moath"
            style={{ marginRight: "10px" }}
          />
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1">moath_abdalrazeq</Typography>
            </div>
            <Typography variant="body1" color="gray">
              Moath Abdalrazeq
            </Typography>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Button variant="text" color="primary" size="small">
              Switch
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" color="gray">
            {" "}
            Suggestions for You
          </Typography>
          <Button variant="text" style={{ color: "white" }} size="small">
            See All
          </Button>
        </div>
        {friendSuggestions.map((friend) => (
          <div
            key={friend.id}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <Avatar src={friend.avatar} alt={friend.name} />
            <div>
              <Typography variant="body2" style={{ color: "white" }}>
                {friend.name}
              </Typography>
              <Typography variant="body1" color="gray">
                {friend.follow}
              </Typography>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="text" color="primary" size="small">
                Follow
              </Button>
            </div>
          </div>
        ))}
        {footer.map((footers) => (
          <button
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
            style={{
              background: "none",
              border: "none",
              color: "gray",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            {footers.name}
          </button>
        ))}
        <Typography
          variant="body2"
          style={{ color: "gray", marginTop: "20px" }}
        >
          © 2023 INSTAGRAM FROM META
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FriendSuggestions;
