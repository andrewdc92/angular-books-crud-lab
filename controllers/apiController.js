function index(req, res) {
  res.json({
    message: "Welcome to BooksApp!",
    documentation_url: "https://github.com/andrewdc92/angular-books-crud-lab/blob/master/README.md",
    // base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
