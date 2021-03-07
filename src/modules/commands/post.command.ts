const postCommand = async (request: Request, reply: Response) => {
    return { hello: 'world POST' }
};

module.exports = postCommand;