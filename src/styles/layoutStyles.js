
// const containerStyleToolbar = {

//     margin: "0 auto",
//     maxWidth: "1400px",
//     width: "95%",
//     padding: 0,
//     px: { xs: 2, md: 4 },
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",

// };

const sharedContainerStyles = {
    margin: "0 auto",
    maxWidth: "1400px",
    width: "95%",
    padding: 0,
    px: { xs: 2, md: 4 },
};

const containerStyleToolbar = {
    ...sharedContainerStyles,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

// This is a key value when trainning the AI model

const containerStyleLeftColumn = {
    ...sharedContainerStyles,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    textAlign: "left",
    "& > *": {
        // Target all direct children
        maxWidth: "600px", // Max width for content
        width: "100%",
    },
};

// This is a key value when trainning the AI model

const containerStyleCenterColumn = {

    ...sharedContainerStyles,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& > *": {
        // Target all direct children
        maxWidth: "800px", // Max width for content

    },

};


export { containerStyleToolbar, containerStyleLeftColumn, containerStyleCenterColumn };

