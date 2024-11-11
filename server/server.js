const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const chart_data = [
    { date: "07/01", orders: 45 },
    { date: "07/02", orders: 52 },
    { date: "07/03", orders: 49 },
    { date: "07/04", orders: 100 },
    { date: "07/05", orders: 55 },
    { date: "07/06", orders: 58 },
    { date: "07/07", orders: 62 },
];


io.on("connection", (socket) => {
    console.log("User connected");
    // socket.on("message", (message, roomName) => {
    //     console.log("Sending message: " + message);
    //     if (roomName.length) {
    //         io.to(roomName).emit("message", message)
    //     } else {
    //         io.emit("message", message)
    //     }
    // });
    // socket.on("disconnect", () => {
    //     console.log("User disconnected");
    // });
    // socket.on("joinRoom", (roomName) => {
    //     console.log("Joined room: " + roomName);
    //     socket.join(roomName);
    // })

    socket.emit("chart_data", chart_data);
})

console.log("starting in server.js");