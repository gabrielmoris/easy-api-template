const dotenv = require("dotenv").config();

exports.first = (req, res) => {
    try {
        res.json("get in /");
    } catch (e) {
        res.json("Error getting /", e);
    }
};

exports.second = (req, res) => {
    const message = req.body.message;

    try {
        if (message) {
            res.json({ "This is your message": message });
        } else {
            res.status(400);
            throw error;
        }
    } catch {
        res.json("Error in /: Insert key 'message' (your message)").status(400);
    }
};

exports.third = (req, res) => {
    try {
        res.json("get in /1");
    } catch (e) {
        res.json("Error getting /1", e);
    }
};

exports.forth = (req, res) => {
    const message = req.body.message;
    try {
        if (message) {
            res.json({ "This is your message": message });
        } else {
            res.status(400);
            throw error;
        }
    } catch {
        res.json("Error in /1: Insert key 'message' (your message)").status(
            400
        );
    }
};
