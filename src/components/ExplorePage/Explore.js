import React from "react";
import { Container, Grid, Card, CardMedia, styled } from "@mui/material";
import { mockPosts } from "./ExploreData";

const StyledCardMedia = styled(CardMedia)({
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
  },
});

const ExplorePage = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              {mockPosts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card>
                    <StyledCardMedia
                      component="img"
                      height="300"
                      image={post.image}
                      alt={post.caption}
                      style={{ marginTop: "16px" }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExplorePage;
