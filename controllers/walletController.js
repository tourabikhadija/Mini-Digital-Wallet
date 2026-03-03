// controllers/walletController.js
let wallets = require("../data/wallets");

// afficher tous les wallets
const getWalletAll = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(wallets));
};

// ajouter un wallet
const postWallet = (req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
        const newWallet = JSON.parse(body);
        wallets.push(newWallet);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newWallet));
    });
};

// mettre à jour un wallet
const putWallet = (req, res) => {
    // id جاي من query string: /wallets?id=1
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(url.searchParams.get("id"));

    const index = wallets.findIndex(w => w.id === id);
    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Wallet not found" }));
    }

    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
        const updatedWallet = JSON.parse(body);
        wallets[index] = { ...wallets[index], ...updatedWallet };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(wallets[index]));
    });
};

// supprimer un wallet
const deleteWallet = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(url.searchParams.get("id"));

    const index = wallets.findIndex(w => w.id === id);
    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Wallet not found" }));
    }

    wallets.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Wallet deleted" }));
};

module.exports = { getWalletAll, postWallet, putWallet, deleteWallet };