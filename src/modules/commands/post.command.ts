const postCommand = async (request: Request, reply: Response) => {
    const entity = request.params.entity;
    return { hello: 'world POST ' + entity }
};

module.exports = postCommand;