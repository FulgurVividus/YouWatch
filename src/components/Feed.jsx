import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(
    function () {
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
    },
    [selectedCategory]
  );

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright ©{new Date().getFullYear()} Murodjon
        </Typography>
      </Box>

      {/* Main Content */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
}

export default Feed;
